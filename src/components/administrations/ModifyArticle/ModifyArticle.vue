<template>
  <div class="modify-article">
    <h2>Modifier l'article</h2>
    <v-card class="modify-article-form">
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
    <div class="modify-article-form-btn">
      <div class="modify-article-alert">
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="error"
          v-model="errorAlert"
          class="modify-article-v-alert"
        >
          La modification de l'article n'a pas fonctionner !
        </v-alert>
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="success"
          v-model="successAlert"
          class="modify-article-v-alert"
        >
          L'article à bien été modifié !
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
        @click="sendModifyArticle()"
      >
        Modifier
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
    <ModifyPicture
      :pictures="articlePictures"
      :article-id="articleId"
    />
    <AddPicture
      :article-id="articleId"
      @add:picture="articlePictures = $event"
    />
  </div>
</template>

<script>
import ModifyPicture from '../../section/ModifyPicture.vue';
import AddPicture from '../../section/AddPicture.vue';

export default {
  data() {
    return {
      titre: "",
      description: "",
      date: "",
      mainpicture: null,
      pictures: null,
      article: null,
      errorAlert: false,
      successAlert: false,
      isInLoad: false,
      articleId: null
    };
  },
  components: {
    ModifyPicture,
    AddPicture
  },
  beforeMount() {
    this.articleId = this.$store.state.articleId;
    if (!this.articleId && !this.$route.params.id) {
      this.$router.push({ path: "/administration/article" });
    } else if (this.articleId) {
      this.findArticleData();
    } else {
      this.articleId = this.$route.params.id;
      this.$store.commit("articleId", this.articleId);
      this.findArticleData();
    }
  },
  methods: {
    findArticleData() {
      this.$axios
      // eslint-disable-next-line no-undef
        .get(process.env.VUE_APP_API_URL + "get/article/" + this.articleId)
        .then(response => {
          this.article = response.data.article;
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendArticle() {
        this.isInLoad = true;
        this.manageArticleInfo();
        this.sendArticleData();
      },
      // Envoyer les données de l'article modifié au serveur
    },
    manageArticleInfo() {
      const articleData = {
        title: this.titre,
        description: this.description,
        event_at: this.date
      };
      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'modify/article',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        },
        data: articleData
      };
      this.$axios(config)
        .then(response => {
          if (response.status !== 500) {
            this.successAlert = true;
          }
        })
        .catch(error => {
          this.errorAlert = true;
          console.log(error);
        });
    }
  };
</script>




<style>
.modify-article {
  width: 100%;
  display: flex;
  
  justify-content: space-around;
  flex-wrap: wrap;
}

.modify-article h2 {
  width: 100%;
  margin: 10px;
  text-align: center;
}

.modify-article-form h3 {
  width: 100%;
  text-align: center;
}

.modify-article-form {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}
.modify-article-alert {
  width: 100%;
  display: flex;
  justify-content: center;
}

.modify-article-v-alert {
  width: 100%;
}

.modify-article-form-btn {
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
