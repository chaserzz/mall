<!-- 组件说明 -->
<template>
  <div class='register-detail'>
    <input type="text" name="username" placeholder="用户名/邮箱/手机号"/>
    <input type="password" name="password" placeholder="密码"/>
    <div class='btn'>
      <button>登录</button>
      <button>注册</button>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'RegisterDetail',
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
    input {
        box-sizing: border-box;
        width: 80%;
        height: 49px;
        border: none;
        border-style: none;
        border-bottom: 2px solid #f3f3f3;
        padding-bottom: 1px;
        padding-left: 3px;
        outline: none;
        font-size: 20px;
    }
    
    .register-detail {
        position: relative;
        width: 80%;
        left: 50%;
        margin-left: 25px;
        margin-top: 25%;
        transform: translate3d(-50%, 0, 0);
    }
    
    button {
        width: 80%;
        height: 45px;
        margin-top: 15px;
        border: none;
        border-radius: 45px;
        background-color: var(--color-tint);
        color: white;
        outline: none;
    }
</style>