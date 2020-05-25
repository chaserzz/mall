<!-- 组件说明 -->
<template>
  <div class="recommend">
      <div v-for='(item,index) in recommend' :key='index' class='recommend-item'>
        <a :href="item.link"><img :src="item.image" /> </a>
        <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'recommendCom',
        props: {
            recommend: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        components: {

        },
        data() {
            return {
                counter: 0
            };
        },
        computed: {

        },
        methods: {},

    }
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        padding-bottom: 35px;
        border-bottom: 8px solid rgba(100, 100, 100, .3);
        text-align: center;
        font-size: 13px;
    }
    
    .recommend-item {
        padding-top: 15px;
        flex: 1;
    }
    
    .recommend img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>