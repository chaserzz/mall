<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <span class="icon">
       <img :src="item.image" />
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListView",
        props: {
            listData: {
                type: Array,
                default: function() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #list {
        padding-top: 25px;
        background-color: #f3f3f3;
        font-size: 15px;
        color: #333;
    }
    
    #list .item {
        height: 44px;
        line-height: 44px;
        position: relative;
        background-color: #fff;
    }
    
    .icon img {
        width: 18px;
        height: 18px;
    }
    
    .item .icon {
        margin-top: 10px;
        position: absolute;
        left: 16px;
        top: -7px;
    }
    
    .item .info {
        margin-left: 40px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
        padding-left: 5px;
    }
    
    .item:last-of-type .info {
        border-bottom: none;
    }
</style>