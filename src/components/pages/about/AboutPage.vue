<template>
  <div class="page-prices">
    <!-- about -->
    <h2>A propos</h2>
    <div class="about-section">
      <p>
        Notre équipe vous propose des <span class="about-strong">Mannequins / Photographes / Studios</span> photos en région bretonne ainsi que  parisienne  
        pour lancer votre campagne publicitaire et vous suivre jusqu’au bout de vos ambitions.
      </p>
      <p>
        En reprenant les valeurs <span class="about-strong">votre identité de marque</span>, nous vous accompagnons dans vos projets de communications 
        afin de renforcer votre empreinte, unique soit-elle.
      </p>
    </div>
    <!-- model -->
    <h2>Nos modèles</h2>
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
        <span class="text-h6 font-weight-light">Modèle T7</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        Les T7 sont des modèles qui n'ont encore jamais travaillé avec AG Scouting.
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        <router-link to="/contact">
          Contactez-nous
        </router-link>
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
        <span class="text-h6 font-weight-light">Modèle T8</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        Les T8 sont des modèles qui ont déjà travaillé avec AG Scouting en France.
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        <router-link to="/contact">
          Contactez-nous
        </router-link>
      </v-btn>
    </v-card>
    
    <div class="page-prices-section">
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
          <span class="text-h6 font-weight-light">Modèle T9</span>
        </v-card-title>

        <v-card-text class="font-weight-bold">
          Les T9 sont des modèles qui ont déjà travaillé avec AG Scouting à l’international.
        </v-card-text>

        <v-btn
          color="black lighten-2"
          text
          class="pack-btn"
        >
          <router-link to="/contact">
            Contactez-nous
          </router-link>
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
          <span class="text-h6 font-weight-light">Modèle T10</span>
        </v-card-title>

        <v-card-text class="font-weight-bold">
          Les T10 sont des modèles reconnus et ayant déjà une forte expérience en France ou à l'international.
        </v-card-text>
        <v-btn
          color="black lighten-2"
          text
          class="pack-btn"
        >
          <router-link to="/contact">
            Contactez-nous
          </router-link>
        </v-btn>
      </v-card>
    </div>
    <!-- service -->
    <h2>Autre services</h2>
    <v-card
      elevation="8"
      shaped
      class="pack-bronze"
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-camera
        </v-icon>
        <span class="text-h6 font-weight-light">Photographes</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          AG-Scouting propose aussi un service de shooting avec nos photographes expert dans le domaine.
        </div>
        - Nathan FRETUN <br>
        - Alexis BOGROFF
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        <router-link to="/contact">
          Contactez-nous
        </router-link>
      </v-btn>
    </v-card>
    <v-card
      elevation="8"
      shaped
      class="pack-bronze"
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-camera-image
        </v-icon>
        <span class="text-h6 font-weight-light">Studios</span>
      </v-card-title>

      <v-card-text class="font-weight-bold">
        <div class="my-4 text-subtitle-1">
          AG-Scouting dispose aussi de plusieurs studio de shooting permettant de répondre à tous vos besoins. 
        </div>
        - En région parisienne <br>
        - En région bretagne
      </v-card-text>

      <v-btn
        color="black lighten-2"
        text
        class="pack-btn"
      >
        <router-link to="/contact">
          Contactez-nous
        </router-link>
      </v-btn>
    </v-card>
    <!-- presentation -->
    <PresentationSection />
  </div>
</template>

<script>
import PresentationSection from '../../section/PresentationSection.vue';

export default {
  name: 'AboutPage',
  data: () => ({
  }),
  components: {
    PresentationSection
  }
}
</script>

<style scoped>
.about-section {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.about-section p {
  width: 80%;
  font-size: 1.1rem;
  text-align: center;
}

.about-strong {
  font-weight: bold;
}

.page-prices {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
}

.page-prices-section {
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

.pack-btn a {
  color: #000;
  text-decoration: none;
}

.page-prices-section,
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

  .page-prices-section {
    margin: 0;
  }
}
</style>
