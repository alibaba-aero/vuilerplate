<script setup lang="ts">
useHead({ title: 'Home Page' })
const { t } = useI18n()
</script>

<template>
  <div>
    <RouterLink to="/test" data-testid="test-link">
      {{ t('test') }}
    </RouterLink>
  </div>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld />
  <NewJsxFile />
</template>

<i18n lang="json">
{
  "en": {
    "test": "Test"
  },
  "fa": {
    "test": "تست"
  }
}
</i18n>
