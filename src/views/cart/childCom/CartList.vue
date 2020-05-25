<!-- 组件说明 -->
<template>
  <div class='cart-list'>
    <scroll 
    class='content'
    ref='scroll'
    >
    <cart-list-item v-for='item in cartList' :itemInfo='item'/>
    </scroll>
  </div>
</template>

<script>
    import Scroll from 'components/common/scroll/scroll.vue'

    import CartListItem from './CartListItem'

    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'CartList',
        components: {
            Scroll,
            CartListItem
        },
        data() {
            return {

            };
        },
        computed: {

            ...mapGetters({
                cartList: 'getCartList'
            })
        },
        methods: {

        },
        activated() {
            this.$refs.scroll.refresh();
        },
    }
</script>

<style scoped>
    .cart-list {
        height: calc(100vh - 44px - 49px - 40px)
    }
    
    .content {
        height: 100%;
        overflow: hidden;
    }
</style>