<!-- 组件说明 -->
<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png"/>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'backTop',
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
    .back-top {
        position: absolute;
        right: 8px;
        bottom: 50px;
    }
    
    .back-top img {
        width: 44px;
        height: 44px;
    }
</style>