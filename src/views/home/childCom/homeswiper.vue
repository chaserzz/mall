<!-- 组件说明 -->
<template>
  <div >
    <swiper>
      <swiper-item v-for='(item,index) in banner' :key='index'>
        <a :herf='item.link' >
          <img :src="item.image" @load='swiperLoad'/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index.js'
    export default {
        name: 'homeSwiper',
        props: {
            banner: {
                type: Array,
                default () {
                    return [];
                }
            },

        },
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {
                hasLoad: false
            };
        },
        computed: {

        },
        methods: {
            swiperLoad() {
                if (!this.hasLoad) {
                    this.$emit('swiperLoad');
                    this.hasLoad = true;
                }
            }
        },
    }
</script>

<style lang='scss' scoped>

</style>