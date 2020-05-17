<!-- 组件说明 -->
<template>
  <div class="navbar">
  <div class="left"><slot name='left'></slot></div>
  <div class="center"><slot name='center'></slot></div>
  <div class="right"><slot name='right'></slot></div>    
  </div>

</template>

<script>
    //import x from ''
    export default {
        name: 'NavBar',
        components: {

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
    .navbar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    
    .left .right {
        width: 60px;
    }
    
    .center {
        flex: 1;
    }
</style>