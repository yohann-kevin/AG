<template>
  <div class="modify-picture-section">
    <h2 class="mb-3">Modifier les images du modèles</h2>
    <v-card v-for="(picture, i) in pictures" :key="i" class="image-card">
      <v-img
        :src="picture.picture_path"
        height="250px"
      ></v-img>
      <v-btn
        class="ma-2"
        fab
        small
        :class="picture.main_picture ? 'gold-star' : ''"
      >
        <v-icon dark v-if="picture.main_picture">
          mdi-star
        </v-icon>
        <v-icon dark v-else>
          mdi-star-outline
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-2"
        fab
        dark
        small
        color="error"
      >
        <v-icon dark>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.pictures);
  }
}
</script>

<style scoped>
.modify-picture-section {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.image-card {
  width: 30%;
  margin-bottom: 40px;
}

.gold-star {
  color: #FFD700;
}
</style>
