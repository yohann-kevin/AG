<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(article, i) in articles"
      :key="i"
      class="carousel-item"
    >
      <div class="title">
        <v-btn
          large
          class="carousel-button lighten-2"
          @click="redirectToArticle(article.id)"
        >
          Voir plus...
        </v-btn>
      </div>
      <img
        :src="article.main_picture.picture_path "
        alt="Image"
        class="carousel-image bw"
      >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "IntroductionSection",
  data() {
    return {
      articles: null,
      articlePictures: null,
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
          this.carouselArticles(response.data);
          this.dataLoaded = true;
        })
        .catch(error => {
          this.$hygie.logger.error(error);
        });
    },
    carouselArticles(articles) {
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
  }
};
</script>

<style scoped>
.text-container {
  margin-top: 200px;
  padding-top: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.carousel-image {
  display: block;
  margin: 0 auto; 
  max-height: 600px;
}

.ag-title {
  font-size: 9rem;
  font-weight: 400;
  margin-top: 35px;
  margin-bottom: -10px;
}

.carousel-item {
  width: 100%;
}

.carousel-button {
  position: absolute;
  right: 45%;
  bottom: 10%;
  z-index: 10000;
  font-style: bold;
  opacity: 0.5;
  transition: 0.5s;
}

.carousel-button:hover {
  opacity: 0.9;
}

@media only screen and (max-width: 768px) {
  .ag-title {
    font-size: 5rem;
    margin-top: 0;
  }

  .img-header {
    display: none;
  }

  .carousel-button {
    right: 32%;
  }
}
</style>
