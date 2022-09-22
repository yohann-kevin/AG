<template>
  <div class="page-prices">
    <h2>Nos tarifs</h2>
    <v-card
      elevation="8"
      shaped
      class="pack-bronze"
    >
      <v-card-title>
        <v-icon
          large
          left
          class="bronze-star"
        >
          mdi-star-check
        </v-icon>
        <span class="text-h6 font-weight-light">Modèle Bronze</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          T7 : 98,55 € 
        </div>
        Les modèles T7 sont tous les modèles qui n'ont encore jamais travaillé sur AG Scouting.
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        Bientôt disponible
      </v-btn>
    </v-card>

    <v-card
      elevation="8"
      shaped
      class="pack-silver"
    >
      <v-card-title>
        <v-icon
          large
          left
          class="silver-star"
        >
          mdi-star-check
        </v-icon>
        <span class="text-h6 font-weight-light">Modèle Silver</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          T8 : 114,80 € 
        </div>
        Les modèles T8 ont déjà travaillé contre une rémunération avec AG Scouting pour un client.
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        Bientôt disponible
      </v-btn>
    </v-card>
    
    <div class="page-prices-partie-2">
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
          <span class="text-h6 font-weight-light">Modèle Gold</span>
        </v-card-title>

        <v-card-text class="font-weight-bold">
          <div class="my-4 text-subtitle-1">
            T9 : 151,15 € 
          </div>
          Les T9 sont des modèles qui ont déjà travaillé à l'international pour des clients de AG Scouting.
        </v-card-text>

        <v-btn
          color="black lighten-2"
          text
          class="pack-btn"
        >
          Bientôt disponible
        </v-btn>
      </v-card>
      <v-card
        elevation="8"
        shaped
        class="pack-diamond"
      >
        <v-card-title>
          <v-icon
            large
            left
            class="diamond-star"
          >
            mdi-star-check
          </v-icon>
          <span class="text-h6 font-weight-light">Modèle Diamond</span>
        </v-card-title>

        <v-card-text class="font-weight-bold">
          <div class="my-4 text-subtitle-1">
            T10 : 188,65 € 
          </div>
          Les T10 sont des modèles reconnus et ayant déjà une forte expérience en France ou à l'international.
        </v-card-text>
        <v-btn
          color="black lighten-2"
          text
          class="pack-btn"
        >
          Bientôt disponible
        </v-btn>
      </v-card>
    </div>

    <v-alert
      class="message-warning"
      dense
      text
      elevation="15"
      type="warning"
    >
      Les frais de déplacement et d'hébergements seront à votre charge si nécessaire.
    </v-alert>

    <v-alert
      class="message-warning"
      dense
      text
      elevation="15"
      type="warning"
    >
      Afin de maintenir la qualité de notre offre des frais de service sont à prévoir.
    </v-alert>
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

.page-prices-partie-2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
}

.page-prices h2 {
  width: 100%;
  text-align: center;
  margin:20px;
}

.bronze-star {
  color: #b07504;
}
.silver-star {
  color: #B2BEB5;
}
.gold-star {
  color:#f4cd2a ;
}
.diamond-star {
  color: #00a0ff;
}

.pack-bronze,
.pack-silver,
.pack-gold,
.pack-diamond
 {
  width: 41%;
}

.pack-btn {
  margin: 10px;
}

.page-prices-partie-2,
.message-warning {
 margin-bottom: 40px;
}

.message-warning {
 width: 80%;
 margin: 15px;
 text-align: center;
}

@media only screen and (max-width: 768px) {
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

  .pack-bronze,
  .pack-silver,
  .pack-gold,
  .pack-diamond,
  .message-warning {
    width: 90%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .gold-star {
    color: #FFD700;
  }

  .pack-btn {
    margin: 10px;
  }

  .page-prices-partie-2 {
    margin: 0;
  }
}
</style>
