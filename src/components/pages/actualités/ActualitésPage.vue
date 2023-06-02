<template>
  <div class="list-articles">
    <h2>Nos actualités</h2>
    <div class="card-container">
      <v-card
        class="cards"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        />
        <v-card-title>
          Halloween
        </v-card-title>
  
        <v-card-subtitle>
          Plus de 1000 personnes
        </v-card-subtitle>
  
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Voir plus
          </v-btn>
  
          <v-spacer />
  
          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
      </v-card>

      <v-card
        class="cards"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        />
        <v-card-title>
          Paques
        </v-card-title>
  
        <v-card-subtitle>
          Plus de 5000 personnes
        </v-card-subtitle>
  
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Voir plus
          </v-btn>
  
          <v-spacer />
  
          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
    models: [],
    modelIdSelectedForDelete: null,
    showModal: false
  }),
  methods: {
    findModel() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/articles")
        .then(response => {
          this.models = response.data;
          this.$store.commit("homeArticleData", this.article);
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
  