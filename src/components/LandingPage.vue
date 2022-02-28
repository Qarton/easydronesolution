<template>
  <section id="hero">
    <v-parallax :height="$vuetify.breakpoint.smAndDown ? 900 : 1080" src="../assets/img/bg2.jpg">
        <v-row no-gutters>
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-img
                      src="../assets/drone-w.png"
                      max-width="50%"
                    ></v-img>

                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Page en construction
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
        </v-row>
    </v-parallax>
      </section>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>