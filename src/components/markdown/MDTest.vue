<script setup lang="ts">
defineProps({
  test: {
    type: String,
    default: '',
  },
})
const { t } = useI18n()
</script>

<template>
  {{ t('testComponent') }}
  <div class="wrapper">
    {{ t('props') }} {{ test }}
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply m-5 p-5 bg-lightblue rounded-lg;
  border: 1px solid lightblue;
}
</style>

<i18n lang="json">
{
  "en": {
    "testComponent": "Test Component in Markdown",
    "props": "Props:"
  },
  "fa": {
    "testComponent": "تست کامپوننت در مارک داون",
    "props": "پراپس:"
  }
}
</i18n>
