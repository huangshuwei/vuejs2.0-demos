import * as types from './mutation-types'

export default {
    // 设置加载状态
    [types.COMM_SET_LOADING] (state,payload){
        state.loading = payload
    }
}
