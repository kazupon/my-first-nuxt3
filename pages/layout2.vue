<template>
  <NuxtLayout name="custom">
    <template #header> Some header template content with NuxtLayout. </template>
    The rest of the page
  </NuxtLayout>
</template>

<script>
export default {
  layout: false,
};
</script>