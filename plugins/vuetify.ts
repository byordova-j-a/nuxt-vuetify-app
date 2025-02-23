import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { lightTheme, darkTheme } from './vuetify/themes';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light-theme',
      themes: {
        'light-theme': lightTheme,
        'dark-theme': darkTheme,
      },
    },
  });

  app.vueApp.use(vuetify);
});
