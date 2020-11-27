import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/pages/Home.vue') 
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue')
  },
 {
   path: '/demo1',
   component: () => import('@/demo/demo1.vue')
 }, {
  path: '/demo2',
  component: () => import('@/demo/demo2.vue')
  }]
})