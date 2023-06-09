<template>
  <div class="modify-article">
    <h2>Modifier l'article</h2>
    <v-card class="modify-article-form">
      <h3>Information sur l'article</h3>
      <v-text-field
        label="Titre"
        color="black"
        prepend-icon="mdi-star"
        v-model="article.title"
      />
  
      <v-textarea
        label="Description"
        color="black"
        prepend-icon="mdi-pencil"
        no-resize
        v-model="article.description"
      />
      <v-text-field
        label="Date de l'évenement"
        color="black"
        type="date"
        prepend-icon="mdi-calendar"
        v-model="article.event_at"
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
        @click="sendUpdateArticle()"
      >
        Modifier
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        description: "",
        event_at: "",
      },
      errorAlert: false,
      successAlert: false,
      dataLoaded: false,
      articleId: "",
      isInLoad:false
    };
  },
  beforeMount() {
    this.findArticleData();
  },
  methods: {
    findArticleData() {
      const articleId = this.$store.state.articleId || this.$route.params.id;
      if (!articleId) {
        this.$router.push({ path: "/administration/article" });
        return;
      }
      this.articleId = articleId;

      this.$axios
        // eslint-disable-next-line no-undef
        .get(process.env.VUE_APP_API_URL + "articles/" + articleId)
        .then((response) => {
          const article = response.data;
          this.article = {
            title: article.title,
            description: article.description,
            event_at: article.event_at,
          };
          
        })
        .catch((error) => {
          this.$hygie.logger.error(error);
        });
    },
    sendUpdateArticle() {
      const articleData = {
        title: this.article.title,
        description: this.article.description,
        event_at: this.article.event_at,
        
      };

      const config = {
        method: "put",
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + "articles/" + this.articleId,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.admtoken,
        },
        data: articleData,
      };
      this.$axios(config)
        .then((response) => {
          this.isInLoad = false;
          if (response.status === 200) {
            this.successAlert = true;
          } else {
            this.errorAlert = true;
          }
        })
        .catch((error) => {
          this.isInLoad = false;
          this.errorAlert = true;
          this.$hygie.logger.error(error);
        });
    },
  },
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
