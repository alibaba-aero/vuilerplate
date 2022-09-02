<script setup lang="ts">
import AlibabaLogo from '../assets/logo.svg?component'

useHead({ title: 'Home Page' })
const { t } = useI18n()
</script>

<template>
  <div class="bg-amber">
    <RouterLink to="/test" data-testid="test-link">
      {{ t('test') }}
    </RouterLink>
  </div>
  <button class="i-carbon-sun dark:i-carbon-moon w-6 h-6 my-4" />
  <button class="i-carbon-umbrella dark:i-carbon-train w-6 h-6 my-4" />
  <div class="flex items-center justify-center p-6 my-3">
    <AlibabaLogo class="w-[15rem]" />
    <img class="w-[12rem]" alt="Vue logo" src="../assets/logo.png">
  </div>
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
