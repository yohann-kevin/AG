<template>
  <div class="register-agent">
    <h2>Inscription</h2>
    <div class="register-agent-container-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
        class="register-agent-alert"
      >
        Quelque chose c'est mal passer réessayer de vous inscrire plus tard !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
        class="register-agent-alert"
      >
        Inscription réussie !
      </v-alert>
    </div>
    <v-form
      v-model="valid"
      class="register-agent-form"
      ref="register-agent-form"
    >
      <v-text-field
        v-model="firstname"
        color="black"
        label="Prénom"
        class="register-agent-input"
        required
      />

      <v-text-field
        v-model="lastname"
        color="black"
        label="Nom de famille"
        class="register-agent-input"
        required
      />

      <v-text-field
        v-model="email"
        color="black"
        :rules="emailRules"
        type="email"
        label="Courriel"
        class="register-agent-input"
        required
      />

      <v-text-field
        v-model="password"
        color="black"
        :rules="passwordRules"
        :append-icon="eyesPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="eyesPassword ? 'text' : 'password'"
        label="Mot de passe"
        class="register-agent-input"
        required
        @click:append="eyesPassword = !eyesPassword"
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

      <v-checkbox
        v-model="cgu"
        color="black"
        :rules="[(this.cgu) || 'Veuillez accepter les CGU']"
        label="Accepter les CGU"
        class="register-agent-input"
        required
      >
        <template #label>
          <div>
            J'ai lu et j'accepte les 
            <v-tooltip bottom>
              <template #activator="{ on }">
                <a
                  target="_blank"
                  href="#/cgu"
                  @click.stop
                  v-on="on"
                >
                  conditions générales d'utilisation
                </a>
              </template>
              Voir les CGU
            </v-tooltip>
          </div>
        </template>
      </v-checkbox>

      <div class="register-agent-btn">
        <v-btn
          text
          :disabled="!valid"
          @click="registerAgent"
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
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    eyesPassword: false,
    cgu: false,
    emailRules: [ v => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Adresse email invalide' ],
    passwordRules: [ v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Mot de passe invalide' ],
    errorAlert: false,
    successAlert: false,
  }),
  methods: {
    resetForm() {
      this.$refs['register-agent-form'].reset();
    },
    registerAgent() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        cgu: this.cgu
      }

      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'agents',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        if (response.status === 201) {
          this.successAlert = true;
          this.connectAgent(response.data);
        }
      }).catch(error => {
        this.errorAlert = true;
         this.$hygie.logger.error(error);
      });
    },
    connectAgent(agentData) {
      this.$store.commit("agentToken", agentData.token);
      this.$store.commit("agentData", agentData.admin_data);
      sessionStorage.agttoken = this.$store.state.agentToken;
      this.$store.commit("agentConnected", true);
      this.$router.push({ path: '/agent' });
    }
  }
}
</script>

<style scoped>
.register-agent {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.register-agent h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.register-agent-container-alert {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.register-agent-alert {
  width: 40%;
}

.register-agent-form {
  width: 40%;
}

.register-agent-input {
  margin: 10px;
}

.register-agent-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media only screen and (max-width: 768px) {
  .register-agent-alert {
    width: 80%;
  }

  .register-agent-form {
    width: 80%;
  }
}

@media only screen and (max-width: 480px) {}
</style>
