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
          :src="article.pictures[0].picture_path"
          height="200px"
        >
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ article.description }}</v-card-subtitle>
  
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
  data() {
    return {
      show: false,
      formatImageSource: formatImageSource,
      articles: [],
      articleIdSelectedForDelete: null,
      showModal: false,
      errorAlert: false
    }
  },
  mounted() {
    const config = {
      method: 'get',
      // eslint-disable-next-line no-undef
      url: process.env.VUE_APP_API_URL + "articles",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.admtoken
      }
    };

    this.$axios(config)
      .then(response => {
        this.articles = response.data; // Corrected variable name
        console.log(response.data);
        // this.$store.commit("homeArticleData", this.articles);
      })
      .catch(error => {
        this.errorAlert = true;
        console.error(error);
      });
  },
  methods: {
    openModal(articleId) {
      this.articleIdSelectedForDelete = articleId;
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
  