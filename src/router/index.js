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
const Detail = () =>
    import ("views/detail/detail.vue")
const Register = () =>
    import ('views/register/Register')
const routes = [{
        path: '',

        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/detail:iid',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router