<template>
  <div class="renew-password">
    <h2>Renouvellement du mot de passe</h2>
    <v-form
      v-model="valid"
      class="renew-password-form"
      ref="renew-password-form"
    >
      <v-text-field
        v-model="password"
        color="black"
        :rules="passwordRules"
        type="password"
        label="Mot de passe"
        class="register-agent-input"
        required
      />

      <v-text-field
        v-model="confirmPassword"
        color="black"
        :rules="[(this.password === this.confirmPassword) || 'Les mot de passe ne corresponde pas']"
        type="password"
        label="Confirmer le mot de passe"
        class="register-agent-input"
        required
      />

      <div class="renew-password-btn">
        <v-btn
          text
          :disabled="!valid"
          @click="registerPassword"
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
    secureId: null,
    valid: false,
    password: '',
    confirmPassword: '',
    passwordRules: [ v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Mot de passe invalide' ],
  }),
  beforeMount() {
    this.secureId = this.$route.params.id;
    if (this.$route.params.id === null) {
      this.$router.push({ path: "/" });
    } else {
      this.checkSecureId();
    }
  },
  methods: {
    resetForm() {
      this.$refs['renew-password-form'].reset();
    },
    checkSecureId() {
      const config = {
        method: 'get',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + "renew_passwords/check/secure_id/" + this.secureId,
        headers: { }
      };

      this.$axios(config).then(response => {
        if (response.data === null) {
          this.$router.push({ path: "/" });
        }
      }).catch(error => {
        this.$router.push({ path: "/" });
        console.log(error);
      });
    },
    registerPassword() {
      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + "renew_passwords/renew/password/" + this.secureId,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : { password: this.password }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) {
          this.$router.push({ path: "/login/agents" });
        }
      }).catch(error => {
        this.$router.push({ path: "/" });
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.renew-password {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.renew-password h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.renew-password-form {
  width: 40%;
}

.renew-password-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
