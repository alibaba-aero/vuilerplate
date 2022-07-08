<script setup lang="ts">
useHead({
  title: 'Home Page',
})
</script>

<template>
  <div>
    <RouterLink to="/test" data-testid="test-link">
      Test
    </RouterLink>
  </div>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld />
  <NewJsxFile />
</template>
