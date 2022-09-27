<template>
  <div class="contact-request-page">
    <h2>Demande de contact</h2>
    <p>
      Vous souhiatez prendre contact avec l'un de nos modèle ? Envoyez nous un
      message avec l'objet de la prise de contact avec le modèle et nous vous
      recontacterons.
    </p>

    <v-card
      elevation="8"
      class="contact-card"
    >
      <v-form
        class="contact-form"
        ref="contact-form"
        v-model="valid"
      >
        <v-text-field
          v-model="email"
          color="black"
          :rules="emailRules"
          type="email"
          label="Courriel"
          class="contact-input"
          required
        />

        <v-text-field
          v-model="object"
          color="black"
          label="Objet de votre demande"
          class="contact-input"
          required
        />

        <v-select
          v-model="modelSelected"
          :items="models"
          label="Select Item"
          multiple
          chips
          required
        />

        <v-textarea
          v-model="content"
          color="black"
          label="Votre message"
          class="contact-input"
          filled
          required
        />
      </v-form>

      <div class="contact-btn">
        <v-btn text>
          Envoyer
        </v-btn>
        <v-btn text>
          Annuler
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    successAlert: false,
    errorAlert: false,
    email: "",
    emailRules: [
      (v) =>
        /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "Adresse email invalide",
    ],
    object: "",
    content: "",
    modelSelected: null,
    // TODO: replace by real data
    models: [
      {
        // TODO: text is firstname + lastname
        text: "anna",
        value: "156451213",
      },
      {
        text: "léa",
        value: "159165156",
      },
    ],
  }),
};
</script>

<style scoped>
.contact-request-page {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-request-page > h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.contact-request-page > p {
  width: 80%;
  text-align: center;
  margin: 15px;
}

.contact-card {
  width: 60%;
  margin: 15px;
  padding: 20px;
}

.contact-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
