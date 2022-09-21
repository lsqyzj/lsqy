import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/2',
    name: '2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/3',
    name: '3',
    component: () => import( '../views/di3.vue')
  },
  {
    path: '/4',
    name: '4',
    component: () => import('../components/echs/population.vue')
  },
  {
    path: '/5',
    name: '5',
    component: () => import('../views/di5.vue')
  },
  {
    path: '/6',
    name: '6',
    component: () => import('../views/di0.vue')
  },
  {
    path: '/2048',
    name: '2048',
    component: () => import('@/components/geme/2048.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
