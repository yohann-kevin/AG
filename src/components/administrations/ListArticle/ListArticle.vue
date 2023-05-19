<template>
  <div class="all-article-admin">
    <h2>Article</h2>
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
    <div class="all-article-admin-list">
      <v-data-table
        :headers="headers"
        :items="articles"
        :items-per-page="5"
        class="elevation-5 all-article-table"
      >
        <template #item.name="{ item }">
          <span>{{ item.name }}</span>
        </template>
        <template #item.date="{ item }">
          <span class="date">{{ item.date }}</span>
        </template>
        <template #item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="redirectToModel(item.article.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="openModal(item.article.id)"
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
import ModalDelete from '../../modal/ModalDelete.vue';

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        text: "Nom de l'article",
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { 
        text: 'Date de sortie', 
        value: 'date',
        sortable: false,
        align: 'center' 
      },
      {
        text: 'Modifier/Supprimer',
        value: 'actions',
        sortable: false,
        align: 'end'
      },
    ],
    articles: [
      {
        name: 'Haloween',
        date: '01/10/23'
      },
      {
        name: 'Saint silvestre',
        date: '11/10/23',
      },
      {
        name: 'Paques',
        date: '21/10/23',
      },
      {
        name: 'Noel',
        date: '12/10/23',
      },
      {
        name: "Jour de l'an",
        date: '05/10/23',
      }
    ],
    errorAlert: false,
    successAlert: false,
    modelDeletedId: null,
    modalDeleteInfo: {
      modalTitle: "Suppression d'un modèle",
      modalText: 'Souhaitez-vous réellement supprimer ce modèle ? Une fois cela fait, il ne sera plus possible de le récupérer !'
    },
    showModal: false,
    modelIdSelectedForDelete: null,
  }),
  components: {
    ModalDelete,
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
    redirectToModel(articleId) {
      this.$store.commit("articleId", articleId);
      this.$router.push({ name: 'ModifyArticle', params: { id: articleId } });
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
.all-article-admin {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.all-article-admin h2 {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.admin-alert {
  width: 80%;
}

.all-article-admin-list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
}

.all-article-table {
  width: 100%;
}
</style>

