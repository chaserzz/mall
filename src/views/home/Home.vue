<!-- 组件说明 -->
<template>
  <div class = 'home'>
    <nav-bar class = 'navbar'>
      <div slot = "center">购物街</div>
    </nav-bar>
    <!--滚动内容-->
<scroll class = 'content' 
        ref='scroll' 
        @scroll='contentScroll' 
        :probe-type='3'
        :pull-up-load='true''
        @pullingUp='lodaData'
        >
    <home-swiper :banner='banner' ></home-swiper>
    <recommendCom :recommend='recommend'/>
    <feature-view></feature-view>
    <tab-control :title='["流行","新款","精选"]' class='tabcontrol' @tabClick='tabClick'></tab-control>
    <goods-list :goodlist='currentList'></goods-list>
</scroll>
    <!--返回顶部-->
<back-top @click.native='backClick' v-show='showBack'></back-top>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue';
    import Scroll from 'components/common/scroll/scroll.vue';

    import tabControl from 'components/content/tabcontrol/tabcontrol.vue';
    import goodsList from 'components/content/goods/goodsList.vue';
    import backTop from 'components/content/backtop/backtop.vue'

    import homeSwiper from './childCom/homeswiper.vue';
    import recommendCom from './childCom/recommendCom.vue';
    import featureView from './childCom/featureview.vue';

    import {
        getHomeMultidata,
        getHomeData
    } from 'network/home.js';
    export default {
        name: 'Home',
        components: {
            NavBar,
            homeSwiper,
            recommendCom,
            featureView,
            tabControl,
            goodsList,
            Scroll,
            backTop
        },
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    }
                },
                current: 'pop',
                showBack: false,
            };
        },
        computed: {
            currentList() {
                return this.goods[this.current].list
            }
        },
        methods: {
            /*
            事件代码
            */
            //内容切换
            tabClick(index) {
                switch (index) {
                    case 0:
                        {
                            this.current = 'pop';
                            break;
                        }
                    case 1:
                        {
                            this.current = 'new';
                            break;
                        }
                    case 2:
                        {
                            this.current = 'sell';
                            break;
                        }
                }
            },
            //返回顶部
            backClick() {

                this.$refs.scroll.ScrollTo(0, 0);

            },
            contentScroll(position) {
                this.showBack = (-position.y) > 1000;
            },
            //上拉加载更多
            lodaData() {
                this.getHomeData(this.current);
                this.$refs.scroll.refresh();
                this.$refs.scroll.finishPullUp();
            },
            /*
            网络请求的代码
            */
            getHomeMultidata() {
                getHomeMultidata().then(req => {
                    this.banner = req.data.banner.list;
                    this.recommend = req.data.recommend.list;
                });
            },
            getHomeData(type) {
                let page = ++this.goods[type].page;
                getHomeData(type, page).then(res => {
                    this.goods[type].list.push(...(res.data.list));
                })
            }

        },
        created() {
            //获取首页的数据
            this.getHomeMultidata();
            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
        }

    }
</script>

<style scoped>
    .home {
        height: 100vh;
        position: relative;
    }
    
    .navbar {
        width: 100%;
        background-color: #ff8198;
        color: white;
        position: sticky;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
    }
    
    .tabcontrol {
        position: sticky;
        top: 44px;
        z-index: 9;
    }
    
    .content {
        position: absolute;
        top: 44px;
        bottom: 48px;
    }
</style>