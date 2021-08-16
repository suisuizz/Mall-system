/*
 * @Descripttion: 路由配置
 * @Author: SUI
 * @Date: 2021-08-14 17:41:47
 * @LastEditors: SUI
 * @LastEditTime: 2021-08-16 19:17:18
 * @FilePath: \mall-gitee\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // 重定向
    redirect: '/login'
  },
  {
    path: '/login',
    // 路由懒加载
    component: () => import('@/components/home/Login'),
    meta: {
      name: '登录'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    // 重定向
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: () => import('@/components/home/Welcome')
    }, ]
  },
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // from代表从哪里来，to代表去的路径，next放行函数
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router