<!-- 组件说明 -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class='good-brief'>
    <div class='title'>
      {{goods.title}}
    </div>
    <div class='price'>
        <span class='realPrice'>{{goods.newPrice}}</span>
        <span class='oldPrice'>{{goods.oldPrice}}</span>
        <span class='discount'>{{goods.discount}}</span>
    </div>
    <div class='baseInfo'>
        <span class='sale-num'>{{goods.colums[0]}}</span>
        <span class='cfv'>{{goods.colums[1]}}</span>
        <span class='fee-des'>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon">
          <span>{{goods.services[index-1].name}}</span>
        </span>
      </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'DetailGoodBrief',
        props: {
            goods: {
                type: Object,
                default () {
                    return {};
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
    .good-brief {
        margin-top: 10px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }
    
    .title {
        color: #222;
    }
    
    .price {
        margin-top: 15px;
    }
    
    .realPrice {
        color: var(--color-high-text);
        font-size: 18px;
    }
    
    .oldPrice {
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 5px;
    }
    
    .discount {
        position: relative;
        border-radius: 8px;
        padding: 2px;
        background-color: rgb(254, 67, 101);
        color: #fff;
        font-size: 13px;
        top: -6px;
    }
    
    .baseInfo {
        margin-top: 10px;
        position: relative;
        text-align: center;
        line-height: 13px;
        height: 13px;
        font-size: 13px;
    }
    
    .sale-num {
        position: absolute;
        left: 0;
    }
    
    .fee-des {
        position: absolute;
        right: 0;
    }
    
    .info-service {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    
    .info-service-item img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }
    
    .info-service-item span {
        font-size: 13px;
        color: #333;
    }
</style>