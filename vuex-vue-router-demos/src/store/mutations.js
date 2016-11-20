import * as types from './mutation-types'

export default {
    // 设置加载状态
    [types.COMM_SET_LOADING] (state, {
        isLoading=false,
        loadingText='加载中...',
        isError=false,
        errorText='请求失败...'
    }){
        state.loading.isLoading = isLoading
        state.loading.loadingText = loadingText,
        state.loading.isError = isError,
        state.loading.errorText = errorText
    }
}
