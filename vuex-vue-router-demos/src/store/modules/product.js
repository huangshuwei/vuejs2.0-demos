import * as types from "../mutation-types";
import mockServer from "../../api/mockServer";

// state
const state = {
    productList: []
}


// action
const actions = {
    product_GetData (context){

        mockServer.getProducts(products => {
            context.commit(types.PRODUCT_GET_DATA, {products})
        })

        /*    setTimeout(function () {

         },1300)*/
    }
}

// mutations
const mutations = {
    // 获取产品信息
    [types.PRODUCT_GET_DATA] (state, payload){
        state.productList = payload.products
    },

    // 减库存
    [types.PRODUCT_REDUCE] (state, payload){
        var product = state.productList.find(p => p.id === payload.productId)
        product.stock--
    }
}


export default {
    state,
    actions,
    mutations
}