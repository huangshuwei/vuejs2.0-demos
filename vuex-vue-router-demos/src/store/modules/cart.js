import * as types from "../mutation-types";

// state
/*
 sharp
{
    count: 0,
    products: [
        {productId:1,count:2},
        {productId:2,count:1},
    ]
}
*/
const state = {
    totalCount: 0,
    products: []
}

// action
const actions = {

    // 加入购物车、减库存
    cart_Add (context, payload) {
        context.commit(types.CART_ADD, {
            productId: payload.productId
        })

        context.commit(types.PRODUCT_REDUCE, {
            productId: payload.productId
        })
    }
}


// mutations
const mutations = {
    [types.CART_ADD] (state, payload){
        console.log('--state--');
        console.log(state)
        var record = state.products.find(p => p.productId === payload.productId)

        state.totalCount++

        // 此商品已经添加过
        if (record) {
            record.count ++
        } else {
            state.products.push({
                productId:payload.productId,
                count:1
            })
        }

    }
}


export default {
    state,
    actions,
    mutations
}
