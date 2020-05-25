<!-- 组件说明 -->
<template>
  <div class='detailNav'>
    <nav-bar>
      <div slot='left'>
        <img src="~assets/img/common/back.svg" class='backImg' @click='back'>
      </div>
      <div slot='center' class='title'>
        <div v-for='(item,index) in title' class='title-item' :class='{active:index == current}' @click='itemClick(index)'>
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue';
    export default {
        name: 'detailNav',
        components: {
            NavBar
        },
        data() {
            return {
                //中间部件
                title: ['商品', '参数', '评论', '推荐'],
                current: 0
            };
        },
        computed: {

        },
        methods: {
            //中间部件的点击变红并且互斥的效果
            itemClick(index) {
                this.current = index;
                this.$emit('itemClick', index);
            },
            back() {
                this.$router.go(-1);
            },
        },
    }
</script>

<style scoped>
    .title {
        display: flex;
        text-align: center;
        font-size: 14px;
    }
    
    .title-item {
        flex: 1;
    }
    
    .active {
        color: var( --color-high-text);
    }
    
    .backImg {
        width: 16px;
        margin-top: 13px;
        margin-left: 9px;
    }
</style>