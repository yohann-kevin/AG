<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(article, i) in articles"
      :key="i"
    >
      <img
        :src="article.src"
        alt="Image"
      >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import utils from '../../utils/utils.js';

export default {
  name: "IntroductionSection",
  data() {
    return {
      articles: [
        {
          src: utils.formatImageSource('/public/assets/ag-team.jpg')
        },
        {
          src: utils.formatImageSource('/public/assets/ag-team-five.jpg')
        },
        {
          src: utils.formatImageSource('/public/assets/logo-ag.png')
        }
      ]
    };
  }
}
</script>


<style scoped>
.text-container {
  margin-top: 200px;
  padding-top: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.ag-title {
  font-size: 9rem;
  font-weight: 400;
  margin-top: 35px;
  margin-bottom: -10px;
}

@media only screen and (max-width: 768px) {
  .ag-title {
    font-size: 5rem;
    margin-top: 0;

  }

  .img-header {
    display: none;
  }
}
</style>
