import * as api from '../api/api'
import * as types from './mutation-types'

export const getAllMessages = (store) => {
    console.log('store:');
    console.log(store);
    const { commit } = store
    console.log('getAllMessages-1');
    api.getAllMessages(messages => {
        commit(types.RECEIVE_ALL, {
            messages
        })
    })
}

export const sendMessage = ({ commit }, payload) => {
    console.log('sendMessage-2')
    console.log(payload)

    api.createMessage(payload, message => {
        commit(types.RECEIVE_MESSAGE, {
            message
        })
    })
}

export const switchThread = ({ commit }, payload) => {
    console.log('switchThread-2');
    console.log(payload);
    commit(types.SWITCH_THREAD, payload)
}
