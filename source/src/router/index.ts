import HomeView from '@/view/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../view/WelcomeView.vue'),
    },
    {
      path: '/quartets',
      name: 'quartets',
      component: () => import('../view/QuartetsView.vue'),
    },
  ],
})

export default router
