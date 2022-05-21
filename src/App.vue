<template>
  <v-app>
    <v-main>
      <app-bar />
      <landing-page />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage';
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    LandingPage,
    AppBar
  },
};
</script>
