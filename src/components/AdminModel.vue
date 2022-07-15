<template>
  <div class="all-model-admin">
    <h2>Modèles</h2>
    <div class="all-model-admin-nav">
      <v-btn color="black lighten-2" text>
        <router-link to="/administration">Ajout modèle</router-link>
      </v-btn>
    </div>
    <div class="admin-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
      >
        La suppression du modèle {{ modelDeletedId }} n'a pas fonctionner !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
      >
        Le modèle {{ modelDeletedId }} à bien été supprimer !
      </v-alert>
    </div>
    <div class="all-model-admin-list">
      <div v-for="(model, i) in models" :key="i">
        <ModelArticleAdmin :model="model" @deleted="manageDeletedMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModelArticleAdmin from "./section/article/ModelArticleAdmin.vue";


export default {
  data: () => ({
    models: null,
    errorAlert: false,
    successAlert: false,
    modelDeletedId: null
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
    },
    manageDeletedMessage(deleteInfo) {
      this.modelDeletedId = deleteInfo.modelId;
      if (deleteInfo.isDelete) {
        this.successAlert = true;
        this.findModel();
      } else {
        this.errorAlert = true;
      }
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

.admin-alert {
  width: 80%;
}

.all-model-admin-list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
