import * as types from '../mutation-types'

// state
const state = {
    count: 0,
    productIds: []
}

// action
const actions = {

    addCart (context, payload) {
        context.commit(types.CART_ADD, {
            productId: payload.productId
        })
    }
}


// mutations
const mutations = {
    [types.CART_ADD] (state, payload){
        state.count++
        state.productIds.push(payload.productId)
    }
}


export default {
    state,
    actions,
    mutations
}
