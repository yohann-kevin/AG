<template>
  <div class="add-new-picture">
    <h2 class="mb-3">Ajouter une nouvelle image au modèle</h2>
    <v-card class="model-form">
      <div class="new-picture-alert">
        <v-alert
          elevation="15"
          dense
          text
          dismissible
          type="error"
          v-model="errorAlert"
        >
          L'ajout de la photo n'a pas fonctionner !
        </v-alert>

        <v-alert
          elevation="15"
          dense
          text
          dismissible
          type="success"
          v-model="successAlert"
        >
          La photo a bien été ajouter !
        </v-alert>
      </div>
      <v-file-input
        label="Sélectionner une photo"
        class="add-picture-input mt-4"
        filled
        accept="image/*"
        v-model="newPicture"
        color="black"
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-card-actions class="send-new-picture">
        <v-btn text class="mr-4" @click="sendNewPicture()">Ajouter</v-btn>
        <v-btn text>Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import imageCompression from 'browser-image-compression';

export default {
  data: () => ({
    newPicture: null,
    newPictureReady: null,
    errorAlert: false,
    successAlert: false
  }),
  props: {
    modelId: {
      type: String,
      required: true
    }
  },
  methods : {
    async convertPicturesToBase64(pictureData) {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      this.newPictureReady = await toBase64(pictureData);
    },
    async compressImage(picture) {
      const options = {
        maxSizeMB: 4,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };

      try {
        return await imageCompression(picture, options);
      } catch (error) {
        this.errorAlert = true;
        console.log(error);
      }
    },
    async sendNewPicture() {
      const newPictureCompressed = await this.compressImage(this.newPicture);
      await this.convertPicturesToBase64(newPictureCompressed);
      
      const config = {
        method: 'post',
        url: process.env.VUE_APP_API_URL + 'model_pictures/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : { picture_data: this.newPictureReady, model_id: this.modelId }
      };

      this.$axios(config).then(response => {
        if (response.status === 201) {
          this.successAlert = true;
          this.$emit('add:picture', response.data);
        }
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
    }
  }
}
</script>

<style scpoed>
.add-new-picture {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.new-picture-alert {
  width: 100%;
}

.model-form {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}

.add-picture-input {
  max-width: 70% !important;
}

.add-picture-input:focus {
  border: #000;
}

.send-new-picture {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
