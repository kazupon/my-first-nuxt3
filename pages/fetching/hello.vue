<script setup nuxt>
const ts = new Date().getTime()
const { data } = asyncData('k2', () => $fetch('/api/hello', { method: 'POST', body: { hello: `world` }}))
console.log('call /api/hello', JSON.stringify(data))
</script>

<template>
  <div>
    <p>fetching data: {{ data }}</p>
    <NuxtLink to="/fetching/">back to /fetching/</NuxtLink>
  </div>
</template>