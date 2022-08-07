<script setup lang="ts">
import AlibabaLogo from '../assets/logo.svg?component'

useHead({ title: 'Home Page' })
const { t } = useI18n()
</script>

<template>
  <div>
    <RouterLink to="/test" data-testid="test-link">
      {{ t('test') }}
    </RouterLink>
  </div>
  <AlibabaLogo id="logo" />
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

<style scoped>
#logo {
  width: 200px;
}
</style>
