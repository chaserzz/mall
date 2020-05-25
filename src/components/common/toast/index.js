import Toast from './Toast'
const obj = {}

obj.install = function(Vue) {
    console.log('--------');

    const toastConstruct = Vue.extend(Toast);
    const toast = new toastConstruct();
    toast.$mount(document.createElement('div'));

    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
}

export default obj;