<template>
  <div class="all-model-admin">
    <h2>Modèles</h2>
    <div class="all-model-admin-nav">
      <v-btn color="black lighten-2" text>
        <router-link to="/administration">Ajout modèle</router-link>
      </v-btn>
    </div>
    <div class="all-model-admin-list">
      <div v-for="(model, i) in models" :key="i">
        <ModelArticleAdmin :model="model"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModelArticleAdmin from "./section/article/ModelArticleAdmin.vue";


export default {
  data: () => ({
    models: null
  }),
  components: {
    ModelArticleAdmin
  },
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
      });
    }
  }
}
</script>

<style>
.all-model-admin {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.all-model-admin h2 {
  width: 100%;
  text-align: center;
}

.all-model-admin-nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

.all-model-admin-nav a {
  text-decoration: none;
  color: #000;
}

.all-model-admin-list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
