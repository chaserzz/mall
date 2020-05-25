//这是混入的minxins,将各个组件中共同的部分抽取出来
//然后在组件进行使用,数组的方式使用
//Vue会把里面相同的内容进行合并
import { debounce } from './utils.js'
//引入backTop组件
import backTop from 'components/content/backtop/backtop.vue'

export const itemImgLoad = {
        data() {
            return {
                itemImgLoad: null
            }
        },
        mounted() {
            //上面引入了debounce函数
            const refresh = debounce(this.$refs.scroll.refresh, 5);
            //监听item中的Img加载完成
            this.itemImgLoad = () => {
                refresh();
            };
            this.$bus.$on('imgLoad', this.itemImgLoad);
        }
    }
    //返回顶部组件
export const backTopMixmin = {
    data() {
        return {
            scrollY: 0,
            showBack: false,
        }
    },
    components: {
        backTop
    },
    methods: {
        //返回顶部
        backClick() {
            this.$refs.scroll.ScrollTo(0, 0);
        },
        backTopShow(position) {
            this.showBack = (-position.y) > 1000;
        }
    }
}