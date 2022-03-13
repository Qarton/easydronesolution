import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        back1: '#2E3141',
        back2: '#3F4E85',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})

Vue.use(Vuetify);

export default new Vuetify({
});
