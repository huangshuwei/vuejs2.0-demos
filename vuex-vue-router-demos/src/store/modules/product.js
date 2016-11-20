import * as types from '../mutation-types'

import mockServer from '../../api/mockServer'

// state
const state = {
    productList:[]
}


// action
const actions = {
    product_GetData (context){

        context.commit(types.COMM_SET_LOADING,{
            isLoading:true
        })

        setTimeout(function () {
            mockServer.getProducts(products=>{

                if (products && products.length >0){
                    context.commit(types.COMM_SET_LOADING,{
                        isLoading:false,
                        isError:false
                    })
                }else{
                    context.commit(types.COMM_SET_LOADING,{
                        isLoading:true,
                        isError:true,
                        errorText:'请刷新页面重试...'
                    })
                }

                context.commit(types.PRODUCT_GET_DATA,{products})
            })
        },1300)
    }
}

// mutations
const mutations = {
    // 获取产品信息
    [types.PRODUCT_GET_DATA] (state,payload){
        state.productList = payload.products
    }



}


export default {
    state,
    actions,
    mutations
}