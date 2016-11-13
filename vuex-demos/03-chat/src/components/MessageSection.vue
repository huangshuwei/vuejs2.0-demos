<template>
    <div class="message-section">
        <h3 class="message-thread-heading">{{ thread.name }}</h3>
        <ul class="message-list" ref="list">
            <message
                    v-for="message in sortedMessages"
                    :key="message.id"
                    :message="message">
            </message>
        </ul>
        <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
    </div>
</template>

<script>
    import Message from './Message.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'MessageSection',
        components: {Message},
        computed: {
            ...mapGetters({
                thread: 'currentThread',
                messages: 'currentMessages'
            }),
            sortedMessages () { // 返回一个根据时间排序后的新对象，不会修改原来的对象（保证原来的状态不变化）
                return this.messages
                        .slice()
                        .sort((a, b) => a.timestamp - b.timestamp)
            }
        },
        watch: {
            // 调整滚动条的高度
            'thread.lastMessage': function () {
                // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
                this.$nextTick(() => {
                    const ul = this.$refs.list
                    ul.scrollTop = ul.scrollHeight
                })
            }
        },
        methods: {
            sendMessage (e) {
                console.log('sendMessage-1')

                const text = e.target.value
                console.log(text);
                console.log(this.thread);
                if (text.trim()) {
                    this.$store.dispatch('sendMessage', {
                        text,
                        thread: this.thread
                    })
                    e.target.value = ''
                }
            }
        }
    }
</script>
