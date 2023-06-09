<template>
  <div class="list-articles">
    <h2>Nos actualités</h2>

    <div class="card-container">
      <v-card
        class="cards"
        elevation="2"
        max-width="344"
        max-height="450"
        min-height="450"
        v-for="(article, i) in articles"
        :key="i"
      >
        <v-img
          v-if="article.main_picture"
          class="article-photo bw"
          :src="article.main_picture.picture_path"
          max-height="200px"
          contain
          @load="imageLoaded"
        />
        <v-progress-circular
          :size="90"
          color="black"
          indeterminate
          class="img-loader"
          v-if="!imgIsLoaded"
        />
        <v-card-title>
          {{ article.title }}
        </v-card-title>

        <v-card-subtitle
          class="article-description"
          v-if="article.description && article.description.length !== 0"
        >
          {{ formatDescription(article.description) }}
        </v-card-subtitle>
        <v-card-actions class="article-card-action-bottom">
          <v-btn
            color="black lighten-2"
            text
            @click="redirectToArticle(article.id)"
          >
            Voir plus
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      articlePictures: null,
      dataLoaded: false,
      imgIsLoaded: false,
    };
  },
  mounted() {
    this.findArticle();
  },
  methods: {
    findArticle() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "articles")
        .then(response => {
          this.sortArticles(response.data);
          this.dataLoaded = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    sortArticles(articles) {
      this.articles = articles.map((article) => {
        article.main_picture = article.article_pictures.find((picture) => picture.main_picture === true);
        const articleData = { ...article.article };
        delete article.article;
        return { ...article, ...articleData };
      });
      this.$store.commit("articles", this.articles);
    },
    redirectToArticle(articleId) {
      this.$store.commit("articleId", articleId);
      this.$router.push({ name: 'article', params: { id: articleId } });
    },
    imageLoaded() {
      this.imgIsLoaded = true;
    },
    formatDescription(description) {
      return description.substring(0, 160) + "...";
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 20px;
}
.card-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.cards {
  width: 33%;
  margin-bottom: 25px;
  margin-top: 25px;
}

.img-loader {
  width: 100% !important;
  margin-top: 50px;
  margin-bottom:50px;
}

.article-card-action-bottom {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.article-description {
  margin-top: 15px;
  text-align: justify;
}

@media (max-width: 768px) {
  .cards {
    width: 300px;
  }
}
</style>



  