<template>
    <div>
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart>
        </cart>
    </div>
</template>

<script>
    import cart from './Cart.vue'
    import ProductList from './ProductList.vue'

    export default{
        components:{
            ProductList,
            cart
        }
    }

</script>