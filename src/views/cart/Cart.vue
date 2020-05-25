<!-- 组件说明 -->
<template>
  <div class='Cart'>
    <nav-bar class='nav-bar'>
      <div slot='center'>购物车({{length}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue'

    import CartList from './childCom/CartList.vue'
    import CartBottomBar from './childCom/CartBottomBar'
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'ShopCar',
        components: {
            NavBar,
            CartList,
            CartBottomBar
        },
        data() {
            return {

            };
        },
        computed: {
            ...mapGetters({
                length: 'getCartListLength',
            })
        },
        methods: {

        },
    }
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-tint);
        color: #fff;
        font-size: 16px;
    }
</style>