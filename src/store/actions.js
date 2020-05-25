import { CART_LIST_INCREAMENT, COUNTER_INCREAMENT } from './mutations_type'

export default {
    add_Cart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldItem = context.state.cartList.find(item => item.iid === payload.iid);
            if (oldItem) {
                context.commit(COUNTER_INCREAMENT, oldItem)
                resolve('商品数量加一');
            } else {
                context.commit(CART_LIST_INCREAMENT, payload)
                resolve('增加了新商品');
            }
        })
    }
}