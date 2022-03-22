<template>
  <v-card
    class="model-article"
    max-width="344"
    elevation="2"
  >
    <v-img
      src="../../../assets/model-test.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      Model name
    </v-card-title>

    <v-card-subtitle>
      little model description
    </v-card-subtitle>

    <v-card-actions>
      <router-link to="/model" class="more-btn">
        <v-btn color="black lighten-2" text>
          More
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style scoped>
.model-article {
  margin-bottom: 25px;
  margin-top: 25px;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
