<!-- 组件说明 -->
<template>
  <div class='wrapper' ref="wrapper">
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'Scroll',
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        components: {

        },
        data() {
            return {
                scroll: null
            };
        },
        computed: {

        },
        methods: {
            //封装的滚动到顶部的事件
            ScrollTo(x, y, time = 500) {
                this.scroll.scrollTo(x, y, time);
            },
            //封装的结束一次上拉事件
            finishPullUp() {
                this.scroll.finishPullUp();
            },
            refresh() {
                this.scroll.refresh();
            }
        },
        mounted() {
            //创建Scroll对象
            this.scroll = new BScroll((this.$refs.wrapper), {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            });
            //监听滚动
            this.scroll.on('scroll', position => {
                this.$emit('scroll', position);
            });
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp');
            })
        },
    }
</script>

<style scoped>
    .wrapper {
        overflow: hidden;
    }
</style>