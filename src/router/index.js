import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
