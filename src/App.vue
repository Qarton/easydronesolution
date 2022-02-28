<template>
  <v-app>
    <v-main>
      <landing-page />
      <div class="py-16"></div>
      <about-me />
      <div class="py-16"></div>
      <home-photo />
      <div class="py-16"></div>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import HomePhoto from './components/HomePhoto';

export default {
  name: 'App',

  components: {
    LandingPage,
    AboutMe,
    HomePhoto
  },
};
</script>
