<template>
  <div class="model-section">
    <v-parallax
      class="parallax-model mb-4"
      height="450"
      :src="formatImageSource('/public/assets/ag-team-seven.jpg')"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h2 class="text-h2 mb-4 parallax-title">
            Nos modèles Femmes
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="all-model">
      <v-progress-circular
        :size="90"
        color="black"
        indeterminate
        class="is-in-load"
        v-if="isInLoad"
        :width="8"
      />
      <div
        v-for="(model, i) in modelsWoman"
        :key="i"
      >
        <ModelArticle :model="model" />
      </div>
    </div>
    <v-parallax
      class="parallax-model"
      height="450"
      :src="formatImageSource('/public/assets/ag-team-nine.jpg')"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h2 class="text-h2 mb-4 parallax-title">
            Nos modèles Hommes
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="all-model">
      <v-progress-circular
        :size="100"
        color="black"
        indeterminate
        class="is-in-load"
        v-if="isInLoad"
        :width="8"
      />
      <div
        v-for="(model, i) in modelsMen"
        :key="i"
      >
        <ModelArticle :model="model" />
      </div>
    </div>
  </div>
</template>

<script>
import ModelArticle from "./article/ModelArticle.vue";
import formatImageSource from '../../utils/utils.js';

export default {
  name: "ModelSection",
  components: {
    ModelArticle
  },
  data: () => ({
    isInLoad: true,
    models: null,
    modelsMen: [],
    modelsWoman: [],
    formatImageSource: formatImageSource
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
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/model").then(response => {
        this.models = response.data;
        this.$store.commit("homeModelData", this.models);
        this.separateMenWoman();
      });
    },
    separateMenWoman() {
      for (let i = 0; i < this.models.length; i++) {
        if (this.models[i].model.sexe === "men") {
          this.modelsMen.push(this.models[i]);
        } else {
          this.modelsWoman.push(this.models[i]);
        }
      }
      this.isInLoad = false;
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

.parallax-model {
  width: 100%;
}

.parallax-title {
  color: #fff;
}

.is-in-load {
  margin: 30px;
}
</style>
