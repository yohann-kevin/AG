<template>
  <div class="admin-page">
    <h1>Welcome {{ this.name }} to administration workspace</h1>
  </div>
</template>

<script>
export default {
  name: "AdminHomePage",
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
