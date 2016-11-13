import 'babel-polyfill'
import Vue from 'vue'
import Counter from './components/Counter.vue'
import store from './store/store'

new Vue({
    el: '#app',
    store,
    render: h => h(Counter)
})




