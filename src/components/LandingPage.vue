<template>
  <section id="hero">
    <v-row class="text-center">
         <v-col cols="12">            
            <v-carousel
              :show-arrows="false"
               cycle
               hide-delimiters
            >
               <v-carousel-item
               v-for="(slide, i) in slides"
               :key="i"
               eager
               >

                <v-theme-provider dark>
                  <v-parallax :src="slide.src">
                    <v-container fill-height>
                      <v-row
                        align="center"
                        class="white--text mx-auto"
                        justify="center"
                      >
                        <v-img
                            src="../assets/drone-w.png"
                            max-width="25%"
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
                          @click="$vuetify.goTo('#about-drone')"
                        >
                          <v-icon>mdi-chevron-double-down</v-icon>
                        </v-btn>
                      </v-row>
                    </v-container>  
                  </v-parallax>
                </v-theme-provider>               
               </v-carousel-item>
            </v-carousel>
         </v-col>
      </v-row>
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
  data: () => ({
      slides: [
         {
            id:1,
            src:require('@/assets/img/img1.jpg')
         },
         { 
            id:2,
            src: require('@/assets/img/img2.jpg')
         },
         { 
            id:3,
            src: require('@/assets/img/img3.jpg')
         }
      ]
    
   })
}
</script>