<!-- 组件说明 -->
<template>
  <div class='tab-content'>
      <div class='tab-content-item' v-for='(item , index) in categoryData' :key='index'>
        <a :href="item.link"><img :src="item.image" alt=""></a>
        <span>{{item.title}}</span>
      </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'CategoryTabContent',
        props: {
            categoryData: {
                type: Array,
                default () {
                    return []
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
    .tab-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .tab-content-item {
        width: calc((100vw - 90px)/4);
        margin-top: 15px;
        margin-left: 15px;
        text-align: center;
    }
    
    .tab-content-item:after {
        content: "";
        flex: auto;
    }
    
    .tab-content-item img {
        width: calc((100vw - 90px)/4);
    }
    
    .tab-content-item span {
        display: block;
    }
</style>