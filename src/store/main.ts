export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
