import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/guns', name: 'GunList', component: () => import('../views/GunList.vue') },
  { path: '/guns/:id', name: 'GunDetail', component: () => import('../views/GunDetail.vue'), props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router