<template>
  <div class="modify-picture-section">
    <h2 class="mb-3">
      Modifier les images du modèle
    </h2>
    <v-card
      v-for="(picture, i) in modelPictures"
      :key="i"
      class="image-card"
    >
      <v-img
        :src="picture.picture_path"
        height="250px"
      />
      <v-btn
        v-if="picture.main_picture"
        class="ma-2"
        fab
        small
        :class="picture.main_picture ? 'gold-star' : ''"
        @click="noChangeMainPictureAlert = true"
      >
        <v-icon dark>
          mdi-star
        </v-icon>
      </v-btn>
      <v-btn
        v-else
        class="ma-2"
        fab
        small
        :class="picture.main_picture ? 'gold-star' : ''"
        @click="modifyMainPicture(picture.id)"
      >
        <v-icon dark>
          mdi-star-outline
        </v-icon>
      </v-btn>
      <v-btn
        v-if="!picture.main_picture"
        class="ma-2"
        fab
        dark
        small
        color="error"
        @click="openModalDeletePicture(picture.id)"
      >
        <v-icon dark>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
      <v-btn
        v-else
        class="ma-2"
        fab
        dark
        small
        color="error"
        @click="noDeleteMainPictureAlert = true"
      >
        <v-icon dark>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
    </v-card>

    <div>
      <ModalDelete
        v-model="showModal"
        @accept="deletePicture"
        :modal-info="modalDeleteInfo"
      />
    </div>

    <div class="delete-picture-alert">
      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="error"
        v-model="errorAlert"
      >
        La suppression de la photo n'a pas fonctionner !
      </v-alert>

      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="success"
        v-model="successAlert"
      >
        La photo a bien été supprimer !
      </v-alert>

      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="success"
        v-model="mainPictureModifiedAlert"
      >
        L'image principale a bien été modifier
      </v-alert>

      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="error"
        v-model="noDeleteMainPictureAlert"
      >
        Vous ne pouvez pas supprimer la photo principale d'un modèle !
      </v-alert>

      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="error"
        v-model="noChangeMainPictureAlert"
      >
        Cette image est déjà l'image principale du modèle !
      </v-alert>

      <v-alert
        elevation="15"
        dense
        text
        dismissible
        type="error"
        v-model="errorModifiedMainPicture"
      >
        L'image principale du modèle n'a pas pus être modifier !
      </v-alert>
    </div>
  </div>
</template>

<script>
import ModalDelete from '../modal/ModalDelete.vue'

export default {
  components: {
    ModalDelete,
  },
  data: () => ({
    modelPictures: null,
    showModal: false,
    selectedPictureId: null,
    errorAlert: false,
    successAlert: false,
    noDeleteMainPictureAlert: false,
    mainPictureModifiedAlert: false,
    noChangeMainPictureAlert: false,
    errorModifiedMainPicture: false,
    modalDeleteInfo: {
      modalTitle: "Suppression d'une image",
      modalText: 'Souhaitez vous réellement supprimer cette image ? Une fois cela fait il ne sera plus possible de la récupérer !'
    }
  }),
  props: {
    pictures: {
      type: Array,
      required: true
    },
    modelId: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    this.modelPictures = this.pictures;
  },
  methods: {
    openModalDeletePicture(pictureId) {
      this.showModal = true;
      this.selectedPictureId = pictureId;
    },
    deletePicture() {
      const config = {
        method: 'delete',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL +  '/model_pictures/' + this.selectedPictureId,
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.admtoken
         }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) {
          this.successAlert = true;
          this.modelPictures = response.data;
          this.selectedPictureId = null;
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
    },
    modifyMainPicture(pictureId) {
      var config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL + '/model_pictures/modify/main_picture/?model_uuid=' + this.modelId + '&id=' + pictureId,
        headers: { 
          'Authorization': 'Bearer ' + sessionStorage.admtoken
         }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) {
          this.modelPictures = response.data;
          this.mainPictureModifiedAlert = true;
        }
      }).catch(error => {
        this.errorModifiedMainPicture = true;
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.modify-picture-section {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.image-card {
  width: 30%;
  margin-bottom: 40px;
}

.gold-star {
  color: #FFD700;
}

.delete-picture-alert {
  width: 80%;
}
</style>
