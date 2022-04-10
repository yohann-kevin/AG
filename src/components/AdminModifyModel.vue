<template>
  <div class="admin-update-model-page" v-if="dataLoaded">
    <h2>Modify model</h2>
    <v-card class="model-form">
      <h3>Model information</h3>
      <label for="firstname">Firstname :</label>
      <input type="text" name="firstname" ref="firstname" :value="model.firstname">
      <label for="lastname">Lastname :</label>
      <input type="text" name="lastname" ref="lastname" :value="model.lastname">
      <label for="email">Email :</label>
      <input type="email" name="email" ref="email" :value="model.email">
      <label for="phone">Phone number :</label>
      <input type="number" name="phone" ref="phone" :value="model.phone">
      <label for="address">Address :</label>
      <input type="text" name="address" ref="address" :value="model.address">
      <label for="birthdate">Birth date :</label>
      <input type="date" name="birthdate" ref="birthdate" :value="manageModelBirthDateFormat(model.birth_date)">
      <label for="sexe">Sexe : </label>
      <select name="sexe" ref="sexe" :value="model.sexe">
        <option value="men">Men</option>
        <option value="woman">Woman</option>
      </select>
    </v-card>
    <v-card class="model-form">
      <h3>Model measurement</h3>
      <label for="size">Size :</label>
      <input type="number" name="size" ref="size" :value="modelInfo.size">
      <label for="weight">Weight :</label>
      <input type="number" name="weight" ref="weight" :value="modelInfo.weight">
      <label for="chest">Chest :</label>
      <input type="number" name="chest" ref="chest" :value="modelInfo.chest">
      <label for="waist">Waist :</label>
      <input type="number" name="waist" ref="waist" :value="modelInfo.waist">
      <label for="hips">Hips :</label>
      <input type="number" name="hips" ref="hips" :value="modelInfo.hips">
      <label for="shoes">Shoe size :</label>
      <input type="number" name="shoes" ref="shoes" :value="modelInfo.shoe_size">
      <label for="color">Color :</label>
      <input type="text" name="color" ref="color" :value="modelInfo.color">
      <label for="haircolor">Hair color :</label>
      <input type="text" name="haircolor" ref="haircolor" :value="modelInfo.hair_color">
      <label for="eyes">Eyes :</label>
      <input type="text" name="eyes" ref="eyes" :value="modelInfo.eyes">
      <label for="atrological">Astrological :</label>
      <input type="text" name="astrological" ref="astrological" :value="modelInfo.astrological">
      <label for="description">Description :</label>
      <textarea name="description" ref="description" :value="modelInfo.description"></textarea>
    </v-card>
    <v-card class="model-form">
      <h3>Model social network</h3>
      <label for="instagram">Instagram :</label>
      <input type="text" name="instagram" ref="instagram" :value="modelNetwork.instagram">
      <label for="facebook">Facebook :</label>
      <input type="text" name="facebook" ref="facebook" :value="modelNetwork.facebook">
      <label for="snapchat">Snapchat :</label>
      <input type="text" name="snapchat" ref="snapchat" :value="modelNetwork.snapchat">
      <label for="tiktok">Tiktok :</label>
      <input type="text" name="tiktok" ref="tiktok" :value="modelNetwork.tiktok">
      <label for="twitter">Twitter :</label>
      <input type="text" name="twitter" ref="twitter" :value="modelNetwork.twitter">
    </v-card>
    <v-card class="model-form">
      <h3>Model pictures</h3>
      <!-- TODO: disable temporally manage main picture change -->
      <!-- <label for="mainpicture">Main picture :</label>
      <input type="file" name="mainpicture" accept="image/*" ref="mainpicture"> -->
      <label for="pictures">Pictures :</label>
      <input type="file" name="pictures" multiple="multiple" ref="pictures">
    </v-card>
    <div class="model-form-btn">
      <v-btn text>Send</v-btn>
      <v-btn text>Reset</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    modelId: "",
    dataLoaded: false,
    model: null,
    modelInfo: null,
    modelPictures: null,
    modelNetwork: null
  }),
  beforeMount() {
    this.modelId = this.$store.state.modelId;
    if (this.modelId === null) {
      this.$router.push({ path: "/administration/models" });
    } else {
      this.findModelData();
    }
  },
  methods: {
    findModelData() {
      this.$axios.get(process.env.VUE_APP_API_URL + "get/model/" + this.modelId).then(response => {
        console.log(response.data);
        this.model = response.data.model;
        this.modelInfo = response.data.model_infos;
        this.modelPictures = response.data.model_pictures;
        this.modelNetwork = response.data.model_networks;
        this.dataLoaded = true;
      });
    },
    manageModelBirthDateFormat(birthDate) {
      return this.$moment(birthDate).format("YYYY-MM-DD");
    }
  }
}
</script>

<style>
.admin-update-model-page {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.admin-update-model-page h2 {
  width: 100%;
  text-align: center;
}
</style>
