var path = require('path');

var webpack = require('webpack');

/*
 * verify config
 * （验证config文件是否正确）
 * */
var validate = require('webpack-validator');

/*
 * clean publishing directory
 * （清空发布目录）
 * */
var CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 * create html
 * （创建html文件）
 * */
var HtmlWebpackPlugin = require('html-webpack-plugin');


/*
 * extract css
 * （提取css文件）
 * */
var ExtractTextPlugin = require("extract-text-webpack-plugin");


/*
 *  merge config
 *  （合并config文件）
 * */
var Merge = require('webpack-merge');

/*
 * auto open browser
 * （自动打开浏览器）
 * */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/*
 *  Detect how npm is run and branch based on that
 *  （当前 npm 运行）
 * */
var currentTarget = process.env.npm_lifecycle_event;

var debug,          // is debug
    devServer,      // is hrm mode
    minimize;       // is minimize


if (currentTarget == "build") { // online mode （线上模式）

    debug = false, devServer = false, minimize = true;

} else if (currentTarget == "dev") { // dev mode （开发模式）

    debug = true, devServer = false, minimize = false;

} else if (currentTarget == "hrm") { // dev HRM mode （热更新模式）

    debug = true, devServer = true, minimize = false;
}


/*
 * proxy target address
 * （代理访问地址）
 * */
var proxyTarget = 'http://localhost:8888/';


var PATHS = {
    /*
     * publish path
     * （发布目录）
     * */
    publicPath: devServer ? '/02-counter/src/' : './',

    /*
     * node_modules path
     */
    node_modulesPath: path.resolve('../../node_modules'),
}


var resolve = {
    /*
     * An array of extensions that should be used to resolve modules
     * （引用时可以忽略后缀）
     * */
    extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg'],


    /*
     * The directory (absolute path) that contains your modules
     * */
    root: [
        PATHS.node_modulesPath
    ],


    /*
     * Replace modules with other modules or paths.
     * （别名，引用时直接可以通过别名引用）
     * */
    alias: {
        'vue$': 'vue/dist/vue'
    }
}

/*
 * The entry point for the bundle.
 * （入口）
 * */
var entry = {
    app: './src/app.js',
    common: [
        'vue', 'babel-polyfill'
    ],
};


/*
 * output options tell Webpack how to write the compiled files to disk
 * （webpack 编译后输出标识）
 * */
var output = {
    /*
     *  determines the location on disk the files are written to
     *  （输出目录）
     * */
    path: path.join(__dirname, 'dist'),

    /*
     * The publicPath specifies the public URL address of the output files when referenced in a browser
     * （发布后，资源的引用目录）
     * */
    publicPath: PATHS.publicPath,

    /*
     * Specifies the name of each output file on disk
     * （文件名称）
     * */
    filename: debug ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',

    /*
     * The filename of non-entry chunks as relative path inside the output.path directory.
     * （按需加载模块时输出的文件名称）
     * */
    chunkFilename: debug ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
}

var loaders = [

    /*
     * vue loader
     */
    {
        test: /\.vue$/, loader: 'vue'
    },

    /*
     * babel-loader
     */
    {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/
    },

    /*
     * Exports HTML as string, require references to static resources.
     * （html loader）
     * */
    {
        test: /\.html$/, loader: "html"// loader: "html?-minimize"
    },


    /*
     * img loader
     * */
    {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'url-loader',
        query: {
            /*
             *  limit=10000 ： 10kb
             *  图片大小小于10kb 采用内联的形式，否则输出图片
             * */
            limit: 10000,
            name: '/img/[name]-[hash:8].[ext]'
        }
    },


    /*
     * font loader
     * */
    {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
        query: {
            limit: 5000,
            name: '/font/[name]-[hash:8].[ext]'
        }
    },


    /*
     * Extract css files
     * （提取css到单独文件loader）
     */
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
    },


];

var plugins = [

    /*
     * gloabal flag
     * （全局标识）
     * */
    new webpack.DefinePlugin({
        /*
         * dev flag
         * （开发标识）
         * */
        __DEV__: debug,

        /*
         * proxy flag
         * （代理的标识）
         * */
        __DEVAPI__: debug ? "/devApi/" : "''",


        /*
         * 去除vue的所有警告代码：http://vue-loader.vuejs.org/en/workflow/production.html
         * */
        'process.env': debug ? {
            NODE_ENV: '"production"'
        } : {}
    }),

    /*
     * common js
     * （公共js）
     * */
    new webpack.optimize.CommonsChunkPlugin(
        devServer ?
        {name: "common", filename: "js/common.js"} :
        {names: ["common", "webpackAssets"]}
    ),

    /*
     * Search for equal or similar files and deduplicate them in the output
     * （删除重复依赖的文件）
     */
    new webpack.optimize.DedupePlugin(),


    /*
     * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
     * （避免在文件不改变的情况下hash值不变化）
     * */
    new webpack.optimize.OccurenceOrderPlugin(),


    /*
     * clean publishing directory
     * （发布前清空发布目录）
     * */
    new CleanWebpackPlugin(['dist'], {
        root: '', // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        dry: false // Do not delete anything, good for testing.
    }),


    /*
     * extract css
     * （提取css文件到单独的文件中）
     */
    new ExtractTextPlugin(debug ? "css/[name].css" : "css/[name]-[chunkhash:8].css", {allChunks: true}),


    /*
     *create html file
     * （创建html文件）
     * */
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/src/index.html',
        inject: 'true',

        // 需要依赖的模块
        chunks: ['common', 'app', 'webpackAssets'],

        // 根据依赖自动排序
        chunksSortMode: 'dependency'
    })
];


if (minimize) {

    plugins.push(
        /*
         * Uglify
         * （压缩）
         * */
        new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    )
}


var config = {
    entry: entry,
    /*
     *  Like resolve but for loaders.
     *  （查找loader 的位置）
     * */
    resolveLoader: {root: PATHS.node_modulesPath},
    output: output,
    module: {
        loaders: loaders
    },
    resolve: resolve,
    plugins: plugins,

}


/*
 *  Hrm setting
 * （开启热更新，并自动打开浏览器）
 * */
if (devServer) {

    config = Merge(
        config,
        {
            plugins: [
                // Enable multi-pass compilation for enhanced performance
                // in larger projects. Good default.
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                }),
                new OpenBrowserPlugin({url: 'http://localhost:8030' + PATHS.publicPath + 'index.html'})
            ],
            devServer: {
                // Enable history API fallback so HTML5 History API based
                // routing works. This is a good default that will come
                // in handy in more complicated setups.
                historyApiFallback: true,

                // Unlike the cli flag, this doesn't set
                // HotModuleReplacementPlugin!
                hot: true,
                inline: true,

                // Display only errors to reduce the amount of output.
                stats: 'errors-only',

                // Parse host and port from env to allow customization.
                //
                // If you use Vagrant or Cloud9, set
                // host: options.host || '0.0.0.0';
                //
                // 0.0.0.0 is available to all network devices
                // unlike default `localhost`.
                host: "localhost", // Defaults to `localhost`   process.env.HOST
                port: "8030",  // Defaults to 8080   process.env.PORT
                /*
                 *  代理访问
                 *  1、可以绕过同源策略 和 webpack '热更新'结合使用
                 */
                proxy: {
                    '/devApi/*': {
                        target: proxyTarget,
                        secure: true,
                        //rewrite 的方式扩展性更强，不限制服务的名称
                        rewrite: function (req) {
                            req.url = req.url.replace(/^\/devApi/, '');
                        }
                    }
                }
            }
        }
    );
}

module.exports = validate(config);






