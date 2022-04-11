<template>
  <v-parallax
    dark
    src="../../assets/ag-team-three.jpg"
    contain
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h4 class="text-h4">
          Un projet qui nécessite des modèles uniques ? <br/> Faites confiance à
        </h4>
        <h1 class="mb-4 creattion ag-title">
          AG Scouting
        </h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "IntroductionSection"
}
</script>

<style scoped>
.ag-title {
  margin-top: 35px;
  font-size: 9rem;
  font-weight: 400;
}

@media only screen and (max-width: 768px) {
  .ag-title {
    font-size: 5rem;
    margin-top: 0;
  }
}
</style>
