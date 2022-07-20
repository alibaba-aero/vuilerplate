import { defineStore } from 'pinia'

interface RootState {
  counter: number
}

export const useMainStore = defineStore('main', {
  state: (): RootState => ({
    counter: 0,
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))

