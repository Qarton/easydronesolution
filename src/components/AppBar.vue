<template>
  <div>
    <v-app-bar 
    app 
    inverted-scroll
    color="back1"
    dark
    >
      <v-toolbar-title class="font-weight-bold text-uppercase">Easy Drone Solution</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <v-toolbar-items class="py-4">
        <v-btn class="d-none d-md-block text-uppercase" text dark @click="$vuetify.goTo('#about-drone')">
          Présentation
        </v-btn>
        <v-btn class="d-none d-md-block text-uppercase" text dark @click="$vuetify.goTo('#home-photo')">
          Exemples
        </v-btn>
        <v-btn class="d-none d-md-block text-uppercase" text dark @click="$vuetify.goTo('#contact-me')">
          Contact
        </v-btn>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = true">
      </v-app-bar-nav-icon>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      right
      class="back1"
      dark
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item @click="$vuetify.goTo('#about-drone'), drawer = false">
            <v-list-item-title class="font-weight-bold text-uppercase">Présentation</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#home-photo'), drawer = false">
            <v-list-item-title class="font-weight-bold text-uppercase">Exemples</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo('#contact-me'), drawer = false">
            <v-list-item-title class="font-weight-bold text-uppercase">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      drawer: false
    }
  },
}
</script>