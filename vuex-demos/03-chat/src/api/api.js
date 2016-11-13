const data = require('./mock_datas')
const LATENCY = 1000

export function getAllMessages (cb) {
    console.log('getAllMessages-2');
    console.log(data);
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
    console.log('sendMessage-3')
    console.log(cb)
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const message = {
        id,
        text,
        timestamp,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'huangsw'
    }
    setTimeout(function () {
        cb(message)
    }, LATENCY)
}
