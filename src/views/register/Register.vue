<!-- 组件说明 -->
<template>
  <div class='register'>
    <register-nav-bar />
    <register-detail />
    <img src="~assets/img/common/mogujie.jpg" class='image'>
    <copy-write />
    <div class='block'></div>
  </div>
</template>

<script>
    import RegisterNavBar from './childCom/RegisterNavBar.vue'
    import RegisterDetail from './childCom/RegisterDetail.vue'
    import CopyWrite from './childCom/CopyWrite'

    export default {
        name: 'Register',
        components: {
            RegisterNavBar,
            RegisterDetail,
            CopyWrite
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
    .block {
        position: fixed;
        background-color: white;
        height: 58px;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 9;
    }
    
    .image {
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        top: 38px;
        width: 80%;
    }
</style>