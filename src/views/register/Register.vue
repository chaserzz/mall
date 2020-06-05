<!-- 组件说明 -->
<template>
  <div class='register'>
    <register-nav-bar />
    <register-detail />
    <div class='copywrite'></div>
    <div class='block'></div>
  </div>
</template>

<script>
    import RegisterNavBar from './childCom/RegisterNavBar.vue'
    import RegisterDetail from './childCom/RegisterDetail.vue'
    export default {
        name: 'Register',
        components: {
            RegisterNavBar,
            RegisterDetail
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
</style>