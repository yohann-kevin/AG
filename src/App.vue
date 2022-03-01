<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      class="app-bar"
      height="80px"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/ag-logo.jpeg"
          transition="scale-transition"
          width="80px"
          height="78px"
        />
      </div>

      <h1>AG Scouting</h1>

      <v-spacer></v-spacer>

      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.instagram.com/ag.scouting/"
        target="_blank"
        text
      >
        <span class="mr-2">Notre instagram</span>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.view {
  min-height:120vh
}
</style>
