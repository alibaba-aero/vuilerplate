<script setup lang="ts">
useHead({
  title: 'Test Page',
})
</script>

<template>
  Test Page
  <div>
    <RouterLink to="/">
      Home
    </RouterLink>
  </div>
</template>

<route>
{
  meta: {
    layout: "sub"
  }
}
</route>
