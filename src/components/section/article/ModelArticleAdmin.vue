<template>
  <div>
    <v-card
      class="model-article-admin"
      max-width="800"
      elevation="2"
    >
      <v-card-title>
        <div class="titleModel">
          {{ model.model.firstname }}
        </div>
      </v-card-title>
      
      <v-card-actions>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="grey"
          @click="redirectToModel(model.model.id)"
        >
          <v-icon dark>
            mdi-pencil-outline
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="error"
          @click="openModal"
        >
          <v-icon dark>
            mdi-trash-can-outline
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <ModalDelete
        v-model="showModal"
        @accept="deleteModel(model.model.id)"
        :modal-info="modalDeleteInfo"
      />
    </div>
  </div>
</template>

<script>
import ModalDelete from '../../modal/ModalDelete.vue';

export default {
  data: () => ({
    modalDeleteInfo: {
      modalTitle: "Suppression d'un modèle",
      modalText: 'Souhaitez vous réellement supprimer ce modèle ? Une fois cela fait il ne sera plus possible de la récupérer !'
    },
    showModal: false,
  }),
  components: {
    ModalDelete
  },
  props: {
    model: {
      type: Object,
      required: true
    },
  },
  methods: {
    redirectToModel(modelId) {
      this.$store.commit("modelId", modelId);
      this.$router.push({ name: 'AdminModifyModel', params: { id: modelId } });
    },
    openModal() {
      this.showModal = true;
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
        if (response.status === 200) this.$emit('deleted', { isDelete: response.data.model_deleted, modelId });
      }).catch(error => {
        this.$emit('deleted', { isDelete: false, modelId });
        this.$hygie.logger.error(error);
      });
    }
  }
}
</script>

<style scoped>
.model-article-admin {
  margin-bottom: 25px;
  margin-top: 25px;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
.titleModel {
  text-transform: uppercase;
}
</style>
