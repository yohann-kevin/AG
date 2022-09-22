<template>
  <v-img
    dark
    src="../../assets/ag-team-five.jpg"
    class="img-header"
    height="700"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center text-container"
        cols="8"
      >
        <h4 class="text-h4 intro-title">
          <p>Un projet qui nécessite des modèles uniques ?<br> Faites confiance à</p>
        </h4>
        <h1 class="mb-4 creattion ag-title">
          AG Scouting
        </h1>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
  name: "IntroductionSection"
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
