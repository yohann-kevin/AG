<template>
  <v-app>
    <HeaderLayouts />
    <v-main>
      <router-view class="view" />
    </v-main>
    <FooterLayouts />
  </v-app>
</template>

<script>
import HeaderLayouts from "./components/layouts/HeaderLayouts.vue";
import FooterLayouts from "./components/layouts/FooterLayouts.vue";
// agent api
import agentapi from "./api/agent.js";

export default {
  name: 'App',

  components: {
    HeaderLayouts,
    FooterLayouts
  },

  data: () => ({
    //
  }),
  beforeMount() {
    if (sessionStorage.agttoken) {
      const token = sessionStorage.agttoken;
      const agentData = agentapi.findAgentData();
      this.$store.commit("agentData", agentData);
      this.$store.commit("agentToken", token);
      this.$store.commit("agentConnected", true);
    }
  },
};
</script>

<style>
@font-face {
  font-family: 'creattion';
  src: url('./assets/fonts/creattion/creattion_demo-webfont.woff2') format('woff2'),
        url('./assets/fonts/creattion/creattion_demo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.creattion {
  font-family: 'creattion';
}
</style>
