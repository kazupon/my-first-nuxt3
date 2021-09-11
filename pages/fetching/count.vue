<script setup nuxt>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  inheritLocale: true
})
const ts = new Date().getTime()
const { data } = asyncData('k1', () => $fetch('/api/count'))
console.log('call /api/count', data)
</script>

<template>
  <div>
    <p>{{ t('fetching', { count: data }) }}</p>
    <p>fetching count: {{ data }}</p>
    <NuxtLink to="/fetching/">back to /fetching/</NuxtLink>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "fetching": "fetching count: {count}"
  },
  "ja": {
    "fetching": "フェッチカウント: {count}"
  }
}
</i18n>