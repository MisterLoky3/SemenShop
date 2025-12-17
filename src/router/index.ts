import MainPage from '@/components/pages/MainPage.vue'
import MyProfile from '@/components/pages/MyProfile.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routes as autoRoutes } from 'vue-router/auto-routes' // Изменил имя импорта

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/profile',
    component: MyProfile
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

export default router