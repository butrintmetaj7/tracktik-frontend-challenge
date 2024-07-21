import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sites',
      component: import('../views/Sites/Index.vue')
    },
    {
      path: '/',
      name: 'sites/:id',
      component: import('../views/Sites/Show.vue')
    }
  ]
})

export default router
