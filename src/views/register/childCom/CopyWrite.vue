<!-- 组件说明 -->
<template>
  <div class='copy-write'>
    <div class='content'>所有数据仅为学习所用</div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'CopyWrite',
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
    .content {
        color: var(--color-text);
        border-top: 1px solid #666;
        width: 220px;
        padding-top: 5px;
        text-align: center;
    }
    
    .copy-write {
        position: fixed;
        bottom: 60px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
    }
</style>