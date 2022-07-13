<template>
  <div class="modify-picture-section">
    <h2 class="mb-3">Modifier les images du modèles</h2>
    <v-card v-for="(picture, i) in modelPictures" :key="i" class="image-card">
      <v-img
        :src="picture.picture_path"
        height="250px"
      ></v-img>
      <v-btn
        class="ma-2"
        fab
        small
        :class="picture.main_picture ? 'gold-star' : ''"
      >
        <v-icon dark v-if="picture.main_picture">
          mdi-star
        </v-icon>
        <v-icon dark v-else>
          mdi-star-outline
        </v-icon>
      </v-btn>
      <v-btn
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
    </v-card>

    <div>
      <ModalDeletePicture v-model="showModal" v-on:accept="deletePicture"/>
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
    </div>
  </div>
</template>

<script>
import ModalDeletePicture from '../modal/ModalDeletePicture'

export default {
  components: {
    ModalDeletePicture,
  },
  data: () => ({
    modelPictures: null,
    showModal: false,
    selectedPictureId: null,
    errorAlert: false,
    successAlert: false,
  }),
  props: {
    pictures: {
      type: Array,
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
        url: process.env.VUE_APP_API_URL +  '/model_pictures/' + this.selectedPictureId,
        headers: { }
      };

      this.$axios(config).then(response => {
        if (response.status === 204) {
          this.successAlert = true;
          this.removeImageInUi(this.selectedPictureId);
          this.selectedPictureId = null;
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
    },
    removeImageInUi(pictureId) {
      const pictureDeleteIndex = this.modelPictures.findIndex(picture => picture.id === pictureId);
      this.modelPictures.splice(pictureDeleteIndex, 1);
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
