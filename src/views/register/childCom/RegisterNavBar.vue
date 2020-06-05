<!-- 组件说明 -->
<template>
  <div class='register-navbar'>
    <nav-bar>
      <div slot='left'>
          <div slot='left'>
              <img src="~assets/img/common/back.svg" class='backImg' @click='back'>
            </div>
      </div>
      <div slot="center">账号登录</div>
  </nav-bar>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue'
    export default {
        name: 'RegisterNavBar',
        components: {
            NavBar
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            back() {
                this.$router.go(-1);
            },
        },
    }
</script>

<style scoped>
    .backImg {
        width: 16px;
        margin-top: 13px;
        margin-left: 9px;
    }
    
    .register-navbar {
        border-bottom: 2px solid #f3f3f3;
    }
</style>