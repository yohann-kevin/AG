<template>
  <div class="all-model-admin">
    <h2>Modèles</h2>
    <div class="admin-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
      >
        La suppression du modèle {{ modelDeletedId }} n'a pas fonctionné !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
      >
        Le modèle {{ modelDeletedId }} a bien été supprimé !
      </v-alert>
    </div>
    <div class="all-model-admin-list">
      <v-data-table
        :headers="headers"
        :items="models"
        class="elevation-1"
      >
        <template #item="{ item }">
          <ModelArticleAdmin
            :model="item"
            @deleted="manageDeletedMessage"
          />
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import ModelArticleAdmin from "./section/article/ModelArticleAdmin.vue";


export default {
  data: () => ({
    headers: [
        { text: "Homme/Femme", value: "model_picture", sortable: false },
        
      ],
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
      // eslint-disable-next-line no-undef
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
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
}

.all-model-admin h2 {
  width: 100%;
  text-align: center;
}

.admin-alert {
  width: 80%;
}

.all-model-admin-list {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
