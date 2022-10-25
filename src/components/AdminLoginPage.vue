<template>
  <div class="admin-login">
    <h2 class="admin-login-title">
      Connexion Administration
    </h2>
    
    <v-card class="admin-login-container">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
        class="login-alert"
      >
        La connexion n'a pas fonctionner vérifier vos identifiants et mot de passe !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
        class="login-alert"
      >
        Connexion réussie !
      </v-alert>

      <v-form 
        ref="login-admin-form"
        class="login-admin-form"
      >
        <v-text-field
          v-model="login"
          color="black"
          type="email"
          label="Courriel ou Nom"
          class="login-admin-input mt-5"
          required
        />

        <v-text-field
          v-model="password"
          color="black"
          type="password"
          label="Mot de passe"
          class="login-admin-input"
          required
        />

        <div class="login-admin-btn">
          <v-btn
            text
            @click="loginAdmin()"
            class="mr-5"
          >
            Envoyer
          </v-btn>
          <v-btn
            text
            @click="resetForm()"
          >
            Annuler
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AdminLoginPage",
  data: () => ({
    login: "",
    password: "",
    errorAlert: false,
    successAlert: false
  }),
  methods: {
    resetForm() {
      this.$refs['login-admin-form'].reset();
    },
    loginAdmin() {
      const data = {
        login: this.login,
        password: this.password
      };

      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'admin/auth',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        if (response.status === 200) {
          this.successAlert = true;
          this.connectAdmin(response.data);
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
    },
    connectAdmin(adminData) {
      this.$store.commit("adminToken", adminData.token);
      this.$store.commit("adminData", adminData.admin_data);
      sessionStorage.admtoken = this.$store.state.adminToken;
      this.$store.commit("adminConnected", true);
      this.$router.push("administration");
    }
  }
}
</script>

<style>
.admin-login {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.admin-login-title {
  width: 100%;
  margin: 20px;
  text-align: center;
}

.login-alert {
  width: 100%;
  margin: 10px;
}

.admin-login-container {
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.login-admin-form {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.error-login {
  margin-top: 25px;
  width: 30%;
}

.login-admin-input {
  width: 55%;
  margin-top: 10px;
  margin: 10px;
}

.login-admin-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
</style>
