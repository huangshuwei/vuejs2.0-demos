import * as types from "../mutation-types";

// state
const state = {
    all: []
}

// mutations
const mutations = {
    [types.RECEIVE_PRODUCTS] (state, {products}){
        state.all = products
    },

    [types.ADD_TO_CART] (state,{id}){
        alert(2)
        state.all.find(p=>p.id === id).inventory--
    }
}

export default {
    state,
    mutations
}

