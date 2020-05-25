<!-- 组件说明 -->
<template>
  <div v-if="Object.keys(detailGoodsInfo).length !== 0" class="goods-info">
    <div class='goodInfo'>
      <div class='start'></div>
      <div class='des'>{{detailGoodsInfo.desc}}</div>
      <div class='end'></div>
    </div>
    <div class='Img-des'>{{detailGoodsInfo.detailImage[0].key}} </div>
    <div v-for='(item,index) in detailGoodsInfo.detailImage[0].list'  class='goodImg' :key='index' >
      <img :src='item' @load='imgLoad'/>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'DetailGoodsInfo',
        props: {
            detailGoodsInfo: {
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
                counter: 0,
            };
        },
        computed: {

        },
        methods: {


            imgLoad() {
                if (++this.counter === 3)
                    this.counter = 0;
                this.$emit('imgLoad');
            }
        },
    }
</script>

<style scoped>
    .goodInfo {
        position: relative;
        height: 120px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    .des {
        position: absolute;
        top: 35px;
        left: 12px;
        height: 50px;
        margin-top: -10px;
    }
    
    .start,
    .end {
        position: relative;
    }
    
    .start {
        position: absolute;
        top: 1px;
        left: 5px;
        width: 100px;
        border-top: 1px solid black;
    }
    
    .end {
        position: absolute;
        bottom: 1px;
        right: 5px;
        border-bottom: 1px solid black;
        width: 100px;
    }
    
    .start::before,
    .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }
    
    .end::after {
        right: 0;
    }
    
    .Img-des {
        margin-top: 4px;
        margin-bottom: 8px;
        margin-left: 12px;
    }
    
    .goodImg img {
        width: 100%;
    }
</style>