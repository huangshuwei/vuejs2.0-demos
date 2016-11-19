<template>
    <div v-if="loading.isLoading"  class="loading">
        <div v-if="isShowLoading">
            {{loading.loadingText}}
        </div>

        <div v-if="loading.isError" class="error">
            {{ loading.errorText }}
        </div>
    </div>
</template>

<style>
    .loading{
        width: 1100px;
        margin: 0 auto;
        text-align: center;
        z-index: 999;
    }
    
    .error{
        color:red;
    }
</style>


<script>
    import {mapState} from 'vuex'

    export default{
        computed: {
            ...mapState({
                loading: state => state.loading
            }),

            isShowLoading (){
                return this.loading.isLoading && !this.loading.isError
            }
        }
    }
</script>