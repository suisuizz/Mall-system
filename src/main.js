/*
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2021-08-14 20:31:08
 * @LastEditors: SUI
 * @LastEditTime: 2021-09-10 23:51:10
 * @FilePath: \mall-system-gitee\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// 引入 路由
import router from './router'
// 引入 Vuex
import store from './store'

// 引入树形组件
import TreeTable from 'vue-table-with-tree-grid'

// 引入富文本
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)

// 按需引入 element
import './plugins/element'

// 引入 axios API
import api from "./api/index";

// 统一出口挂载Vue原型上
Vue.prototype.$api = api;

// 全局注册树形组件 名称 tree-table
Vue.component('tree-table', TreeTable)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next();
})

//定义一个全局的时间过滤器
Vue.filter('dateFormat', function (originValue) {
  const dt = new Date(originValue * 1000)
  const y = dt.getFullYear()
  //getMonth方法获取的月份从0开始，所以需要加1.
  // padStart方法是字符串方法，所以需要拼接。第一个参数是检测的位数
  // 不满足就用第二个参数填充
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')