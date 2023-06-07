<template>
  <div class="all-article-admin">
    <h2>Article</h2>
    <div class="admin-alert">
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="error"
        v-model="errorAlert"
      >
        La suppression de l'article {{ articleDeletedId }} n'a pas fonctionné !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
      >
        L'article {{ articleDeletedId }} a bien été supprimé !
      </v-alert>
    </div>
    <div class="all-article-admin-list">
      <v-data-table
        :headers="headers"
        :items="articles"
        :items-per-page="100"
        class="elevation-5 all-article-table"
      >
        <template #item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="redirectToArticle(item.article.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="openModal(item.article.id)"
          >
            mdi-delete
          </v-icon>
        </template>  
      </v-data-table>
    </div>
    <ArticleDelete
      v-model="showModal"
      @accept="deleteArticle(articleIdSelectedForDelete)"
      :modal-info="articleDeleteInfo"
    />
  </div>
</template>

<script>
import ArticleDelete from '../../modal/ModalDelete.vue';

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        text: "Nom de l'article",
        align: 'start',
        sortable: false,
        value: 'article.title',
      },
      { 
        text: 'Date de sortie', 
        value: 'article.event_at',
        sortable: false,
        align: 'center' 
      },
      {
        text: 'Modifier/Supprimer',
        value: 'actions',
        sortable: false,
        align: 'end'
      },
    ],
    articles: [],
    errorAlert: false,
    successAlert: false,
    articleDeletedId: null,
    articleDeleteInfo: {
      modalTitle: "Suppression d'un article",
      modalText: 'Souhaitez-vous réellement supprimer cette article ? Une fois cela fait, il ne sera plus possible de le récupérer !'
    },
    showModal: false,
    articleIdSelectedForDelete: null,
    
  }),
  components: {
    ArticleDelete,
  },
  mounted() {
    this.findArticle();
  },
  methods: {
    findArticle() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "articles").then(response => {
        this.articles = response.data; 
      });
    },
    redirectToArticle(articleId) {
      this.$store.commit("articleId", articleId);
      this.$router.push({ name: 'ModifyArticle', params: { id: articleId } });
    },
    openModal(articleId) {
      this.articleIdSelectedForDelete = articleId;
      this.showModal = true;
    },
    manageDeletedArticle() {
      this.successAlert = true;
      this.findArticle();
    },
    deleteArticle(articleId) {
      let config = {
        method: 'delete',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'articles/' + articleId,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        }
      };

      this.$axios(config).then(response => {
        console.log(response.status);
        if (response.status === 204) this.manageDeletedArticle();
      }).catch(error => {
        console.log(error);
        this.errorAlert = true;
      });
    }
  }
}
</script>


<style>
.all-article-admin {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.all-article-admin h2 {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.admin-alert {
  width: 80%;
}

.all-article-admin-list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
}

.all-article-table {
  width: 100%;
}

</style>

