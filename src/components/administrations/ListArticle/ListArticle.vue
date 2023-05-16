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
        La suppression du modèle {{ modelDeletedId }} n'a pas fonctionner !
      </v-alert>
      <v-alert
        dense
        text
        dismissible
        elevation="15"
        type="success"
        v-model="successAlert"
      >
        Le modèle {{ modelDeletedId }} à bien été supprimer !
      </v-alert>
    </div>
    <div class="all-article-admin-list">
      <v-data-table
        :headers="headers"
        :items="articles"
        :items-per-page="5"
        class="elevation-5 all-article-table"
      >
        <template item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="redirectToModel(item.model.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="openModal(item.model.id)"
          >
            mdi-delete
          </v-icon>
        </template>  
      </v-data-table>
    </div>
    <ModalDelete
      v-model="showModal"
      @accept="deleteModel(modelIdSelectedForDelete)"
      :modal-info="modalDeleteInfo"
    />
  </div>
</template>

<script>
import ModalDelete from '../../modal/ModalDelete.vue';



export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
          {
            text: "Nom de l'article",
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Date de sortie', value: 'date' },
          
        ],
        articles: [
          {
            name: 'Haloween',
            date: '01/10/23',
           
          },
          {
            name: 'Saint silvestre',
            date: '11/10/23',
           
          },
          {
            name: 'Paques',
            date: '21/10/23',
           
          },
          {
            name: 'Noel',
            date: '12/10/23',
           
          },
          {
            name: "Jour de l'an",
            date: '05/10/23',
            
          }
         
         
        ],
     
      errorAlert: false,
    successAlert: false,
    modelDeletedId: null,
    modalDeleteInfo: {
      modalTitle: "Suppression d'un modèle",
      modalText: 'Souhaitez vous réellement supprimer ce modèle ? Une fois cela fait il ne sera plus possible de la récupérer !'
    },
  }),
   
    components: {
      ModalDelete,
   
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
.custom-title-table {
  text-align: center;
    font-size: 1.5rem;
    color: black;
}

.admin-alert {
  width: 80%;
}

.all-article-admin-list {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.all-article-table {
  width: 100%;
}
</style>