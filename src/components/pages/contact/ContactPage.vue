<template>
  <div class="contact-page">
    <h2>Contact</h2>
    <p>
      Une question ? Un problème ? Besoin de plus d'information ? N'hésitez pas
      à nous contacter via ce formulaire, nous nous engageons à vous répondre dans
      les plus brefs délais.
    </p>

    <div class="contact-container-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
        class="contact-alert"
      >
        Quelque chose c'est mal passer réessayer de nous contactez plus tard !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
        class="contact-alert"
      >
        Votre demande de contact à bien été envoyer !
      </v-alert>
    </div>

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
        <v-btn
          text
          :disabled="!valid"
          @click="sendEmail"
        >
          Envoyer
        </v-btn>
        <v-btn
          text
          @click="resetForm"
        >
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
    content: ""
  }),
  methods: {
    resetForm() {
      this.$refs['contact-form'].reset();
    },
    sendEmail() {
      const data = {
        sender: this.email,
        object: this.object,
        content: this.content
      };

      const config = {
        method: 'post',
         // eslint-disable-next-line no-undef
         url: process.env.VITE_APP_API_URL + 'contacts',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        if(response.status === 201) {
          this.successAlert = true;
          this.$refs['contact-form'].reset();
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });

    }
  }
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-page > h2 {
  width: 100%;
  text-align: center;
  margin: 20px;
}

.contact-page > p {
  width: 80%;
  text-align: center;
  margin: 15px;
}

.contact-container-alert {
  width: 60%;
  margin: 15px;
}

.contact-alert {
  width: 100%;
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
