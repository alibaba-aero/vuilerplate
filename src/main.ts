import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    app.use(i18n)

    if (import.meta.env.SSR)
      initialState.pinia = pinia.state.value
    else
      pinia.state.value = initialState.pinia || {}
  },
)
