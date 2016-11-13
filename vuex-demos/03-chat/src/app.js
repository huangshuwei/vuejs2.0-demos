import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store/store'

import { getAllMessages } from './store/actions'



Vue.filter('time-filter', timestamp => {
    console.log('timestamp:'+timestamp);
    return new Date(timestamp).toLocaleTimeString()
})

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})

getAllMessages(store)

