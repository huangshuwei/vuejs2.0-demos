import Vue from "vue";
import VueRouter from "vue-router";
import defaultRouter from "./components/Home.vue";

const home = r => require.ensure([], () => r(require('./components/Home.vue')), 'home')
const product = r => require.ensure([], () => r(require('./components/Product.vue')), 'product')
const cart = r => require.ensure([], () => r(require('./components/Cart.vue')), 'cart')

Vue.use(VueRouter)


export default new VueRouter({
    // 改成动态路由
    routes: [
        {path: '/', redirect: '/Home'}, // 路由重定向
        {path: '/Home', component: defaultRouter},
        {path: '/Product', component: product},
        {path: '/Cart', component: cart},
            {
                path: '*', component: {
                template: '<div>404</div>'
            }
        }
    ]
})