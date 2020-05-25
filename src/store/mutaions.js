import { CART_LIST_INCREAMENT, COUNTER_INCREAMENT, SELECT_ALL } from './mutations_type'

export default {
    [COUNTER_INCREAMENT](state, payload) {
        payload.counter++;
    },
    [CART_LIST_INCREAMENT](state, payload) {
        payload.counter = 1;
        payload.checked = true;
        state.cartList.push(payload);
    },
    [SELECT_ALL](state, payload) {
        state.cartList.forEach(item => item.checked = payload);
    }
}