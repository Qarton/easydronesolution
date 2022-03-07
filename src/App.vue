<template>
  <v-app>
    <v-main>
      <app-bar />
      <landing-page />
      <div class="py-16"></div>
      <about-drone />
      <div class="py-16"></div>
      <home-photo />
      <div class="py-16"></div>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage'
import AboutDrone from './components/AboutDrone'
import HomePhoto from './components/HomePhoto';
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    LandingPage,
    AboutDrone,
    HomePhoto,
    AppBar
  },
};
</script>
