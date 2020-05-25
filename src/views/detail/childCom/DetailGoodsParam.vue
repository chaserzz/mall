<!-- 组件说明 -->
<template>
  <div class='good-size' v-if="Object.keys(goodsParam).length !== 0">
    <table  
    v-for='(item ,index) in goodsParam.sizes' 
    :key='index'>
    <tr v-for='(key, index) in item' :key="index">
      <td v-for='(value,index) in key' :key='index'>{{value}}</td>
    </tr>
    </table>
  </table>
  <table class="info-param">
    <tr v-for="(info, index) in goodsParam.infos">
      <td class="info-param-key">{{info.key}}</td>
      <td class="param-value">{{info.value}}</td>
    </tr>
  </table>
  <div class="info-img" v-if="goodsParam.image.length !== 0">
    <img :src="goodsParam.image" alt="">
  </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'DetailGoodsParam',
        props: {
            goodsParam: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        components: {

        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    .good-size {
        width: 100%;
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    
    .good-size table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .good-size table tr {
        height: 42px;
    }
    
    .good-size table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    
    .info-param-key {
        /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
        width: 95px;
    }
    
    .info-param {
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, .1);
    }
    
    .param-value {
        color: #eb4868
    }
    
    .info-img img {
        width: 100%;
    }
</style>