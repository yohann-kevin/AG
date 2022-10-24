<template>
  <div class="reset-password">
    <h2>Réinitialisation du mot de passe</h2>
    <div class="reset-password-container-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
        class="reset-password-alert"
      >
        Le mail de réinitialisation à bien été envoyer ! Si vous ne trouver pas le mail en question vérifier dans vos spam.
      </v-alert>
    </div>
    <v-form
      v-model="valid"
      class="reset-password-form"
      ref="reset-password-form"
    >
      <v-text-field
        v-model="email"
        color="black"
        :rules="emailRules"
        type="email"
        label="Courriel"
        class="reset-password-input"
        required
      />

      <div class="reset-password-btn">
        <v-btn
          text
          :disabled="!valid"
          @click="resetPassword"
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
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    successAlert: false,
    valid: false,
    email: '',
    emailRules: [ v => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Adresse email invalide' ],
  }),
  methods: {
    resetForm() {
      this.$refs['reset-password-form'].reset();
    },
    resetPassword() {
      const data = {
        agent_email: this.email
      };

      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL + 'renew_passwords',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });

      this.successAlert = true;
    }
  },
}
</script>

<style scoped>
.reset-password {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.reset-password h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.reset-password-container-alert {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.reset-password-alert {
  width: 40%;
}

.reset-password-form {
  width: 40%;
}

.reset-password-input {
  margin: 10px;
}

.reset-password-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
