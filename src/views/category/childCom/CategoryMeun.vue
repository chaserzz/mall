<!-- 组件说明 -->
<template>
  <div class='category-meun'>
    <scroll class='content'>
     <div 
     v-for='(item,index) in catrgoryMeun'
     :key='index'
     class='category-meun-item'
     :class='{active:index === currentIndex}'
     @click='itemClick(index)'
     >
        <span>{{item.title}}</span>
        </div>
    </scroll>

  </div>    


</template>

<script>
    import Scroll from 'components/common/scroll/scroll.vue';

    export default {
        name: 'CategoryMeun',
        props: {
            catrgoryMeun: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            Scroll
        },
        data() {
            return {
                currentIndex: 0
            };
        },
        computed: {

        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('itemClick', index);
            }
        },
    }
</script>

<style scoped>
    .category-meun {
        width: 90px;
        position: relative;
    }
    
    .category-meun-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #f3f3f3;
    }
    
    .active {
        background-color: white;
        color: var(--color-high-text);
    }
    
    .content {
        height: calc(100vh - 44px - 49px);
        overflow: hidden;
        margin-bottom: 49px;
    }
</style>