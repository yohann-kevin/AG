<template>
  <div class="list-articles">
    <h2>Nos actualités</h2>

    <div class="card-container">
      <v-card
        class="cards"
        max-width="344"
        max-height="450"
        min-height="450"
        elevation="2"
        v-for="(article,i) in articles"
        :key="i"
      >
        <v-img
          class="article-photo"
          :src="article.article_pictures.picture_path"
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
        <v-card-actions>
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
      articles: [],
      article: null,
      articlePictures: null,
      dataLoaded: false
    };
  },
  mounted() {
    this.redirectToArticle();
  },
  methods: {
    redirectToArticle(articleId) {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/articles/" + articleId)
        .then(response => {
          this.article = response.data.article;
          this.articlePictures = response.data.article_pictures;
          this.dataLoaded = true;
        })
        .catch(error => {
          console.error(error);
        });
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


<style>
h2 {
  text-align: center;
  margin-top: 20px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cards {
  width: 400px;
  margin: auto;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .cards {
    width: 300px;
  }
}
</style>



  