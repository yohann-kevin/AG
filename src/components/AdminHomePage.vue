<template>
  <div class="admin-page">
    <h1>Welcome {{ this.name }} to administration workspace</h1>
    <div>
      <router-link to="/administration/models">See models</router-link>
    </div>
    <AddModelSection/>
  </div>
</template>

<script>
import AddModelSection from "./section/AddModelSection.vue";

export default {
  name: "AdminHomePage",
  components: {
    AddModelSection
  },
  data: () => ({
    name: null
  }),
  beforeMount() {
    this.name = this.$store.state.adminData.name;
  }
}
</script>

<style>
.admin-page {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.admin-page h1 {
  width: 100%;
  text-align: center;
}
</style>
