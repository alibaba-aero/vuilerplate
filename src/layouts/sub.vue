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
  padding: 30px 0;
}

footer {
  padding: 30px 0;
}
</style>

<i18n lang="json">
{
  "en": {
    "header": "Header Sub",
    "footer": "Footer Sub"
  },
  "fa": {
    "header": "هدر ساب",
    "footer": "فوتر ساب"
  }
}
</i18n>
