<template>
  <div class="page-prices">
    <h2>Nos tarifs</h2>
    <v-card
      elevation="8"
      shaped
      class="pack-sample"
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-star-check
        </v-icon>
        <span class="text-h6 font-weight-light">Pack simple</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          100 €
        </div>
        Vous pourrez prendre contact avec 5 modèles d'AG Scouting.
      </v-card-text>

      <v-btn color="black lighten-2" text class="pack-btn">
        Bientôt disponible
      </v-btn>
    </v-card>


    <v-card
      elevation="8"
      shaped
      class="pack-gold"
    >
      <v-card-title>
        <v-icon
          large
          left
          class="gold-star"
        >
          mdi-star-check
        </v-icon>
        <span class="text-h6 font-weight-light">Pack gold</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          300 €
        </div>
        Vous pourrez prendre contact avec 25 modèles d'AG Scouting.
      </v-card-text>

      <v-btn color="black lighten-2" text class="pack-btn">
        Bientôt disponible
      </v-btn>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'PricePage',

    data: () => ({
    }),
  }
</script>

<style scoped>
.page-prices {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.page-prices h2 {
  width: 100%;
  text-align: center;
  margin: 15px;
}

.pack-sample,
.pack-gold {
  width: 35%;
}

.gold-star {
  color: #FFD700;
}

.pack-btn {
  margin: 10px;
}

@media only screen and (max-width: 768px) {
  .pack-sample,
  .pack-gold {
    width: 80%;
    margin-bottom: 35px;
  }
}
</style>
