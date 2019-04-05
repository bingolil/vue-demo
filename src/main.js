import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWebchatTitle from 'vue-wechat-title';
import 'nprogress/nprogress.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './assets/css/style.css';
import App from './App.vue';
import router from './router/index';

Vue.use(ElementUI); // 使用 element-ui 插件
Vue.use(VueWebchatTitle); // 修改页面的 title 值
Vue.use(VueAxios, axios); // 全局使用 axios

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')