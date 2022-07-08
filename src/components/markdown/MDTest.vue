<script setup lang="ts">
defineProps({
  test: {
    type: String,
    default: '',
  },
})
</script>

<template>
  Test Component in Markdown
  <div class="wrapper">
    Props: {{ test }}
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  margin: 20px 0;
  padding: 20px 0;
  background: lightsalmon;
}
</style>
