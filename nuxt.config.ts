import { defineNuxtConfig, extendWebpackConfig } from '@nuxt/kit'

export default defineNuxtConfig({
  modules: [{
    setup(options, nuxt) {
      console.log('module setup')
      extendWebpackConfig((config => {
	config.module.rules.push({
	  resourceQuery: /blockType=i18n/,
	  type: 'javascript/auto',
	  loader: '@intlify/vue-i18n-loader'
	})
      }))
    }
  }]
})
