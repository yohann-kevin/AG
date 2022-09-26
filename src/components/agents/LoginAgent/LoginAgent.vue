<template>
  <div class="login-agent">
    <h2>Connexion</h2>
    <div class="login-agent-container-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
        class="login-agent-alert"
      >
        Quelque chose c'est mal passer réessayer de vous connecter plus tard !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
        class="login-agent-alert"
      >
        Connexion réussie !
      </v-alert>
    </div>
    <v-form
      v-model="valid"
      class="login-agent-form"
      ref="login-agent-form"
    >
      <v-text-field
        v-model="email"
        color="black"
        :rules="emailRules"
        type="email"
        label="Courriel"
        class="login-agent-input"
        required
      />

      <v-text-field
        v-model="password"
        color="black"
        :rules="passwordRules"
        type="password"
        label="Mot de passe"
        class="login-agent-input"
        required
      />

      <div class="login-agent-btn">
        <v-btn
          text
          :disabled="!valid"
          @click="loginAgent"
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

      <div class="login-not-acocunt">
        <p class="mr-1">
          Pas de compte ?
        </p> 
        <v-tooltip bottom>
          <template #activator="{ on }">
            <a
              target="_blank"
              @click="redirectToRegister()"
              @click.stop
              v-on="on"
            >
              inscrivez-vous
            </a>
          </template>
          Inscription
        </v-tooltip>
        <p class="ml-1">
          dès maintenant
        </p>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    errorAlert: false,
    successAlert: false,
    valid: false,
    email: '',
    password: '',
    emailRules: [ v => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Adresse email invalide' ],
    passwordRules: [ v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Mot de passe invalide' ],
  }),
  methods: {
    resetForm() {
      this.$refs['login-agent-form'].reset();
    },
    loginAgent() {
      const data = {
        email: this.email,
        password: this.password
      };

      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'agent/auth',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        if (response.status === 200) {
          this.successAlert = true;
          this.connectAgent(response.data);
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
    },
    connectAgent(agentData) {
      this.$store.commit("agentToken", agentData.token);
      this.$store.commit("agentData", agentData.admin_data);
      sessionStorage.agttoken = this.$store.state.agentToken;
      this.$store.commit("agentConnected", true);
      this.$router.push({ path: '/agent' });
    },
    redirectToRegister() {
      this.$router.push({ path: '/register/agents' });
    }
  },
}
</script>

<style>
.login-agent {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.login-agent h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.login-agent-container-alert {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.login-agent-alert {
  width: 40%;
}

.login-agent-form {
  width: 40%;
}

.login-agent-input {
  margin: 10px;
}

.login-agent-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.login-not-acocunt {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media only screen and (max-width: 768px) {
  .login-agent-alert {
    width: 80%;
  }

  .login-agent-form {
    width: 80%;
  }
}

@media only screen and (max-width: 480px) {}
</style>
