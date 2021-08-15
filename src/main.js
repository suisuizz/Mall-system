/*
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-14 20:31:08
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-15 12:34:32
 * @FilePath: \mall-system-gitee\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// 引入 路由
import router from './router'
// 引入 Vuex
import store from './store'

// 按需引入 element
import './plugins/element'

// 引入 axios API
import api from "./api/index";

// 统一出口挂载Vue原型上
Vue.prototype.$api = api;

// 引用 axios
let axios = require("axios");
// 倒入 nprogress 包对应的js和css文件
import NProgress from 'nprogress'

// axios的请求根路径
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/' // 设置路由访问
axios.interceptors.request.use(config => {
  // if (window.sessionStorage.getItem("token")) {
  // 在请求拦截器中打开进度条
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // }
  return config
})
axios.interceptors.response.use(config => {
  // 在相应拦截器中关闭进度条
  NProgress.done()
  return config
})


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')