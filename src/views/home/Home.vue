<!-- 组件说明 -->
<template>
  <div class = 'home'>
    <nav-bar class = 'navbar'>
      <div slot = "center">购物街</div>
    </nav-bar>
    <tab-control 
    :title='["流行","新款","精选"]' 
    class='tabcontrol' 
    @tabClick='tabClick'
    ref="tabcontrol1"
    v-show='tabShow'
    ></tab-control>

    <!--滚动内容-->
<scroll class = 'content' 
        ref='scroll' 
        @scroll='contentScroll' 
        :probe-type='3'
        :pull-up-load='true'
        @pullingUp='lodaData'
        >
    <home-swiper :banner='banner' @swiperLoad='swiperLoaded'></home-swiper>
    <recommendCom :recommend='recommend'/>
    <feature-view />
    <tab-control 
    :title='["流行","新款","精选"]' 
    class='tabcontrol' 
    @tabClick='tabClick'
    ref="tabcontrol2"
    ></tab-control>
    <goods-list :goods='currentList'></goods-list>
</scroll>
    <!--返回顶部-->
<back-top class='backTop' @click.native='backClick' v-show='showBack' />
  </div>
</template>

<script>
    //引入工具函数,
    //debounce:防抖动函数
    import {
        debounce
    } from '@/common/utils.js'
    //引入混用js
    import {
        itemImgLoad,
        backTopMixmin
    } from 'common/mixins.js'

    import NavBar from 'components/common/navbar/NavBar.vue'
    import Scroll from 'components/common/scroll/scroll.vue'

    import tabControl from 'components/content/tabcontrol/tabcontrol.vue'
    import goodsList from 'components/content/goods/goodsList.vue'


    import homeSwiper from './childCom/homeswiper.vue'
    import recommendCom from './childCom/recommendCom.vue'
    import featureView from './childCom/featureview.vue'

    import {
        getHomeMultidata,
        getHomeData
    } from 'network/home.js'
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
                tabControlTop: 0,
                tabShow: false,

                //事件监听的对象
            };
        },
        //混入JS
        mixins: [itemImgLoad, backTopMixmin],
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
                this.$refs.tabcontrol1.current = index;
                this.$refs.tabcontrol2.current = index;
            },

            //屏幕滚动
            contentScroll(position) {
                this.backTopShow(position);
                if ((-position.y) >= this.tabControlTop) {
                    this.tabShow = true;
                } else {
                    this.tabShow = false;
                }
            },
            //显示backTop组件
            //封装到mixins.js中

            //上拉加载更多
            lodaData() {
                this.getHomeData(this.current);
            },
            //解决BScroll的滑动卡顿Bug;
            //原因时scrollheight由于图片加载慢造成的高度过低
            //??? 为什么要写在mounted()生命周期函数里面            
            //获取tab-control的offsetTop
            swiperLoaded() {
                this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop;
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
                    this.$refs.scroll.finishPullUp();
                })
            }

        },
        created() {
            //获取首页的数据
            this.getHomeMultidata();
            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
        },
        // mounted() {
        //     上面引入了debounce函数
        //     const refresh = debounce(this.$refs.scroll.refresh, 50);
        //     监听item中的Img加载完成
        //     this.itemImgLoad = () => {
        //         refresh();
        //     };
        //     this.$bus.$on('itemImgLoad', this.itemImgLoad);
        // },
        activated() {
            this.$refs.scroll.ScrollTo(0, this.scrollY);
            this.$refs.scroll.refresh();
        },
        deactivated() {
            this.scrollY = this.$refs.scroll.getPositionY();
            //关闭Home页面的自动刷新
            this.$bus.$off('itemImgLoad', this.itemImgLoad);
        },
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
        /*
        由于用了自动组件的滚动,下面的样式不设置可以实现navbar永远在顶部停留
        */
        /* position: sticky;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0; */
    }
    
    .tabcontrol {
        position: relative;
        z-index: 9;
    }
    
    .content {
        position: absolute;
        top: 44px;
        bottom: 48px;
    }
    
    .backTop {
        position: fixed;
        bottom: 47px;
        right: 4px;
    }
</style>