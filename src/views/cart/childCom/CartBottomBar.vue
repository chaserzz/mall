<!-- 组件说明 -->
<template>
  <div class='cart-bottom-bar'>
    <div class='select-all'>
      <check-box class='check-button' :isChecked='checkedAll' @click.native='selectall'/>
      <span>全选</span>
    </div>
    <div class='price'>
      <span>总价:{{totalPrice}}</span> 
    </div>
    <div class='total' @click='payfor'>
      <span>去结算 <span v-if='totalLength >0'>({{totalLength}})</span></span>
    </div>
  </div>
</template>

<script>
    import CheckBox from 'components/content/checkbox/CheckBox'

    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'CartBottomBar',
        components: {
            CheckBox
        },
        data() {
            return {

            };
        },
        computed: {
            ...mapGetters(['getCartList', 'getCartListLength']),
            totalPrice() {
                let price = this.getCartList.filter(item => item.checked).reduce((preval, item) => {
                    return preval + item.price * item.counter;
                }, 0);
                price = price.toFixed(2);
                return '￥' + price;
            },
            totalLength() {
                return this.getCartList.filter(item => item.checked).length
            },
            checkedAll() {
                return (this.getCartList.length > 0) && !this.getCartList.some(item => item.checked == false)
            }
        },
        methods: {
            selectall() {
                if (this.checkedAll) {
                    this.$store.commit('select_all', !(this.checkedAll));
                } else {
                    this.$store.commit('select_all', !(this.checkedAll));
                }

            },
            payfor() {
                if (localStorage.getItem('isLogin') != 'true') {
                    this.$toast.show('请先登录', 2000)
                } else {
                    if (this.totalLength === 0) {
                        this.$toast.show('请先购买商品', 2000)
                    } else {
                        this.$toast.show('购买成功', 2000)
                        this.$store.commit('payfor');
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .cart-bottom-bar {
        display: flex;
        height: 40px;
        background: #f3f3f3;
    }
    
    .select-all {
        display: flex;
    }
    
    .check-button {
        display: flex;
        margin-top: 7px;
        margin-left: 7px;
        height: 25px;
        width: 25px;
        justify-content: center;
    }
    
    .select-all span {
        margin-top: 11px;
        margin-left: 4px;
    }
    
    .price {
        flex: 1;
        margin-left: 50px;
        margin-top: 11px;
    }
    
    .total {
        width: 120px;
        background-color: red;
        text-align: center;
        line-height: 40px;
    }
    
    .total span {
        color: white;
    }
</style>