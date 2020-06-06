<!-- 组件说明 -->
<template>
  <div class='register-detail'>
    <input type="text" name="username" v-model='username' placeholder="用户名/邮箱/手机号"/>
    <input type="password" name="password" v-model='password' placeholder="密码"/>
    <div class='btn'>
      <button @click='registerBtn'>一键注册并登录</button>
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
                username: '',
                password: ''
            };
        },
        computed: {

        },
        methods: {
            registerBtn() {
                //未登录过的用户
                if (this.username != localStorage.getItem('userName')) {
                    //要求用户先输入用户名和密码
                    if (this.username === '') {
                        this.$toast.show('请先输入用户名', 2000);
                        return
                    } else if (this.password === '') {
                        this.$toast.show('请输入密码', 2000);
                        return
                    } else {
                        localStorage.setItem('isLogin', true)
                        localStorage.setItem('userName', this.username)
                        localStorage.setItem('passWord', this.password)
                        this.$toast.show('登录成功', 1000);
                        this.username = ''
                        this.password = ''
                        this.$router.push('/profile')
                    }
                } else {
                    if (this.password != localStorage.getItem.passWord) {
                        this.$toast.show('密码输入错误,请重新输入', 2000)
                        this.password = ''
                        return;
                    }

                }
            }
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
        margin-top: 25px;
        border: none;
        border-radius: 45px;
        background-color: var(--color-tint);
        color: white;
        outline: none;
    }
</style>