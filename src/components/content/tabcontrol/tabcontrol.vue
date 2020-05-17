<!-- 组件说明 -->
<template>
  <div class='tabcontrol'>
    <div class='tabcontrolitem' v-for='(item,index) in title' @click='divClick(index)' :class='{active:current==index}'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'tabControl',
        components: {

        },
        props: {
            title: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data() {
            return {
                current: 0,
            };
        },
        computed: {

        },
        methods: {
            divClick(index) {
                this.current = index;
                this.$emit('tabClick', index);
            }
        },
    }
</script>

<style scoped>
    .tabcontrol {
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        background-color: #fff;
    }
    
    .tabcontrolitem {
        flex: 1;
    }
    
    .active {
        color: var(--color-high-text);
    }
    
    .active span {
        padding: 6px;
        border-bottom: 3px solid var(--color-tint);
    }
</style>