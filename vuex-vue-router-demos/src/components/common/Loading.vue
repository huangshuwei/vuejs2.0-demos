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
       /* width: 1100px;*/

        text-align: center;
        -moz-box-shadow: 0 1px 10px #adabab;
        -webkit-box-shadow: 0 1px 10px #adabab;
        box-shadow: 0 1px 10px #adabab;
        left: 50%;
        top: 10%;
        margin-right: 0;
        margin-bottom: 0;
        position: fixed;
        border-style:solid;
        background-color: #FFFFFF;
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