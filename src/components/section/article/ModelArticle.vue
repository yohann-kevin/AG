<template>
  <v-card
    class="model-article"
    max-width="344"
    max-height="400"
    min-height="400"
    elevation="2"
  >
    <v-img
      :src="model.model_picture.picture_path"
      max-height="300px"
      contain
      @load="imageLoaded"
    />

    <v-progress-circular
      :size="50"
      color="black"
      indeterminate
      class="img-loader"
      v-if="!imgIsLoaded"
    />

    <v-card-title>
      {{ model.model.firstname }}
    </v-card-title>

    <v-card-subtitle
      class="model-description"
      v-if="model.model_info.description.length !== 0"
    >
      {{ formatDescription(model.model_info.description) }}
    </v-card-subtitle>

    <v-card-actions :class="model.model_info.description.length === 0 ? 'model-card-action-bottom' : ''">
      <v-btn
        color="black lighten-2"
        text
        @click="redirectToModel(model.model.id)"
      >
        Voir plus
      </v-btn>
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
      this.$router.push({ name: 'model', params: { id: modelId } });
    },
    imageLoaded() {
      this.imgIsLoaded = true;
    },
    formatDescription(description) {
      return description.substring(0,180) + "...";
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

.model-description {
  text-align: justify;
}

.model-card-action-bottom {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
