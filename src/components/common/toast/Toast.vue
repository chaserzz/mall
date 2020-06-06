<!-- 组件说明 -->
<template>
  <div class='toast' v-show='isShow'>
    {{message}}
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'Toast',
        components: {

        },
        data() {
            return {
                message: '',
                isShow: false
            };
        },
        computed: {

        },
        methods: {
            show(message, duration = 2000) {
                this.message = message;
                this.isShow = true;
                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                }, duration)
            }
        },
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        box-sizing: content-box;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        top: 50%;
        left: 50%;
        z-index: 999;
        background: rgba(0, 0, 0, .6);
        color: white;
        border-radius: 10px;
        font-size: 14px;
    }
</style>