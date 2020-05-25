<!-- 组件说明 -->
<template>
  <div class='checkbox' :class='{check:isChecked}' @click='checkClick'>
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'CheckBox',
        props: {
            isChecked: Boolean
        },
        components: {

        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            checkClick() {
                this.$emit('checkedClick');
            }
        },
    }
</script>

<style scoped>
    .checkbox {
        background-color: #ffffff;
        border: 1px solid #f3f3f3;
        border-radius: 50%;
    }
    
    .check {
        background-color: var(--color-tint);
    }
</style>