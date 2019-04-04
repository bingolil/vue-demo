import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWebchatTitle from 'vue-wechat-title';
import 'nprogress/nprogress.css';

import './assets/css/style.css';
import App from './App.vue';
import router from './router/index';


Vue.use(ElementUI);
Vue.use(VueWebchatTitle);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')