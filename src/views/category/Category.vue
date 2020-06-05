<!-- 组件说明 -->
<template>
  <div class='category' >
    <nav-bar class='nav-bar'>
        <div slot='center'>商品分类</div>
    </nav-bar>
    <category-meun :catrgory-meun='catrgoryMeun' @itemClick='MeunClick'/>

    <div class='content'>   
        <scroll id='Scontent' ref='scroll'>
        <category-tab-content :categoryData='categoryData'/>
        <tab-control 
        :title='["综合", "新品", "销量"]' 
        class='tabcontrol' 
        @tabClick='tabClick'
         />
         <goods-list :goods='categoryDetail' />
        </scroll>
    </div>       
  </div>
</template>

<script>
    import {
        getCategory,
        getSubcategory,
        getCategoryDetail
    } from 'network/category.js'

    import NavBar from 'components/common/navbar/NavBar.vue'
    import Scroll from 'components/common/scroll/scroll.vue'
    import tabControl from 'components/content/tabcontrol/tabcontrol.vue'
    import goodsList from 'components/content/goods/goodsList.vue'
    //子组件
    import CategoryMeun from './childCom/CategoryMeun'
    import CategoryTabContent from './childCom/CategoryTabContent'

    export default {
        name: 'Category',
        components: {
            CategoryMeun,
            NavBar,
            CategoryTabContent,
            Scroll,
            tabControl,
            goodsList
        },
        data() {
            return {
                category: {},
                catrgoryMeun: [],
                categoryData: [],
                currentIndex: -1,
                type: ['pop', 'new', 'sell'],
                categoryDetail: []
            };
        },
        computed: {

        },
        methods: {
            MeunClick(index) {
                this.currentIndex = index;
                const maitKey = this.catrgoryMeun[index].maitKey;
                getSubcategory(maitKey).then(res => {
                    this.categoryData = res.data.list;
                    //小导航栏的数据
                    this._getCategoryDetail('pop');
                })
                this.$refs.scroll.refresh();
            },

            _getCategoryDetail(type) {
                const miniWallkey = this.catrgoryMeun[this.currentIndex].miniWallkey;
                getCategoryDetail(miniWallkey, type).then(res => {
                    this.categoryDetail = res;
                })
            },
            tabClick(index) {
                const type = console.log(this.type[index]);
                this._getCategoryDetail(type);
            }
        },
        created() {
            getCategory().then(res => {
                    const data = res.data.category
                    this.catrgoryMeun = data.list;
                    this.MeunClick(0);
                }),
                this.$bus.$on('imgLoad', () => {
                    this.$refs.scroll.refresh();
                })
        },

    }
</script>

<style scoped>
    .category {
        position: relative;
    }
    
    .nav-bar {
        background-color: var(--color-tint);
        color: #fff;
    }
    
    .content {
        position: absolute;
        width: calc(100vw - 90px);
        align-content: right;
        margin-left: 90px;
        top: 44px;
    }
    
    #Scontent {
        height: calc(100vh - 44px - 49px);
    }
</style>