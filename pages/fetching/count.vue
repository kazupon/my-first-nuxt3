<script setup nuxt>
const ts = new Date().getTime()
const { data } = asyncData('k1', () => $fetch('/api/count'))
console.log('call /api/count', data)
</script>

<template>
  <div>
    <p>fetching count: {{ data }}</p>
    <NuxtLink to="/fetching/">back to /fetching/</NuxtLink>
  </div>
</template>