<template>
  <v-app>
    <HeaderLayouts/>
    <v-main>
      <router-view class="view"></router-view>
    </v-main>
    <FooterLayouts/>
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
};
</script>

<style scoped>
.view {
  /* min-height: 100vh; */
}
</style>
