<!-- 组件说明 -->
<template>
  <div class='goodlist'>
    <good-list-item v-for='item in goodlist' :goodsItem='item' class='goodsItem'></good-list-item>

  </div>
</template>

<script>
    import goodListItem from './goodListItem.vue'
    export default {
        name: 'goodsList',
        components: {
            goodListItem
        },
        props: {
            goodlist: {
                type: Array,
                default () {
                    return [];
                }
            }
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
    .goodlist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>