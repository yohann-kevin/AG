<template>
  <div class="model-section">
    <h2>Model section</h2>
    <div class="all-model">
      <div v-for="(model, i) in models" :key="i">
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
    models: null
  }),
  beforeMount() {
    let modelOnStore = this.$store.state.homeModelData;
    // check if model is save on store
    modelOnStore != null ? this.models = modelOnStore : this.findModel();
  },
  methods: {
    findModel() {
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/model").then(response => {
        this.models = response.data;
        this.$store.commit("homeModelData", this.models);
      })
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
