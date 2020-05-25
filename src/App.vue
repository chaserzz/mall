<!-- 组件说明 -->
<template>
  <div id='app'>
      <keep-alive exclude='detail'>
    <router-view></router-view>      
      </keep-alive>
    <main-tab-bar class='tabbar'></main-tab-bar>
  </div>
</template>

<script>
    import MainTabBar from 'components/content/tabbar/MainTabBar.vue'
    export default {
        name: 'App',
        components: {
            MainTabBar,
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    @import url('assets/css/base.css');
    .tabbar {
        position: fixed;
    }
</style>