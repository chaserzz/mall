<!-- 组件说明 -->
<template>
  <div id='app'>
    <router-view></router-view>
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
        margin-bottom: 0;
    }
</style>