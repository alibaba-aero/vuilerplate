<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main>
    <header>
      {{ t('header') }}
    </header>
    <RouterView />
    <footer>
      {{ t('footer') }}
    </footer>
  </main>
</template>

<style lang="postcss" scoped>
header {
  padding: 20px 0;
}

footer {
  padding: 20px 0;
}
</style>

<i18n lang="json">
{
  "en": {
    "header": "Header",
    "footer": "Footer"
  },
  "fa": {
    "header": "هدر",
    "footer": "فوتر"
  }
}
</i18n>
