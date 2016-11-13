<template>
    <div id="app">
        Clicked: {{ count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        /*computed: {
         evenOrOdd:function () {
         return this.$store.getters.evenOrOdd
         },
         count:function () {
         return this.$store.getters.count
         }
         },*/
        // 等同于下面的方式
        computed: mapGetters([
            'evenOrOdd', // 将evenOrOdd 映射到 store.getters.doneTodosCount
            'count'
        ]),
        /*methods:mapActions([
         'increment',
         'decrement',
         'incrementIfOdd',
         'incrementAsync'
         ])*/
        // 等同于下面的方式
        methods: {
            increment: function () {
                this.$store.dispatch('increment')
            },
            decrement: function () {
                this.$store.dispatch('decrement')
            },
            incrementIfOdd: function () {
                this.$store.dispatch('incrementIfOdd')
            },
            incrementAsync: function () {
                this.$store.dispatch('incrementAsync')
            }
        }
    }


</script>
