<template>
  <div class="add-article">
    <h2>Ajout d'un article</h2>
    <v-card class="add-article-form">
      <h3>Information sur l'article</h3>
      <v-text-field
        label="Titre"
        color="black"
        prepend-icon="mdi-star"
        v-model="titre"
      />

      <v-textarea
        label="Description"
        color="black"
        prepend-icon="mdi-pencil"
        no-resize
        v-model="description"
      />
      <v-text-field
        label="Date de l'évenement"
        color="black"
        type="date"
        prepend-icon="mdi-calendar"
        v-model="date"
      />
      <v-file-input
        label="Photo principale :"
        color="black"
        prepend-icon="mdi-camera-image"
        accept="image/*"
        v-model="mainpicture"
      />
      <v-file-input
        label="Photos :"
        color="black"
        prepend-icon="mdi-image-multiple"
        multiple
        accept="image/*"
        v-model="pictures"
      />
    </v-card>
    <div class="model-form-btn">
      <div class="add-model-alert">
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="error"
          v-model="errorAlert"
          class="add-article-v-alert"
        >
          L'ajout de l'article n'a pas fonctionner !
        </v-alert>
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="success"
          v-model="successAlert"
          class="add-article-v-alert"
        >
          L'article à bien été ajouter !
        </v-alert>

        <v-progress-circular
          :size="90"
          color="black"
          indeterminate
          class="is-in-load"
          v-if="isInLoad"
          :width="8"
        />
      </div>

      <v-btn
        text
        @click="sendModel()"
      >
        Ajouter
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
  </div>
</template>

<script>
import imageCompression from 'browser-image-compression';

export default {
  name: 'AdminAddArticlePage',
  data: () => ({
    titre: "",
    description: "",
    date: "",
    mainpicture: null,
    pictures: null,
    articleInfo: null,
    errorAlert: false,
    successAlert: false,
    isInLoad: false,
    dataMainPicture: [],
    dataPictures: []
  }),
  methods: {
    sendModel: () => {
      // utilisé lorsqu'un admin clique sur ajouter
      this.manageArticleInfo();
      this.sendModelData();
    },
    // valeurs saisies par l'admin
    manageArticleInfo: () => {
      this.articleInfo = {
        title: this.titre,
        description: this.description,
        event_at: this.date
      };
    },
    convertPicturesToBase64: async (pictureData, isMainPicture) => {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
      if (isMainPicture) {
        this.dataMainPicture.push(await toBase64(pictureData));
      } else {
        this.dataPictures.push(await toBase64(pictureData));
      }
    },
    compressImage: async (picture) => {
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };
      try {
        return await imageCompression(picture, options);
      } catch (error) {
        this.$refs.errorAddModel.value = true;
        console.log(error);
      }
    },
    manageModelPictures: async () => {
      const mainPicture = this.mainpicture;
      try {
        const mainPictureCompressed = await this.compressImage(mainPicture);  
        await this.convertPicturesToBase64(mainPictureCompressed, true);
      } catch (error) {
        this.errorAddModel = true;
        console.log(error);
      }

      const otherPictures = this.pictures;
      for (let i = 0; i < otherPictures.length; i++) {
        try {
          const pictureCompressed = await this.compressImage(otherPictures[i]);
          await this.convertPicturesToBase64(pictureCompressed, false);
        } catch (error) {
          this.errorAddModel = true;
          console.log(error);
        }
      }
    },
    sendModelData: async () => {
      await this.manageModelPictures();
      const articleData = {
        article: this.articleInfo,
        main_picture: this.dataMainPicture,
        all_pictures: this.dataPictures
      };
      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'articles',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        },
        data: articleData
      };

      this.$axios(config).then(response => {
        this.isInLoad = false;
        if (response.status === 201) {
          this.successAlert = true;
        }
      }).catch(error => {
        this.isInLoad = false;
        this.errorAlert = true;
        console.log(error);
      });
    }
  }
};
</script>


<style>
.add-article {
  width: 100%;
  display: flex;
  
  justify-content: space-around;
  flex-wrap: wrap;
}

.add-article h2 {
  width: 100%;
  margin: 10px;
  text-align: center;
}

.add-article-form h3 {
  width: 100%;
  text-align: center;
}

.add-article-form {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}
.add-article-alert {
  width: 100%;
  display: flex;
  justify-content: center;
}

.add-article-v-alert {
  width: 100%;
}

.add-article-form-btn {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
}

.is-in-load {
  margin-bottom: 30px;
}
</style>