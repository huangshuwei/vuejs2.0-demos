## 介绍

这是vuejs2.0 demos,共包含三部分 vue-demos、vue-router-demos和vuex-demos

## 运行实例

首先将这个项目克隆到你的本地

```
$ git clone https://github.com/huangshuwei/vuejs2.0-demos.git
```

vue-demos 和 vue-router-demos 找到对应的实例，在浏览器打开即可查看效果；

vuex-demos 实例是和 webpack 结合使用的，需要进行以下安装

全局安装 webpack（已安装跳过）

```
$ npm install webpack -g
```

项目中安装

```
$ npm install
```

执行命令，查看效果

* 生产环境:
`
$ npm run build
`

* 开发预览环境:
`
$ npm run dev
`

* 热替换模式（实时编译，刷新浏览器）:
`
$ npm run hrm
`



## vue-demos

[01-基础](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80)

- [01-helloworld](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/01-helloworld)
- [02-v-if](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/02-v-if)
- [03-v-model](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/03-v-model)
- [04-props](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/04-props)
- [05-v-once](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/05-v-once)
- [06-v-html](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/06-v-html)
- [07-component、v-for](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/07-component%E3%80%81v-for)
- [08-data属性](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/08-data%E5%B1%9E%E6%80%A7)
- [属性和方法](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/01-%E5%9F%BA%E7%A1%80/%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95)

[02-模板语法](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/02-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)

- [01-v-bind](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/02-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95/01-v-bind)
- [02-v-on](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/02-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95/02-v-on)


[03-计算属性](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/03-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

- [01-计算属性](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/03-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/01-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)
- [02-watch属性](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/03-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/02-watch%E5%B1%9E%E6%80%A7)
- [03-setter](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/03-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/03-setter)

[04-class与style绑定](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/04-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A)

- [01-对象语法](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/04-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A/01-%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95)
- [02-通过内联样式](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/04-class%E4%B8%8Estyle%E7%BB%91%E5%AE%9A/02-%E9%80%9A%E8%BF%87%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F)

[05-条件渲染](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/05-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)

- [01-v-if](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/05-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/01-v-if)
- [02-v-show](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-demos/05-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/02-v-show)

后面再整理...

## vue-router-demos

- [01-简单的路由配置](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/01-%E7%AE%80%E5%8D%95%E7%9A%84%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)
- [02-动态路由配置](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/02-%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)
- [03-嵌套路由](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/03-%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1)
- [04-编程式的导航](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/04-%E7%BC%96%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA)
- [05-命名路由（待补充）](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/05-%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1%EF%BC%88%E5%BE%85%E8%A1%A5%E5%85%85%EF%BC%89)
- [06-重定向和别名）](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/06-%E9%87%8D%E5%AE%9A%E5%90%91%E5%92%8C%E5%88%AB%E5%90%8D)
- [07-导航钩子（待补充）](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/07-%E5%AF%BC%E8%88%AA%E9%92%A9%E5%AD%90%EF%BC%88%E5%BE%85%E8%A1%A5%E5%85%85%EF%BC%89)
- [08-路由元数据信息（待补充）](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/08-%E8%B7%AF%E7%94%B1%E5%85%83%E6%95%B0%E6%8D%AE%E4%BF%A1%E6%81%AF%EF%BC%88%E5%BE%85%E8%A1%A5%E5%85%85%EF%BC%89)
- [09-数据获取（待补充）](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vue-router-demos/09-%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96%EF%BC%88%E5%BE%85%E8%A1%A5%E5%85%85%EF%BC%89)


## vuex-demos

- [01-基础](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vuex-demos/01-%E5%9F%BA%E7%A1%80)
- [02-counter](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vuex-demos/02-counter)
- [03-chat](https://github.com/huangshuwei/vuejs2.0-demos/tree/master/vuex-demos/03-chat)


