<template>
  <div class="list-articles">
    <h2>Nos actualités</h2>
    <div class="card-container">
      <v-card
        class="cards"
        v-for="article in articles"
        :key="article.id"
      >
        <v-img
          v-for="picture in article.article_pictures"
          :src="picture.picture_path"
          height="200px"
          :key="picture.id"
        >
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ article.event_at }}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Voir plus
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider />
              <v-card-text>
                AG Scouting
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </div>
  </div>
</template>



<script>
import formatImageSource from '../../../utils/utils.js';

export default {
  data: () => ({
      show: false,
      formatImageSource: formatImageSource,
      article: [],
      articleIdSelectedForDelete: null,
      showModal: false,
      errorAlert: false
    }),
    mounted() {
    this.findArticle();
  },
  methods: {
    findArticle() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "articles"),{ params: { include: 'article_pictures' } }
        .then(response => {
          console.log(response.data);
          this.articles = response.data;
          // this.$store.commit("homeArticleData", this.article);
        })
        .catch(error => {
          console.error(error);
        });
    },
    openModal(articleId) {
      this.modelIdSelectedForDelete = articleId;
      this.showModal = true;
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
  