import { createRouter, createWebHistory } from 'vue-router'
import FormView from "@/views/FormView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
