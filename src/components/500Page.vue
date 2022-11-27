<template>
  <div class="page-error">
    <h2>Erreur 500</h2>
    <p>Nos services sont momentanément indisponibles.</p>
    <p>Veuillez nous excuser pour la gêne occasionnée.</p>
  </div>
</template>

<script>
export default {
 name: "500Page"
}
</script>

<style scoped>
.page-error {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.page-error h2 {
  width: 100%;
  text-align: center;
  margin: 15px;
}

.page-error p {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}
</style>
