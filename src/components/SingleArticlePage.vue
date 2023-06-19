<template>
  <div
    class="single-article-page"
    v-if="dataLoaded"
  >
    <div class="single-article-info">
      <h2> {{ article.title }}</h2>
      <p class="article-description">
        {{ article.description }}
      </p>
      <p>L'événement a été présenté par AG SCOUTING le : <strong>{{ formatEventDate(article.event_at) }}</strong></p>
      <div class="single-article-btn">
        <v-btn text>
          <router-link to="/actuality">
            Retour
          </router-link>
        </v-btn>
      </div>
    </div>
    <div class="single-article-image">
      <v-carousel
        cycle
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(picture, i) in articlePictures"
          :key="i"
          :src="picture.picture_path"
          contain
        />
      </v-carousel>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      articleId: null,
      articles: null,
      dataLoaded: false,
      article: null,
      articlePictures: null,
      date:""
    };
  },
  beforeMount() {
    this.articleId = this.$store.state.articleId;
    if (this.articleId === null && !!this.$route.params.id) {
      this.articleId = parseInt(this.$route.params.id);
      this.findArticle();
    } else {
      this.articles = this.$store.state.articles;
      [this.article] = this.articles.filter((article) => article.id === this.articleId);
      this.articlePictures = this.article.article_pictures;
      this.dataLoaded = true;
    }
  },
  methods: {
    findArticle() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "articles")
        .then(response => {
          this.sortArticles(response.data);
        })
        .catch(error => {
          this.$hygie.error(error);
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
      [this.article] = this.articles.filter((article) => article.id === this.articleId);

      if (!this.article) {
        this.$router.push({ name: 'Error404' });     
      }

      this.articlePictures = this.article.article_pictures;
      this.dataLoaded = true;
    },
    formatEventDate(date) {
      return this.$moment(date).locale("fr").format("L");
    }
  }
};
</script>

<style scoped>
.single-article-page {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 25px;
    font-style: italic;
}

.single-article-info {
    width: 30%;
}
.article-description {
  white-space: pre-line;
}

.single-article-info h2 {
    padding: 8px;
    font-size: 1.3em;
}

.single-article-info p {
    padding: 8px;
    font-weight: 300;
}

.single-article-image {
    width: 55%;
    display: flex;
}

.image-article {
    width: 100%;
    border-radius: 4px;
}

.single-article-btn {
    margin-top: 90px;
}

.single-article-btn a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
}
strong {
  font-weight: 800;
}

@media only screen and (max-width: 768px) {
    .single-article-page {
        margin-top: 0;
        flex-direction: column-reverse;
    }

    .single-article-info {
        width: 100%;
    }

    .single-article-image {
        width: 100%;
    }

    .single-article-btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>
  
  
  