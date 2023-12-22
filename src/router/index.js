import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../pages/login/LoginPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    // },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
