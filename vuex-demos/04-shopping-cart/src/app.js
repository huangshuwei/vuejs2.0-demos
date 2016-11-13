import "babel-polyfill";
import Vue from "vue";
import App from "./components/App.vue";
import store from "./store";
import {currency} from "./filter";


Vue.filter('currency-filter', currency)

new Vue({
    el: '#app',
    store,
    render: h =>h(App)
})
