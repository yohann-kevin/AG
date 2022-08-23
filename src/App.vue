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

export default {
  name: 'App',

  components: {
    HeaderLayouts,
    FooterLayouts
  },

  data: () => ({
    //
  }),
  mounted() {
    // TODO: manage reload agent connection here
  }
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
