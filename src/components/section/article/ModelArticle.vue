<template>
  <v-card
    class="model-article"
    max-width="344"
    elevation="2"
  >
    <v-img
      :src="model.model_picture.picture_path"
      max-height="300px"
      contain
    ></v-img>

    <v-card-title>
      {{ model.model.firstname }}
    </v-card-title>

    <v-card-subtitle>
      {{ model.model_info.description }}
    </v-card-subtitle>

    <v-card-actions>
      <!-- <router-link to="/model" class="more-btn"> -->
        <v-btn color="black lighten-2" text @click="redirectToModel(model.model.id)">
          Voir plus
        </v-btn>
      <!-- </router-link> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
    model: {
      type: Object,
      required: true
    },
  },
  methods: {
    redirectToModel(modelId) {
      this.$store.commit("modelId", modelId);
      this.$router.push({ path: "/model" });
    }
  }
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
