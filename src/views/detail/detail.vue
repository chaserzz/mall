<!-- 组件说明 -->
<template>
  <div id='detail'>
    <detail-nav @itemClick='navClick' ref='navbar'/>
    <scroll 
    class='content' 
    ref='scroll'
    :probe-type='3'
    @scroll='detailScroll'>
    <detail-swiper :images="topImages" />
    <detail-good-brief :goods='goods' />
    <detail-shop-info :shop='ShopInfo' />
    <detail-goods-info :detail-goods-info='detailInfo' @imgLoad='goodsimgload'/>
    <detail-goods-param :goods-param='goodsparam' ref='params'></detail-goods-param>
    <detail-comment-info :commentInfo='commentInfo' ref='comment'/>
    <goods-list :goods='recommend' ref='recommend'/>
    </scroll>
    <detail-bottom-bar @addCart='addCart'/>
    <!-- 返回顶部,封装在了mixin.js中 -->
    <back-top @click.native='backClick' v-show='showBack' />
  </div>
</template>

<script>
    import {
        itemImgLoad,
        backTopMixmin
    } from 'common/mixins.js'

    import detailNav from './childCom/detailNav.vue'
    import detailSwiper from './childCom/detailSwiper.vue'
    import DetailGoodBrief from './childCom/DetailGoodBrief'
    import DetailShopInfo from './childCom/DetailShopInfo'
    import DetailGoodsInfo from './childCom/DetailGoodsInfo'
    import DetailGoodsParam from './childCom/DetailGoodsParam'
    import DetailCommentInfo from './childCom/Detailcomment'
    import DetailBottomBar from './childCom/DetailBottomBar.vue'

    import {
        getDetailData,
        Goods,
        Shop,
        GoodsParam,
        getRecommend
    } from 'network/detail.js'

    import Scroll from 'components/common/scroll/scroll.vue'

    import goodsList from 'components/content/goods/goodsList.vue';

    import {
        debounce
    } from 'common/utils.js'

    import {
        mapActions
    } from 'vuex'

    export default {
        name: 'detail',
        components: {
            detailNav,
            detailSwiper,
            DetailGoodBrief,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailGoodsParam,
            DetailCommentInfo,
            goodsList,
            DetailBottomBar
        },
        data() {
            return {
                iid: {
                    type: String,
                    default: ''
                },
                //轮播图
                topImages: {
                    type: Array,
                    default: () => {
                        return [];
                    }
                },
                //商品
                goods: {},
                //商店信息
                ShopInfo: {},
                //商品展示
                detailInfo: {},
                //商品详情数据
                goodsparam: {},
                //用户评论
                commentInfo: {},
                //推荐数据
                recommend: [],
                //保存导航栏的offsetTop的数据
                navOffSetTop: [],
                //获取offsetTop的函数
                getOffSetTop: null,
                currentIndex: 0
            };
        },
        computed: {},
        methods: {
            //商品图片加载完成
            goodsimgload() {
                this.$refs.scroll.refresh();
                this.getOffSetTop();
            },
            //导航栏点击
            navClick(index) {
                this.$refs.scroll.ScrollTo(0, -this.navOffSetTop[index], 300);
            },
            //滚动事件
            detailScroll(position) {
                let positionY = -position.y;
                this.backTopShow(position);
                let length = this.navOffSetTop.length;
                for (var i = 0; i < length - 1; i++) {
                    if (i != this.currentIndex && (positionY >= this.navOffSetTop[i] && positionY < this.navOffSetTop[i + 1])) {
                        this.currentIndex = i;
                        this.$refs.navbar.current = this.currentIndex;
                    }
                }
            },
            //添加到购物车事件
            addCart() {
                const product = {};
                product.price = this.goods.realPrice;
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.imge = this.topImages[0];
                product.iid = this.iid;
                this.$store.dispatch('add_Cart', product).then(res => {
                    console.log(res);

                })

                this.$toast.show('添加到购物车成功', 2000);
            },
            //获取数据
            _getDetailData() {
                getDetailData(this.iid).then(res => {
                    //请求轮播图的图片数据。
                    const data = res.result;
                    //注意要优化,不然会导致图片加载慢于组件加载,从而导致图片变少了
                    this.topImages = data.itemInfo.topImages;
                    //获取到goods对象
                    //商品信息
                    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                    //商家信息
                    this.ShopInfo = new Shop(data.shopInfo);
                    //商品展示的信息
                    this.detailInfo = data.detailInfo;
                    //商品的详细信息
                    this.goodsparam = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                    //用户评论信息
                    if (data.rate.cRate !== 0) {
                        this.commentInfo = data.rate.list[0];
                    } else {
                        this.commentInfo = {};
                    }
                })
            },
            //获取推荐数据
            _getRecommend() {
                getRecommend().then(res => {
                    this.recommend = res.data.list;

                });
            },
            //获得导航栏每个的offsetTop
            _getOffSetTop() {
                this.getOffSetTop = debounce(() => {
                    this.navOffSetTop = [];
                    this.navOffSetTop.push(0);
                    this.navOffSetTop.push(this.$refs.params.$el.offsetTop);
                    this.navOffSetTop.push(this.$refs.comment.$el.offsetTop);
                    this.navOffSetTop.push(this.$refs.recommend.$el.offsetTop);
                    this.navOffSetTop.push(Number.MAX_VALUE);
                }, 100);
            }

        },
        created() {
            this.iid = this.$route.params.iid;
            //获取数据
            this._getDetailData();
            //获取推荐数据
            this._getRecommend();
            //获得导航栏每个的offsetTop
            this._getOffSetTop();
        },
        //混入js
        mixins: [itemImgLoad, backTopMixmin],
        // mounted() {
        //     //     //上面引入了debounce函数
        //     //     const refresh = debounce(this.$refs.scroll.refresh, 50);
        //     //     //监听item中的Img加载完成
        //     //     this.DetailLoad = () => {
        //     //         refresh();
        //     //     };
        //     //     this.$bus.$on('itemImgLoad', this.DetailLoad);
        //     this.$refs.detailSwiper.$forceUpdate();
        // },
        destroyed() {
            this.$bus.$off('itemImgLoad', this.DetailLoad);
        },
    }
</script>

<style scoped>
    #detail {
        height: 100vh;
        position: relative;
        z-index: 99;
        background-color: #fff;
    }
    
    .content {
        position: absolute;
        top: 44px;
        bottom: 58px;
        left: 0;
        right: 0;
    }
</style>