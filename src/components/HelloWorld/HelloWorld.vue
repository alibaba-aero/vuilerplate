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
  if (locale.value === 'en')
    locale.value = 'fa'
  else
    locale.value = 'en'
}
</script>

<template>
  <div>
    <button data-testid="toggle-button" @click="toggleLocale">
      {{ t('button') }} {{ t('changeLocale') }}
    </button>
    <span data-testid="local">
      {{ t('local') }}
    </span>
  </div>
  <div class="wrapper">
    <h1 data-testid="counter-pinia">
      {{ t('couterPinia') }} {{ main.counter }}
    </h1>
    <button type="button" data-testid="add-btn-pinia" @click="incrementPinia">
      {{ t('addPinia') }}
    </button>
  </div>
  <div class="wrapper">
    <h1 data-testid="counter">
      {{ t('counter') }} {{ count }}
    </h1>
    <button type="button" data-testid="add-btn" @click="increment">
      {{ t('add') }}
    </button>
  </div>
  <div class="test-wrapper">
    {{ t('postCssTest') }}
    <div class="test-wrapper__inner">
      {{ t('inner') }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin-left: 10px;
}
.test-wrapper {
  padding-top: 20px;

  &__inner {
    background: rgb(234, 241, 244);
    padding: 20px 0;
    margin-top: 20px;
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
