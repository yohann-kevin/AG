<template>
  <v-card
    class="model-article-admin"
    max-width="344"
    elevation="2"
  >
    <v-img
      :src="model.model_picture.picture_path"
      height="300px"
    ></v-img>

    <v-card-title>
      {{ model.model.firstname }}
    </v-card-title>

    <v-card-subtitle>
      {{ model.model_info.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="black lighten-2" text @click="redirectToModel(model.model.id)">
        Modifier
      </v-btn>
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
      this.$router.push({ path: "/administration/modify/model" });
    }
  }
}
</script>

<style scoped>
.model-article-admin {
  margin-bottom: 25px;
  margin-top: 25px;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
