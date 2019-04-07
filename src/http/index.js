/*
http 配置
 */

import axios from 'axios';
// import { Loading, Message } from 'element-ui';
// 超出时间
axios.defaults.timeout = 5000;

// request请求拦截
// var loadinginstance;

const httpRequest = axios.interceptors.request.use(config => {
    // loadinginstance = Loading.service({ fullscreen: true });
    return config;
}, () => {
    // loadinginstance.close();
    // Message.error({
    //     message: '加载超时'
    // })
})

// response响应拦截
const httpResponse = axios.interceptors.response.use(data => {
    // loadinginstance.close();
    return data;
}, error => {
    // loadinginstance.close();
    // Message.error({
    //     message: '加载失败'
    // })

    return Promise.reject(error)
})

const httpInterceptor = Object.assign(httpRequest, httpResponse);

export default httpInterceptor;