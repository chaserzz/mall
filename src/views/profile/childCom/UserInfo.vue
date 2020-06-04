<!-- 组件说明 -->
<template>
  <div class='user-info'>
    <a href="#">
      <div class='register'>
        <div class='userImg'>     
          <slot name='userImg'>
            <img src='~assets/img/common/userImg.jpg' />      
          </slot>            
        </div>
        <div class='userPrivateInfo'>
          <slot name='userNickName'>
           <div class='nickname'>
            登录/注册   
           </div>
          </slot>            
          <div class='phone'>
            <img src="~assets/img/profile/phone.svg">
          <slot name='userPhone'>
            <span>暂无绑定手机号</span>
          </slot>            
          </div>
          </slot>
        </div>      
      </div>          
      <div class='right-arrow'>
        <svg t="1590460770734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1195" width="200" height="200"><path d="M326.4 921.6c-8.533333 0-17.066667-2.133333-23.466667-8.533333-12.8-12.8-12.8-32 0-44.8l347.733334-347.733334L302.933333 170.666667c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l371.2 371.2c6.4 6.4 8.533333 14.933333 8.533334 23.466666s-4.266667 17.066667-8.533334 23.466667L347.733333 910.933333c-6.4 6.4-14.933333 10.666667-21.333333 10.666667z" p-id="1196" fill="#ffffff"></path></svg>
      </div>            
    </a>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'UserInfo',
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
    a {
        display: block;
    }
    
    .register {
        position: relative;
        padding: 5px 15px;
        background-color: var(--color-tint);
    }
    
    .userImg img {
        display: block;
        width: 80px;
        border-radius: 50%;
    }
    
    .userImg {
        width: 100px;
    }
    
    .userPrivateInfo {
        position: absolute;
        top: 18px;
        left: 108px;
        color: white;
    }
    
    .userPrivateInfo img {
        width: 25px;
        vertical-align: bottom;
    }
    
    .phone {
        position: relative;
        margin-top: 8px;
        right: 5px;
    }
    
    .right-arrow {
        position: absolute;
        right: 20px;
        top: 70px;
    }
    
    .right-arrow svg {
        width: 25px;
        height: 25px;
    }
</style>