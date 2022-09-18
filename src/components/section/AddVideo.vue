<template>
  <div class="add-new-video">
    <h2 class="mb-3">
      Ajouter une nouvelle vidéo au modèle
    </h2>
    <v-card class="model-form">
      <v-file-input
        label="Sélectionner une vidéo"
        class="add-video-input mt-4"
        filled
        accept="video/*"
        color="black"
        prepend-icon="mdi-video"
        v-model="newVideo"
      />

      <v-card-actions class="send-new-video">
        <v-btn
          text
          class="mr-4"
          @click="sendNewVideo()"
        >
          Ajouter
        </v-btn>
        <v-btn text>
          Annuler
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    newVideo: null,
    videoReady: null
  }),
  props: {
    modelId: {
      type: String,
      required: true
    }
  },
  methods: {
    async convertVideoToBase64() {
      // const toBase64 = file => new Promise((resolve, reject) => {
      //   const reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   reader.onload = () => resolve(reader.result);
      //   reader.onerror = error => reject(error);
      // });

      // this.videoReady = await toBase64(this.newVideo);
      let reader = new FileReader();
      reader.readAsDataURL(this.newVideo);
      reader.onload = function () {
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    },
    async sendNewVideo() {
      await this.convertVideoToBase64()
      console.log(typeof this.newVideo);
      
      // console.log(this.videoReady);
    }
  }
}
</script>

<style>
.add-new-video {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.model-form {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}

.add-video-input {
  max-width: 70% !important;
}

.add-picture-input:focus {
  border: #000;
}

.send-new-video {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
