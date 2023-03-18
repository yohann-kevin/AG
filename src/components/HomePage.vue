<template>
  <div>
    <IntroductionSection />
    <div class="ag-logo-container">
      <v-img
        alt="AG Scouting"
        class="ag-logo"
        contain
        :src="formatImageSource('/public/assets/ag-big-logo.jpeg')"
        transition="scale-transition"
        width="400px"
        height="400px"
      />
    </div>
    <div class="home-section">
      <p>
        Notre équipe vous propose des <span class="home-strong">Mannequins / Photographes / Studios</span> photos en région bretonne ainsi que  parisienne  
        pour lancer votre campagne publicitaire et vous suivre jusqu’au bout de vos ambitions.
      </p>
      <p>
        En reprenant les valeurs de <span class="home-strong">votre identité de marque</span>, 
        nous vous accompagnons dans vos projets de communication afin de 
        renforcer votre empreinte, unique soit-elle.
      </p>
    </div>
    <ModelSection />
  </div>
</template>

<script>
import IntroductionSection from "./section/IntroductionSection.vue";
import ModelSection from "./section/ModelSection.vue";

import formatImageSource from '../utils/utils.js';

export default {
  name: "HomePage",
  components: {
    IntroductionSection,
    ModelSection
  },
  data: () => ({
   formatImageSource: formatImageSource
  }),
}
</script>

<style scoped>
.ag-logo-container {
  display: none;
}

.home-section {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.home-section p {
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  margin: 15px;
  padding: 15px;
}

.home-strong {
  font-weight: bold;
}

@media only screen and (max-width: 768px) {
  .home-section p {
    width: 100%;
    font-size: 1.2rem;
  }

  .ag-logo-container {
    display: initial;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ag-logo {
    margin-top: 10px;
  }
}
</style>
