<script setup lang="ts">
useHead({ title: 'Test Page' })
const { t } = useI18n()
</script>

<template>
  {{ t('testPage') }}
  <div>
    <RouterLink to="/" data-testid="home-link">
      {{ t('home') }}
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

<i18n lang="json">
{
  "en": {
    "testPage": "Test Page",
    "home": "Home"
  },
  "fa": {
    "testPage": "صفحه تست",
    "home": "خانه"
  }
}
</i18n>
