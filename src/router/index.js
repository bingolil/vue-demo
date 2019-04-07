import Vue from 'vue';
import Router from 'vue-router';
import NgProgress from 'nprogress';

import store from '../store';

/* 无须登录 */
import Index from '../page/index';
import Home from '../page/home';
import ProductList from '../components/product/list';
import ProductDetail from '../components/product/detail';
import PageNotFound from '../page/page-not-found';


/* 购物车 */
import Cart from '../components/cart/list';

/* 个人中心 */
import ConsoleIndex from '../console-page/index';
import ConsoleOverView from '../console-page/over-view';
import ConsoleOrder from '../components/order/list';

/* 后台 */
import AdminIndex from '../admin-page/index';
import AdminOverView from '../admin-page/over-view';

/* 登录 */
import LoginLayout from '../components/login/index';
import Login from '../components/login/front';
import AdminLogin from '../components/login/admin';
import Register from '../components/login/register';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        component: Index,
        children: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '路由学习--首页'
            }
        }, {
            path: 'product',
            name: 'product',
            component: ProductList,
            meta: {
                title: '路由学习--产品列表'
            }
        }, {
            path: 'product/:productDetailId',
            name: 'prductDetail',
            component: ProductDetail,
            props: true,
            meta: {
                title: '路由学习--产品详情'
            }
        }, {
            path: 'Cart',
            name: 'Cart',
            component: Cart,
            meta: {
                title: '购物车',
                requireAuth: true
            }
        }, {
            path: 'register',
            name: 'Register',
            component: Register,
            meta: {
                title: '请用户登录'
            }
        }]
    }, {
        path: '/admin-login',
        component: LoginLayout,
        children: [{
            path: '',
            name: 'AdminLogin',
            component: AdminLogin,
            meta: {
                title: '欢迎登录admin路由管理'
            }
        }]
    }, {
        path: '/login',
        component: LoginLayout,
        children: [{
            path: '',
            name: 'Login',
            component: Login,
            meta: {
                title: '请用户登录'
            }
        }]
    }, {
        path: '/console',
        component: ConsoleIndex,
        children: [{
            path: '',
            name: 'ConsoleOverView',
            component: ConsoleOverView,
            meta: {
                title: '路由--个人中心',
                requireAuth: true
            }
        }, {
            path: 'order',
            name: 'ConsoleOrder',
            component: ConsoleOrder,
            meta: {
                title: '个人中心--订单列表',
                requireAuth: true
            }
        }]
    }, {
        path: '/admin',
        component: AdminIndex,
        children: [{
            path: '',
            name: 'AdminOverView',
            component: AdminOverView,
            meta: {
                title: '路由--后台总览',
                adminRequireAuth: true
            }
        }]
    }, {
        path: '*',
        name: 'pageNotFound',
        component: PageNotFound,
        meta: {
            title: '路由--网页跑路了'
        }
    }],
    scrollBehavior() { // 页面跳转，滚动到页面顶部
        return { x: 0, y: 0 }
    }
})

NgProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递进进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时最小百分比
})

/* 全局路由守卫 */
router.beforeEach((to, from, next) => {
    NgProgress.start();
    if (to.meta.requireAuth) { // 是否需要守卫
        if (store.state.person.token) { // 检测是否有权限
            next();
        } else {
            // next('/login',{query:{redirect:to.fullpath}});
            next();
        }
    } else if (to.meta.adminRequireAuth) {
        if (store.state.admin.token) {
            next();
        } else {
            next('/admin-login');
        }
    } else {
        next();
    }
})

router.afterEach(() => {
    NgProgress.done();
})


export default router;