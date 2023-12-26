import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../pages/login/LoginPage.vue';
import ListFormPage from '../pages/listForm/ListFormPage.vue'
import EditFieldPage from '../pages/editField/EditFieldPage.vue'
import FormPage from '../pages/formPage/FormPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/fields',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/forms',
      name: 'formsPage',
      component: ListFormPage,
    },
    {
      path: '/fields',
      name: 'fieldsPage',
      component: EditFieldPage
    },
    {
      path: '/form-perfome',
      name: 'formPerform',
      component: FormPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
