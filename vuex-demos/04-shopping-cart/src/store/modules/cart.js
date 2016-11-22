import * as types from "../mutation-types";


// state
const state = {
    added: [],
    checkoutStatus: null
}

// mutations
const mutations = {
    [types.ADD_TO_CART] (state, {id}){
        alert(1)
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

    [types.CHECKOUT_FAILURE] (state,{savedCartItems}){
        // rollback to the cart saved before sending the request
        console.log('saveCartItems :'+savedCartItems);

        state.added = savedCartItems
        state.checkoutStatus = 'failed'
    }
}

export default {
    state,
    mutations
}











