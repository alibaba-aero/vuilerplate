import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

const layoutRoutes = setupLayouts(generatedRoutes)
const router = createRouter({
  routes: layoutRoutes,
  history: createWebHistory(),
})

// Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
const pinia = createPinia()
app.use(pinia)

const head = createHead()
app.use(head)

app.use(router)

app.use(i18n)

app.mount('#app')
