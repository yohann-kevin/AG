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
        La suppression du modèle {{ articleDeletedId }} n'a pas fonctionné !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
      >
        Le modèle {{ articleDeletedId }} a bien été supprimé !
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
      :article-info="articleDeleteInfo"
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
      articleTitle: "Suppression d'un article",
      articleText: 'Souhaitez-vous réellement supprimer cette article ? Une fois cela fait, il ne sera plus possible de le récupérer !'
    },
    showModal: false,
    articleIdSelectedForDelete: null,
    
  }),
  components: {
    ArticleDelete,
  },
  beforeMount() {
    let ArticleOnStore = this.$store.state.homeArticleData;
    // check if model is save on store
    ArticleOnStore != null ? this.articles.push(...ArticleOnStore) : this.findArticle();
  },
  methods: {
    findArticle() {
      // eslint-disable-next-line no-undef
      this.$axios.get(process.env.VUE_APP_API_URL + "get/all/article").then(response => {
        this.article = [];
        this.article.push(...response.data);
        this.$store.commit("homeArticleData", this.articles);
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
    manageDeletedArticle(deleteInfo) {
      this.articleDeletedId = deleteInfo.articleId;
      if (deleteInfo.isDelete) {
        this.successAlert = true;
        this.findArticle();
      } else {
        this.errorAlert = true;
      }
    },
    deleteModel(articleId) {
      let config = {
        method: 'delete',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'delete/articles/?id=' + articleId,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) this.manageDeletedArticle({ isDelete: response.data.article_deleted, articleId });
      }).catch(error => {
        this.$emit('deleted', { isDelete: false, articleId });
        console.log(error);
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

