<template>
  <section
  class="back1 white--text"
  id="contact-me">
        <v-container>

          <v-row justify="space-around">

            <v-col cols="10" md="8" lg="4">

              <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact</h2>

               <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    label="Nom"
                    required
                    dark
                  ></v-text-field>

                  <v-text-field
                    label="Prenom"
                    required
                    dark
                  ></v-text-field>

                  <v-text-field
                    label="E-mail"
                    required
                    dark
                  ></v-text-field>

                  <v-btn
                    color="back2"
                    dark
                    @click="validate"
                  >
                    Valider
                  </v-btn>
                </v-form>

            </v-col>

          </v-row>
          <div class="py-12"></div>
        </v-container>
      </section>
</template>

<script>
export default {
  name: 'ContactMe'
}
</script>