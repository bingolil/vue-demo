import Vue from 'vue';
import Router from 'vue-router';
import NgProgress from 'nprogress';

/* 无须登录 */
import Index from '../page/index';
import Home from '../page/home';
import ProductList from '../components/product/list';
import ProductDetail from '../components/product/detail';
import PageNotFound from '../page/page-not-found';
import Login from '../page/login';

/* 个人中心 */
import ConsoleIndex from '../console-page/index';
import ConsoleOverView from '../console-page/over-view';

/* 后台 */
import adminIndex from '../admin-page/index';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        component: Index,
        children: [{
            path: '',
            name: 'home',
            component: Home,
            meta: {
                title: '路由学习--首页'
            }
        }, {
            path: 'login',
            name: 'login',
            component: Login,
            meta: {
                title: '路由学习--登录'
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
        }]
    }, {
        path: '/console',
        component: ConsoleIndex,
        children: [{
            path: '',
            name: 'ConsoleOverView',
            component: ConsoleOverView,
            meta: {
                title: '路由--个人中心'
            }
        }],
        beforeEnter: (to, from, next) => { // 路由独享守卫
            // next({ path: '/login' })
            next(true)
        }
    }, {
        path: '/admin',
        name: 'admin',
        component: adminIndex
    }, {
        path: '*',
        name: 'pageNotFound',
        component: PageNotFound
    }]
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
    // if (to.name == 'login') { //进入登录页面
    //     // if (true) {
    //     //     next();
    //     // }
    //     next();
    // } else {
    //     next();
    // }
    next();
})

router.afterEach(() => {
    NgProgress.done();
})


export default router;