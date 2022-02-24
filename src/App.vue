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
      <HelloWorld style="min-height:120vh;"/>
      <!-- TODO: install vue-router -->
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
