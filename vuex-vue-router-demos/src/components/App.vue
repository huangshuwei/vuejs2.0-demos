<template>
    <div class="main">
        <div class="topbar">
            <ul class="menu">
                <li>
                    <router-link to="/Home">首页</router-link>
                </li>
                <li>
                    <router-link to="/Product">商品</router-link>
                </li>
                <li>
                    <router-link to="/Cart">购物车<span :class="cartClass()">（{{cartCount}}）</span></router-link>
                </li>
            </ul>

        </div>
        <div id="container">
            <transition name="component" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

        <!--loading-->
        <!--   <Loading></Loading>-->
    </div>

</template>

<style>
    /*    .component-enter-active, .component-leave-active {
            transition: opacity .1s ease;
        }
        .component-enter, .component-leave-active {
            opacity: 0;
        }*/
</style>

<script>
    import '../css/main.css'

    import Loading from './common/Loading.vue'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name:'app',
        components: {
            Loading
        },
        data(){
            return {}
        },
        computed: {

            ...mapGetters({
                cartCount: 'cartTotalCount'
            }),
        },
        methods: {
            // 购物车数量大于1，加粗效果
            cartClass () {
                console.log('cartTotalCount2-------------');

                return this.cartCount > 0 ? 'hasProduct' : ''
            }
        }
    }
</script>