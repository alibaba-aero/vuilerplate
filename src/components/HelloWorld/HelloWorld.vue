<script setup lang="ts">
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const main = useMainStore()

let count = $ref(0)

const increment = () => {
  count += 1
}

const incrementPinia = () => {
  main.counter += 1
}

const { locale, t } = useI18n({ messages })

function toggleLocale() {
  locale.value = (locale.value === 'en' ? 'fa' : 'en')
}
</script>

<template>
  <div class="mb-2">
    <button class="mr-2" data-testid="toggle-button" @click="toggleLocale">
      {{ t('button') }} {{ t('changeLocale') }}
    </button>
    <span data-testid="local">
      {{ t('local') }}
    </span>
  </div>
  <div class="flex items-center justify-center mb-2">
    <h1 class="mr-2" data-testid="counter-pinia">
      {{ t('couterPinia') }} {{ main.counter }}
    </h1>
    <button type="button" data-testid="add-btn-pinia" @click="incrementPinia">
      {{ t('addPinia') }}
    </button>
  </div>
  <h1 class="mb-2" data-testid="counter">
    {{ t('counter') }} {{ count }}
  </h1>
  <button class="mb-4" type="button" data-testid="add-btn" @click="increment">
    {{ t('add') }}
  </button>
  <div>
    {{ t('postCssTest') }}
    <div class="test-wrapper__inner">
      {{ t('inner') }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
button {
  @apply border rounded-2 hover:bg-blueGray p-2;
  transition: background-color 200ms ease;
}
.test-wrapper {
  padding-top: 20px;

  &__inner {
    @apply py-6 mt-6;
    background: rgb(234, 241, 244);
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "local": "Local",
    "changeLocale": "Change Locale",
    "couterPinia": "Counter Pinia:",
    "addPinia": "Add pinia",
    "counter": "Counter:",
    "add": "Add",
    "postCssTest": "PostCSS Styling test",
    "inner": "Inner"
  },
  "fa": {
    "local": "محلی",
    "changeLocale": "تغییر زبان",
    "couterPinia": "شمارشگر پینیا:",
    "addPinia": "اضافه کردن پینیا",
    "counter": "شمارشگر:",
    "add": "اضافه کردن",
    "postCssTest": "PostCSS تست استایل",
    "inner": "درونی"
  }
}
</i18n>
