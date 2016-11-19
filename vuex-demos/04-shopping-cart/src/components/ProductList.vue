<template>
    <ul>
        <li v-for="p in products">
            {{ p.title }} - {{ p.price | currency-filter }}
            <br>
            <button @click="addToCart(p)">Add to cart</button>
        </li>
    </ul>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex'

    export  default{
        computed: {
            ...mapGetters({
                products: 'allProducts'
            })
        },
        methods: {
            ...mapActions({
                addToCart: 'addToCart'
            })
        },
        created (){
            this.$store.dispatch('getAllProducts')
        }
    }
</script>