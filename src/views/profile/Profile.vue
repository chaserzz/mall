<!-- 组件说明 -->
<template>
  <div class='profile'>
<nav-bar class='nav-bar'>
    <div slot='center'>我的档案</div>
</nav-bar>
<user-info />
    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue';

    import UserInfo from './childCom/UserInfo'
    import ListView from './childCom/ListView'

    export default {
        name: 'Proflie',
        components: {
            NavBar,
            UserInfo,
            ListView
        },
        data() {
            return {
                orderList: [{
                    image: require('assets/img/profile/message.svg'),
                    info: '我的消息'
                }, {
                    image: require('assets/img/profile/pointer.svg'),
                    info: '积分商城'
                }, {
                    image: require('assets/img/profile/vip.svg'),
                    info: '会员卡'
                }, ],
                serviceList: [{
                    image: require('assets/img/profile/cart.svg'),
                    info: '我的购物车'
                }, {
                    image: require('assets/img/profile/shopping.svg'),
                    info: '下载购物APP'
                }, ]
            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-tint);
        color: white;
    }
    
    .account {
        display: flex;
    }
    
    .account-item {
        width: 100%;
        background-color: #fff;
        margin-right: 1px;
        text-align: center;
    }
    
    .account-item:last-of-type {
        margin-right: 0;
    }
    
    .account-item {
        color: #666;
        font-size: 13px;
        padding: 18px;
    }
    
    .account-item .balance {
        font-size: 24px;
        font-weight: 700;
        color: #ff5f3e;
    }
    
    .account-info {
        margin-top: 6px;
    }
</style>