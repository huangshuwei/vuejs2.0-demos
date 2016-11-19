import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import cart from './modules/cart'
import product from './modules/product'

import createLogger from '../../../libs/js/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        cart,
        product
    },
    strict: true,
    plugins: __DEV__ ? [createLogger()] : [],
    strict :true
})
