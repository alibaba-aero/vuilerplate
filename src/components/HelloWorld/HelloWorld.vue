<script setup lang="ts">
const main = useMainStore()

let count = $ref(0)

const increment = () => {
  count += 1
}

const incrementPinia = () => {
  main.counter += 1
}
</script>

<template>
  <div class="wrapper">
    <h1 data-testid="counter-pinia">
      Counter Pinia: {{ main.counter }}
    </h1>
    <button type="button" data-testid="add-btn-pinia" @click="incrementPinia">
      Add pinia
    </button>
  </div>
  <div class="wrapper">
    <h1 data-testid="counter">
      Counter: {{ count }}
    </h1>
    <button type="button" data-testid="add-btn" @click="increment">
      Add
    </button>
  </div>
  <div class="test-wrapper">
    PostCSS Styling test
    <div class="test-wrapper__inner">
      Inner
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin-left: 10px;
}
.test-wrapper {
  padding-top: 20px;

  &__inner {
    background: rgb(234, 241, 244);
    padding: 20px 0;
    margin-top: 20px;
  }
}
</style>
