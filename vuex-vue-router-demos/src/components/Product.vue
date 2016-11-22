<template>
    <div>
        <div class="tips">
        </div>
        <div>
            <ul class="product">
                <li v-for="item in productList">
                    <div class="item">
                        <div class="p-img">
                            <img :src="loadImage(item.img)" height="220" width="220"/></div>
                        <div class="p-name">
                            {{item.title}}   {{item.color}}
                        </div>

                        <div class="p-price">
                            <strong><em>￥</em><i>{{item.price}}</i></strong>
                        </div>

                        <div class="p-btn">
                            <a href="javascript:void(0);" @click.stop.prevent="addToCart(item.id,$event)" class="btn-append"><b></b>加入购物车</a>
                        </div>
                    </div>
                </li>

            </ul>

        </div>

    </div>
</template>

<style>
    ul.product {
        display: block;
        width: 100%;
        height: 100%;
        list-style: none;
    }

    ul.product li {
        float: left;
        display: list-item;
        text-align: -webkit-match-parent;
    }


    li .item{
        position: relative;
        width: 220px;
        padding: 20px;
        background: #fff;
        margin: -1px 0 0 -1px;
        border: 1px dashed #cacaca;
        overflow: hidden;
    }


    li .item:hover {
        z-index:2;
        border:1px solid red;
    }

    li .item .p-img{
        width: 220px;
        margin: 0 auto;
        overflow: hidden;
    }

    li .item .p-name{
        height: 36px;
        line-height: 18px;
        margin: 5px 0;
        overflow: hidden;
        text-align: center;
    }

    li .item .p-price{
        width: 100%;
        margin: 5px 0 2px;
        overflow: hidden;
        text-align: center;
    }

    .p-price strong{
        font-size: 14px;
        color: #d91f20;
        font-family: verdana;
        font-weight: 400;
    }

    li .item .p-btn{
        font-size: 12px;
        margin: 10px 0 0;
        text-align: center;
    }


    .p-btn .btn-append{
        display: inline-block;
        height: 28px;
        line-height: 28px;
        padding: 0 20px;
        border: 1px solid #999;
        color: #666;
        text-align: center;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        color: #666;
        text-decoration: none;
    }

    .p-btn .btn-append:hover{
        background-color: #e4393c;
        border-color: #e4393c;
        color: #fff;
    }

    .p-btn .btn-append b{
        display: inline-block;
        height: 18px;
        width: 18px;
        margin-right: 5px;
        background-position: 0 -57px;
        background-repeat: no-repeat;
        overflow: hidden;
        vertical-align: middle;
        background-image:url(../imgs/cart-icons.png);
    }

    .p-btn .btn-append:hover b{
        background-position: -28px -57px;
    }


</style>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name:'product',
        computed: {
            ...mapState({
                productList: state => state.product.productList,
                cartCount:state =>state.cart.products
            })
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.product_GetData()
        },

        methods: {

            ...mapActions([
                'product_GetData',
                'cart_Add'
            ]),

            // 动态的引入图片 参考: https://webpack.github.io/docs/context.html
            loadImage (path) {
                return require('../imgs/'+path)
            },

            // 添加到购物车
            addToCart (productId,event){

                var product = this.productList.find(p=>p.id===productId)

                if (product.stock >0){
                    this.cart_Add({
                        productId:productId
                    })

                    var currentCount = this.cartCount.find(p=>p.productId === productId).count

                    $(".tips").removeClass('red').addClass('green').text(currentCount+' 个 '+product.title+' 已经加入购物车，快去看看吧')
                }else{
                    $(".tips").removeClass('green').addClass('red').text(product.title+' 已经没有啦，选其他产品吧')

                    $(event.target).css('visibility','hidden')
                }

            }

        }
    }
</script>