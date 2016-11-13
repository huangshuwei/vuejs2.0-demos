import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './action'
import * as getters from './getters'

import cart from './modules/cart'
import products from './modules/products'

import createLogger from '../../../../libs/js/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        cart,
        products
    },
    strict: true,
    plugins: __DEV__ ? [createLogger()] : []
})
