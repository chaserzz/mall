import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import VueLazyload from 'vue-lazyload'

Vue.prototype.$bus = new Vue();

Vue.use(toast);
//解决300ms延迟

//图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('assets/img/common/placeholder.gif'),
    attempt: 1
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')