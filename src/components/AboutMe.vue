<template>
  <section id="about-me">
        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">À propos de moi</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
          <v-scroll-x-reverse-transition>
            <v-avatar
              class="elevation-12 mb-12"
              size="128"
            >
              <v-img src="../assets/img/profil.png"></v-img>
            </v-avatar>
          </v-scroll-x-reverse-transition>

          <v-row justify="space-around">
            <v-col cols="10" md="4">
              <h3 class="mb-4">Qui suis-je</h3>
              Passionné d’aéronautique, j’ai créé le société Easy Drone Solution au 1er janvier 2022 spécialise dans la réalisation de vidéos, de photos aériennes et de mission d’inspection. Titulaire des brevets de pilotes avion, planeur et ULM.
            </v-col>

            <v-col cols="10" md="4">
              <h3 class="mb-4">David MORIN</h3>
              <div class="data"><strong>E-mail:</strong> david.morin@easydronesolution.fr</div>
              <div class="data"><strong>Phone:</strong>07.07.07.07.07</div>
              <div class="data"><strong>City:</strong>Espalion</div>
            </v-col>

          </v-row>

        </v-container>
      </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>
