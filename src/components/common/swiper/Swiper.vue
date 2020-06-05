<!-- 组件说明 -->
<template>
  <div id='Abe_swiper'>
    <div class='swiper' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
        <!-- 轮播图内容 -->
        <slot> </slot>
    </div>
    <!-- 轮播图下面的圆点 -->
    <div class="indicator">
        <slot name="indicator" v-if=" showIndicator && slideCount>1 ">
            <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentItem-1}" :key="index"></div>
        </slot>
    </div>
</div>
</template>

<script>
    //import x from ''
    export default {
        name: 'Swiper',
        props: {
            //轮播图定时轮转图片的时间
            interval: {
                type: Number,
                default: 3000
            },
            //动画持续的时间
            animDuration: {
                type: Number,
                default: 300
            },
            //每次移动多少距离后自动移动图片
            moveRatio: {
                type: Number,
                default: 0.25
            },
            //控制小圆点的显示
            showIndicator: {
                type: Boolean,
                default: true
            }
        },
        components: {

        },
        data() {
            return {
                slideCount: 0, // 元素个数
                totalWidth: 0, //Swiper的宽度
                swiperStyle: {}, // swiper样式
                currentIndex: 1, // 当前的index
                scrolling: false, // 是否正在滚动

            };
        },
        methods: {
            //操作Dom,进行添加最后一个和第一个图片的复制和总宽度
            handleDom() {
                let elSwiper = document.querySelector('.swiper')
                let slides = document.getElementsByClassName('slide')
                    // 获取到slide 的个数
                this.slideCount = slides.length
                    //轮播图中的总数＞1
                if (this.slideCount > 1) {
                    //创建第一个元素的复制节点
                    let firSlide = slides[0].cloneNode(true)
                        //创建最后一个元素的复制节点 
                    let latSlide = slides[this.slideCount - 1].cloneNode(true)
                    elSwiper.appendChild(firSlide)
                    elSwiper.insertBefore(latSlide, slides[0])
                        //获取swiper的宽度
                    this.totalWidth = elSwiper.offsetWidth
                    this.swiperStyle = elSwiper.style
                        //在增加图片以后,让其显示第一张图片
                    this.setTransform(-this.totalWidth)
                }
            },
            //滚动事件的实现
            setTransform(position) {
                this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
                this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`
                this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`
            },
            //定时器开始阶段
            startTime() {
                this.playTimer = window.setInterval(() => {
                    //箭头函数 使得this = Vue 否则 this = window对象
                    this.currentIndex++
                        this.srcollContent(-this.currentIndex * this.totalWidth)
                }, this.interval)
            },
            //定时器的结束
            stopTimer() {
                window.clearInterval(this.playTimer)
                this.playTimer = null
            },
            /**
             * 滚动到正确的位置(带动画效果)
             */
            srcollContent(currentPosition) {
                //设置正在滚动
                this.scroll = true
                    // 1.开始滚动动画
                    //bug 无法做到平滑的转换
                this.swiperStyle.transition = 'transform ' + 300 + 'ms'
                this.setTransform(currentPosition);
                //校正滚动的位置
                //即调整currentIndex的值
                this.checkPosition()
                    //结束滚动
                this.scroll = false
            },
            //校正滚动的位置
            checkPosition() {
                //需要定时器来进行修正,否则会是同步操作导致transition的变化为0
                window.setTimeout(() => {
                    this.swiperStyle.transition = '0ms'
                    if (this.currentIndex >= (this.slideCount + 1)) {
                        this.currentIndex = 1
                        this.setTransform(-this.currentIndex * this.totalWidth)
                    }
                    if (this.currentIndex <= 0) {
                        this.currentIndex = this.slideCount;
                        this.setTransform(-this.currentIndex * this.totalWidth)
                    }
                    //完成一张轮播事件之后触发的回调函数
                    this.$emit('transitionEnd', this.currentIndex - 1)
                }, this.animDuration)

            },
            //开始触屏
            touchStart(e) {
                //当图片正在滚动时 不允许进行调整
                if (this.scroll) {
                    return
                }
                this.stopTimer()
                    // 3.保存开始滚动的位置
                this.startX = e.touches[0].pageX

            },
            //触屏移动事件
            touchMove(e) {
                this.distance = e.touches[0].pageX - this.startX
                let currentMove = Math.abs(this.distance)
                if (currentMove <= this.totalWidth) {
                    let currentposition = (-this.currentIndex * this.totalWidth) + this.distance;
                    this.setTransform(currentposition)
                }
            },
            //结束触屏事件
            touchEnd(e) {
                let currentMove = Math.abs(this.distance)

                if (this.distance === 0) {
                    return
                } else if (this.distance > 0 && currentMove > this.totalWidth * /*this.moveRatio 由父组件进行修正 移动的距离*/ 0.25) { // 右边移动超过0.5
                    this.currentIndex--
                } else if (this.distance < 0 && currentMove > this.totalWidth * /*this.moveRatio*/ 0.25) { // 向左移动超过0.5
                    this.currentIndex++
                }
                this.srcollContent(-this.currentIndex * this.totalWidth)
                this.startTime()
            }
        },
        computed: {
            currentItem() {
                if (this.currentIndex === 0) {
                    return this.slideCount;
                } else if (this.currentIndex === this.slideCount + 1) {
                    return 1;
                }
                return this.currentIndex;
            }
        },
        mounted() {
            window.setTimeout(() => {
                this.handleDom();
                this.startTime();
            }, 300)
        },
    }
</script>

<style scoped>
    #Abe_swiper {
        position: relative;
        overflow: hidden;
    }
    
    .swiper {
        display: flex;
    }
    
    .swiper img {
        width: 100%;
        height: 250px;
    }
    
    .indicator {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        bottom: 8px;
    }
    
    .indi-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }
    
    .indi-item.active {
        background-color: rgba(212, 62, 46, 1.0);
    }
</style>