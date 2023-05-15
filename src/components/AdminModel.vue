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
        :items-per-page="100"
        class="elevation-5 all-model-table"
      >
        <template #item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="redirectToModel(item.model.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="openModal(item.model.id)"
          >
            mdi-delete
          </v-icon>
        </template>  
      </v-data-table>
    </div>
    <ModalDelete
      v-model="showModal"
      @accept="deleteModel(modelIdSelectedForDelete)"
      :modal-info="modalDeleteInfo"
    />
  </div>
</template>
<script>
import ModalDelete from './modal/ModalDelete.vue';

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        text: 'Nom du modèle',
        align: 'start',
        sortable: false,
        value: 'model.firstname',
      },
      { 
        text: 'Actions', 
        value: 'actions', 
        sortable: false, 
        align: 'end' 
      },
    ],
    models: [],
    errorAlert: false,
    successAlert: false,
    modelDeletedId: null,
    modalDeleteInfo: {
      modalTitle: "Suppression d'un modèle",
      modalText: 'Souhaitez vous réellement supprimer ce modèle ? Une fois cela fait il ne sera plus possible de la récupérer !'
    },
    showModal: false,
    modelIdSelectedForDelete: null,
  }),
  components: {
    ModalDelete,
  },
  beforeMount() {
    let modelOnStore = this.$store.state.homeModelData;
    // check if model is save on store
    modelOnStore != null ? this.models.push(...modelOnStore) : this.findModel();
  },
  methods: {
    findModel() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/model").then(response => {
        this.models = [];
        this.models.push(...response.data);
        this.$store.commit("homeModelData", this.models);
      });
    },
    redirectToModel(modelId) {
      this.$store.commit("modelId", modelId);
      this.$router.push({ name: 'AdminModifyModel', params: { id: modelId } });
    },
    openModal(modelId) {
      this.modelIdSelectedForDelete = modelId;
      this.showModal = true;
    },
    manageDeletedModel(deleteInfo) {
      this.modelDeletedId = deleteInfo.modelId;
      if (deleteInfo.isDelete) {
        this.successAlert = true;
        this.findModel();
      } else {
        this.errorAlert = true;
      }
    },
    deleteModel(modelId) {
      let config = {
        method: 'delete',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'delete/model/?id=' + modelId,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) this.manageDeletedModel({ isDelete: response.data.model_deleted, modelId });
      }).catch(error => {
        this.$emit('deleted', { isDelete: false, modelId });
        console.log(error);
      });
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
  margin-bottom: 20px;
}

.custom-title-table {
  text-align: center;
    font-size: 1.5rem;
    color: black;
}

.admin-alert {
  width: 80%;
}

.all-model-admin-list {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.all-model-table {
  width: 100%;
}
</style>
