<template>
  <div
    class="single-article-page"
    v-if="dataLoaded"
  >
    <div class="single-article-info">
      <h2> {{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <p>{{ article.event_at }}</p>
      <div class="single-article-btn">
        <v-btn text>
          <router-link to="/">
            Retour
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/contact">
            Contacter
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
      articleId: "",
      dataLoaded: false,
      article: null,
      articlePictures: null
      
    };
  },
  beforeMount() {
    this.articleId = this.$store.state.articleId;
    if (this.articleId === null && this.$route.params.id === null) {
      this.$router.push({ path: "/" });
    } else if (this.articleId !== null) {
      this.findArticleData();
    } else {
      this.articleId = this.$route.params.id;
      this.$store.commit("articleId", this.articleId);
      this.findArticleData();
    }
  },
  methods: {
    findArticleData() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/articles/" + this.articleId).then(response => {
        this.article = response.data.article;
        this.articlePictures = response.data.article_pictures;
        this.dataLoaded = true;
      });
    }
  }
};
</script>

<style>
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
  
  
  