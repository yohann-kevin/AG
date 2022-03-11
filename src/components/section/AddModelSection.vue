<template>
  <div class="add-model">
    <h2>Add model</h2>
    <v-card class="model-form">
      <h3>Model information</h3>
      <label for="firstname">Firstname :</label>
      <input type="text" name="firstname">
      <label for="lastname">Lastname :</label>
      <input type="text" name="lastname">
      <label for="email">Email :</label>
      <input type="email" name="email">
      <label for="phone">Phone number :</label>
      <input type="number" name="phone">
      <label for="address">Address :</label>
      <input type="text" name="address">
      <label for="birthdate">Birth date :</label>
      <input type="date" name="birthdate">
    </v-card>
    <v-card class="model-form">
      <h3>Model measurement</h3>
      <label for="size">Size :</label>
      <input type="number" name="size">
      <label for="weight">Weight :</label>
      <input type="number" name="weight">
      <label for="color">Color :</label>
      <input type="text" name="color">
      <label for="haircolor">Hair color :</label>
      <input type="text" name="haircolor">
      <label for="atrological">Astrological :</label>
      <input type="text" name="astrological">
      <label for="description">Description :</label>
      <textarea name="description"></textarea>
    </v-card>
    <v-card class="model-form">
      <h3>Model social network</h3>
      <label for="instagram">Instagram :</label>
      <input type="text" name="instagram">
      <label for="facebook">Facebook :</label>
      <input type="text" name="facebook">
      <label for="snapchat">Snapchat :</label>
      <input type="text" name="snapchat">
      <label for="tiktok">Tiktok :</label>
      <input type="text" name="tiktok">
      <label for="twitter">Twitter :</label>
      <input type="text" name="twitter">
    </v-card>
    <v-card class="model-form">
      <h3>Model pictures</h3>
      <label for="mainpicture">Main picture :</label>
      <input type="file" name="mainpicture">
      <label for="pictures">Pictures :</label>
      <input type="file" name="pictures" multiple="multiple">
    </v-card>
    <div class="model-form-btn">
      <v-btn text>Send</v-btn>
      <v-btn text>Reset</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModelSection',
  data: () => ({
    modelInfo: null,
    modelMeasurement: null,
    modelNetwork: null
  }),
}
</script>

<style>
.add-model {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.add-model h2 {
  width: 100%;
  margin: 10px;
  text-align: center;
}

.model-form {
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}

.model-form h3 {
  width: 100%;
  text-align: center;
}

.model-form label {
  width: 100%;
  text-align: center;
}

.model-form input {
  width: 40%;
  height: 30px;
  margin: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  outline: none;
  padding: 5px;
  transition: 0.5s;
}

.model-form textarea {
  width: 60%;
  height: 70px;
  margin: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  outline: none;
  padding: 5px;
  transition: 0.5s;
}

.model-form input:hover, .model-form textarea:hover {
  border-radius: 0px;
  outline: none;
}

.model-form-btn {
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
</style>
