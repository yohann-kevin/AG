<template>
  <div class="contact-page">
    <h2>Contact</h2>
    <p>
      Vous souhaitez obtenir plus d'informations sur nos prestations ? 
      Décrivez-nous votre projet à l’aide du formulaire ci-dessous. 
      Nous nous engageons à vous répondre dans les plus brefs délais
      pour vous faire une proposition d’accompagnement. 
    </p>

    <v-card
      elevation="8"
      class="contact-card"
    >
      <v-form
        class="contact-form"
        ref="contact-form"
      >
        <v-text-field
          v-model="email"
          color="black"
          :rules="emailRules"
          type="email"
          label="Courriel"
          class="contact-input"
          prepend-icon="mdi-email"
          required
        />

        <v-text-field
          v-model="phoneNumber"
          label="Votre numéro de téléphone"
          :rules="phoneRules"
          color="black"
          class="contact-input"
          prepend-icon="mdi-phone"
        />

        <v-text-field
          v-model="companyName"
          color="black"
          label="Nom de votre entreprise"
          class="contact-input"
          prepend-icon="mdi-home-city"
        />

        <v-text-field
          v-model="activity"
          color="black"
          label="Votre secteur d'activité"
          class="contact-input"
          prepend-icon="mdi-briefcase"
        />

        <v-text-field
          v-model="object"
          color="black"
          label="Objet de votre demande"
          class="contact-input"
          required
          prepend-icon="mdi-email-outline"
        />

        <v-select
          v-model="needSelected"
          :items="needs"
          label="Votre besoin"
          color="black"
          item-color="black"
          class="contact-input"
          multiple
          chips
          required
          prepend-icon="mdi-magnify"
        />

        <v-textarea
          v-model="content"
          color="black"
          label="Votre message"
          class="contact-input"
          filled
          required
          prepend-icon="mdi-message"
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
        type="error"
        v-model="formAlert"
        class="contact-alert"
      >
        Votre email, votre besoin, votre message et l'objet de celui-ci sont requis pour envoyer une demande de contact  !
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

      <v-progress-circular
        :size="70"
        color="black"
        indeterminate
        v-if="isInLoad"
        class="contact-progress"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    successAlert: false,
    errorAlert: false,
    formAlert: false,
    email: "",
    emailRules: [
      (v) =>
        /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "Adresse email invalide",
    ],
    object: null,
    content: null,
    needs: [
      {
        text: "Mannequin",
        value: "mannequin",
      },
      {
        text: "Photographe",
        value: "photographe",
      },
      {
        text: 'Studio',
        value: 'studio'
      },
      {
        text: 'Autre',
        value: 'autre'
      }
    ],
    needSelected: null,
    phoneNumber: null,
    phoneRules: [
      (v) =>
        /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(v) || "Numéro de téléphone invalide",
    ],
    companyName: null,
    activity: null,
    isInLoad: false
  }),
  methods: {
    resetForm() {
      this.$refs['contact-form'].reset();
    },
    formatNeed() {
      if (!this.needSelected) return;
      return this.needSelected.join('/');
    },
    checkContactForm() {
      if (this.email && this.object && this.needSelected && this.content) return true;
      this.formAlert = true;
      return false;
    },
    sendEmail() {
      if (!this.checkContactForm()) return;
      this.isInLoad = true;
      const data = {
        sender: this.email,
        phone: this.phoneNumber,
        company: this.companyName,
        activity: this.activity,
        object: this.object,
        need: this.formatNeed(),
        content: this.content
      };
      

      const config = {
        method: 'post',
         // eslint-disable-next-line no-undef
         url: process.env.VUE_APP_API_URL + 'contacts',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        if(response.status === 201) {
          this.isInLoad = false;
          this.successAlert = true;
          this.$refs['contact-form'].reset();
        }
      }).catch(error => {
        this.isInLoad = false;
        this.errorAlert = true;
        this.$hygie.logger.error(error);
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
  width: 70%;
}

.contact-container-alert {
  width: 70%;
  margin: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-alert,
.contact-progress {
  width: 100%;
}

.contact-card {
  width: 70%;
  margin: 15px;
  padding: 20px;
}

.contact-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media only screen and (max-width: 768px) {
  .contact-page > p {
    width: 95%;
  }

  .contact-container-alert {
    width: 95%;
  }

  .contact-card {
    width: 95%;
    margin: 15px;
    padding: 20px;
  }
}
</style>
