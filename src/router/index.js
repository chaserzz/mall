import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
    //如果外面加了大括号,里面就有写return
const Home = () =>
    import ("views/home/Home.vue")
const Category = () =>
    import ("views/category/Category.vue")
const Cart = () =>
    import ("views/cart/Cart.vue")
const Profile = () =>
    import ("views/profile/Profile.vue")


const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcar',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router