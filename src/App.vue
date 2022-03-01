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

      <div id="nav">
        <router-link to="/">Accueil</router-link>
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
#nav {
  width: 45%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#nav > a {
  text-decoration: none;
  font-size: 22px;
  color: #000;
  display: inline-block;
  position: relative;
}

#nav > a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2.5px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

#nav > a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.view {
  min-height:120vh
}
</style>
