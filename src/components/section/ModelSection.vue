<template>
  <div class="model-section">
    <h2>Model section</h2>
    <div class="all-model">
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
      <ModelArticle/>
    </div>
  </div>
</template>

<script>
import ModelArticle from "./article/ModelArticle.vue";

export default {
  name: "ModelSection",
  components: {
    ModelArticle
  }
}
</script>

<style scoped>
.model-section {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.model-section h2 {
  width: 100%;
  text-align: center;
}

.all-model {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
