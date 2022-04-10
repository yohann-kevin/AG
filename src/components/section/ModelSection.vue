<template>
  <div class="model-section">
    <h2>Nos modèles Femmes</h2>
    <div class="all-model">
      <div v-for="(model, i) in modelsWoman" :key="i">
        <ModelArticle :model="model"/>
      </div>
    </div>
    <h2>Nos modèles Hommes</h2>
    <div class="all-model">
      <div v-for="(model, i) in modelsMen" :key="i">
        <ModelArticle :model="model"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModelArticle from "./article/ModelArticle.vue";

export default {
  name: "ModelSection",
  components: {
    ModelArticle
  },
  data: () => ({
    models: null,
    modelsMen: [],
    modelsWoman: []
  }),
  beforeMount() {
    let modelOnStore = this.$store.state.homeModelData;
    // check if model is save on store
    if (modelOnStore != null) {
      this.models = modelOnStore;
      this.separateMenWoman();
    } else {
      this.findModel();
    }
  },
  methods: {
    findModel() {
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/model").then(response => {
        this.models = response.data;
        this.$store.commit("homeModelData", this.models);
        this.separateMenWoman();
      });
    },
    separateMenWoman() {
      for (let i = 0; i < this.models.length; i++) {
        if (this.models[i].model_info.sexe === "men") {
          this.modelsMen.push(this.models[i]);
        } else {
          this.modelsWoman.push(this.models[i]);
        }
      }
    }
  }
}
</script>

<style scoped>
.model-section {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.model-section h2 {
  width: 100%;
  text-align: center;
}

.all-model {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
