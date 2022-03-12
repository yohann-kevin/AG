<template>
  <div class="admin-login">
    <h2 class="admin-login-title">Administration login</h2>
    
    <v-card class="admin-login-container">
      <label for="login">Email or Name :</label>
      <input type="text" name="login" ref="loginInput">

      <label for="password">Password : </label>
      <input type="password" name="password" ref="passwordInput">

      <div class="login-admin-btn">
        <v-btn text @click="sendForm()"> Envoyer </v-btn>
        <v-btn text @click="resetForm()"> Annuler</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AdminLoginPage",
  data: () => ({
    login: "",
    password: ""
  }),
  methods: {
    resetForm() {
      this.$refs.loginInput.value = "";
      this.$refs.passwordInput.value = "";
    },
    sendForm() {
      if (this.checkEmptyValue(this.$refs.loginInput) && this.checkEmptyValue(this.$refs.passwordInput)) {
        this.login = this.$refs.loginInput.value;
        this.password = this.$refs.passwordInput.value;
        this.loginAdmin();
      } else {
        // TODO: manage the case of form is not complete
        alert("Is not okay");
      }
    },
    checkEmptyValue(input) {
      return input.value === "" ? false : true;
    },
    loginAdmin() {
      let data = {
        login: this.login,
        password: this.password
      };

      console.log(process.env.VUE_APP_API_URL);
      let config = {
        method: 'post',
        url: process.env.VUE_APP_API_URL + 'admin/auth',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      this.$axios(config).then(response => {
        this.connectAdmin(response.data);
      }).catch(error => {
        console.log(error);
      });
    },
    connectAdmin(adminData) {
      this.$store.commit("adminToken", adminData.token);
      this.$store.commit("adminData", adminData.admin_data);
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

.admin-login-container {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.admin-login-container label {
  width: 100%;
  text-align: center;
}

.admin-login-container input {
  width: 30%;
  height: 30px;
  margin: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  outline: none;
  padding: 5px;
  transition: 0.5s;
}

.admin-login-container:hover {
  border-radius: 0px;
  outline: none;
}

.login-admin-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
</style>
