import * as types from "../mutation-types";


// state
const state = {
    added: [],
    checkoutStatus: null
}

// mutations
const mutations = {
    [types.ADD_TO_CART] (state, {id}){
        state.lastCheckout = null;

        const record = state.added.find(p=>p.id === id)

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }

    },

    [types.CHECKOUT_REQUEST] (state){
        // clear cart
        state.added = []
        state.checkoutStatus = null;
    },

    [types.CHECKOUT_SUCCESS] (state){
        state.checkoutStatus = 'successful'
    },

    [types.CHECKOUT_FAILURE] (state,{saveCartItems}){
        // rollback to the cart saved before sending the request
        state.added = saveCartItems
        state.checkoutStatus = 'failed'
    }
}

export default {
    state,
    mutations
}











