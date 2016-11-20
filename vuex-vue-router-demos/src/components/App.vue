<template>
    <div class="main">
        <div class="topbar">
            <ul class="menu">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/product">商品</router-link>
                </li>
                <li>
                    <router-link to="/cart">购物车<span :class="cartClass">（{{cartProductCount}}）</span></router-link>
                </li>
            </ul>

        </div>
        <div id="container">
            <router-view></router-view>
        </div>

        <!--loading-->
        <Loading></Loading>
    </div>

</template>

<script>
    import '../css/main.css'

    import Loading from './common/Loading.vue'

    export default {
        components:{
            Loading
        },
        data(){
            return {
                cartProductCount: 1,
                cartClass: 1 > 0 ? 'hasProduct' : ''
            }
        },
        methods: {

        },
        created: function () {

        }
    }
</script>