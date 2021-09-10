<template>
  <div>
    <Head :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Title>{{ dynamic }} title</Title>
      <Meta name="description" :content="`My page's ${dynamic} description`" />
      <!-- Link rel="preload" href="/test.txt" as="script" /-->
    </Head>

    <button class="blue" @click="dynamic = Math.random() * 100">
      Click me
    </button>
    <h1>This header is injected with app.vue</h1>
    <NuxtPage />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const dynamic = ref(49)
    return { dynamic }
  }
  // data: () => ({ dynamic: 49 }),
}
</script>