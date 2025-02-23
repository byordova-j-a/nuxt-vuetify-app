// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-vuetify-app/' : '',
    buildAssetsDir: 'build-assets',
  },
  build: {
    transpile: ['vuetify'],
  },
  css: [ '@/assets/fonts/fonts.css', '@/assets/global.css'],
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  components: [
    {
      path: '~/components/ui',
      prefix: 'UI',
      extensions: ['.vue'],
    },
    {
      path: '~/components/entities',
      prefix: 'Entity',
      extensions: ['.vue'],
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    vueJsx: {
      mergeProps: true,
    },
  },
});
