import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'site-list',
      component: import('../views/Sites/Index.vue')
    },
    {
      path: '/sites/:id',
      name: 'site-details',
      props: true,
      component: import('../views/Sites/Show.vue')
    }
  ]
})

export default router
