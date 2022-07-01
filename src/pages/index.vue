<script setup lang="ts">
useHead({
  title: 'Home Page',
})
</script>

<template>
  <div>
    <RouterLink to="/test">
      Test
    </RouterLink>
  </div>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld />
  <NewJsxFile />
</template>

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
}
</style>

