<template>
  <div class="single-model-page">
    <div class="single-model-info">
      <h2>Lastname Firstname</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus adipisci, assumenda veniam ab earum?
      </p>
      <ul class="model-measurement">
        <li><span class="measurement-name">Hauteur :</span> 168 cm</li>
        <li><span class="measurement-name">Poids :</span> 60 kg</li>
        <li><span class="measurement-name">Poitrine :</span> 79 cm</li>
        <li><span class="measurement-name">Taille :</span> 61 cm</li>
        <li><span class="measurement-name">Hanche :</span> 86 cm</li>
        <li><span class="measurement-name">Pointure :</span> 36</li>
        <li><span class="measurement-name">Cheveux :</span> Brun</li>
        <li><span class="measurement-name">Yeux :</span> Bleu</li>
        <li><span class="measurement-name">Signe astrologique :</span> Lion</li>
      </ul>
      <div class="single-model-btn">
        <v-btn text><router-link to="/">Retour</router-link></v-btn>
        <v-btn text><router-link to=/contact>Contacter</router-link></v-btn>
      </div>
    </div>
    <div class="single-model-image">
      <img src="../assets/model-test.jpg" class="image-model" alt="">
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
.single-model-page {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  font-style: italic;
}

.single-model-info {
  width: 30%;
}

.single-model-info h2 {
  padding: 8px;
  font-size: 1.3em;
}

.single-model-info p {
  padding: 8px;
  font-weight: 300;
}

.model-measurement {
  list-style-type: none;
}

.measurement-name {
  font-weight: bold;
}

.single-model-image {
  width: 50%;
  display: flex;
}

.image-model {
  width: 100%;
  border-radius: 4px;
}

.single-model-btn {
  margin-top: 90px;
}

.single-model-btn a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
