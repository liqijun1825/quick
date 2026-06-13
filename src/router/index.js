import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GunList from '../views/GunList.vue';
import GunDetail from '../views/GunDetail.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/guns', component: GunList, name: 'GunList' },
  { path: '/guns/:id', component: GunDetail, name: 'GunDetail', props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes
});