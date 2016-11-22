<template>
    <div>
        {{message}}
    </div>
</template>

<script>
    export default{
        name:'home',
        data () {
            return {
                message: '这个是一个vuex 结合 vue-router 的购物车实例'
            }
        }
    }
</script>