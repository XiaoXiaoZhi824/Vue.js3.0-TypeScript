import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('views/main/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('views/notFound/index.vue')
    }
  ]
})
