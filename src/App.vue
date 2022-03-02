<template>
  <v-app>
    <HeaderLayouts/>
    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderLayouts from "./components/layouts/HeaderLayouts.vue";

export default {
  name: 'App',

  components: {
    HeaderLayouts
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
