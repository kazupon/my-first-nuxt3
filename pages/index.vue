<template>
  <div>
    <form>
      <label for="locale-select">{{ t('language') }}</label>
      <select id="locale-select" v-model="locale">
        <option value="en">en</option>
        <option value="ja">ja</option>
      </select>
    </form>
    <p>{{ t('hello', { name: 'Nuxt3' }) }}</p>
    <p>{{ t('hello', { name: 'vue-i18n' }) }}</p>
    <ul>
      <li><NuxtLink to="/fetching">Goto fetch & nitro exmaple</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>
