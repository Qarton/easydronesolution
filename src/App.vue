<template>
  <v-app>
    <v-main>
      <app-bar />
      <landing-page />
      <about-drone />
      <home-photo />
      <contact-me/>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage'
import AboutDrone from './components/AboutDrone'
import HomePhoto from './components/HomePhoto';
import AppBar from './components/AppBar';
import ContactMe from './components/ContactMe';

export default {
  name: 'App',

  components: {
    LandingPage,
    AboutDrone,
    HomePhoto,
    AppBar,
    ContactMe
  },
};
</script>
