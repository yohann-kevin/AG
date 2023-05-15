<template>
  <div class="add-article">
    <h2>Modifier un article</h2>
    <v-card class="add-article-form">
      <h3>Information sur l'article</h3>
      <v-text-field
        label="Titre"
        color="black"
        prepend-icon="mdi-star"
        v-model="titre"
      />
  
      <v-textarea
        label="Description"
        color="black"
        prepend-icon="mdi-pencil"
        no-resize
        v-model="description"
      />
      <v-text-field
        label="Date de l'évenement"
        color="black"
        type="date"
        prepend-icon="mdi-calendar"
        v-model="date"
      />
      <v-file-input
        label="Photo principale :"
        color="black"
        prepend-icon="mdi-camera-image"
        accept="image/*"
        v-model="mainpicture"
      />
      <v-file-input
        label="Photos :"
        color="black"
        prepend-icon="mdi-image-multiple"
        multiple
        accept="image/*"
        v-model="pictures"
      />
    </v-card>
    <div class="model-form-btn">
      <div class="add-model-alert">
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="error"
          v-model="errorAlert"
          class="add-article-v-alert"
        >
          L'ajout de l'article n'a pas fonctionner !
        </v-alert>
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="success"
          v-model="successAlert"
          class="add-article-v-alert"
        >
          L'article à bien été ajouter !
        </v-alert>
  
        <v-progress-circular
          :size="90"
          color="black"
          indeterminate
          class="is-in-load"
          v-if="isInLoad"
          :width="8"
        />
      </div>
  
      <v-btn
        text
        @click="sendModel()"
      >
        Ajouter
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
  </div>
</template>
<script>
import ModifyPicture from './section/ModifyPicture.vue';
import AddPicture from './section/AddPicture.vue';
export default {
    data: () => ({
   
   titre: "",
   description: "",
   date: "",
   mainpicture: null,
   pictures: null,
   articleInfo: null,
   errorAlert: false,
   successAlert: false,
   isInLoad: false,
   dataMainPicture: [],
   dataPictures: []
 }),