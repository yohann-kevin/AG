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
      @load="imageLoaded"
    ></v-img>

    <v-progress-circular
      :size="50"
      color="black"
      indeterminate
      class="img-loader"
      v-if="!imgIsLoaded"
    ></v-progress-circular>

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
    imgIsLoaded: false
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
    },
    imageLoaded() {
      this.imgIsLoaded = true;
    }
  }
}
</script>

<style scoped>
.model-article {
  margin-bottom: 25px;
  margin-top: 25px;
}

.img-loader {
  width: 100% !important;
  margin-top: 50px;
  margin-bottom:50px;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
