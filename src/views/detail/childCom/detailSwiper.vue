<template>
    <swiper class="swiper-setting">
      <swiper-item v-for="(item, index) in images"
                   :key="index" >
        <img :src="item" :key='index'>
      </swiper-item>
    </swiper>
  </template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper'

    export default {
        name: "DetailSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            images: {
                Type: Array,
                default () {
                    return [];
                }
            }
        },
        methods: {
            reload() {
                this.$nextTick(() => {
                    this.$forceUpdate();
                })
            }

        },
    }
</script>

<style scoped>
    .swiper-setting {
        height: 300px;
        overflow: hidden;
    }
</style>