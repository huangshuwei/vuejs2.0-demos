import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

import {state} from './state'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    state:state,
    getters:getters,
    actions,
    mutations
  /*  plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []*/
})
