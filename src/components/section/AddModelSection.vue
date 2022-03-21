<template>
  <div class="add-model">
    <h2>Add model</h2>
    <v-card class="model-form">
      <h3>Model information</h3>
      <label for="firstname">Firstname :</label>
      <input type="text" name="firstname" ref="firstname">
      <label for="lastname">Lastname :</label>
      <input type="text" name="lastname" ref="lastname">
      <label for="email">Email :</label>
      <input type="email" name="email" ref="email">
      <label for="phone">Phone number :</label>
      <input type="number" name="phone" ref="phone">
      <label for="address">Address :</label>
      <input type="text" name="address" ref="address">
      <label for="birthdate">Birth date :</label>
      <input type="date" name="birthdate" ref="birthdate">
    </v-card>
    <v-card class="model-form">
      <h3>Model measurement</h3>
      <label for="size">Size :</label>
      <input type="number" name="size" ref="size">
      <label for="weight">Weight :</label>
      <input type="number" name="weight" ref="weight">
      <label for="chest">Chest :</label>
      <input type="number" name="chest" ref="chest">
      <label for="waist">Waist :</label>
      <input type="number" name="waist" ref="waist">
      <label for="hips">Hips :</label>
      <input type="number" name="hips" ref="hips">
      <label for="shoes">Shoe size :</label>
      <input type="number" name="shoes" ref="shoes">
      <label for="color">Color :</label>
      <input type="text" name="color" ref="color">
      <label for="haircolor">Hair color :</label>
      <input type="text" name="haircolor" ref="haircolor">
      <label for="atrological">Astrological :</label>
      <input type="text" name="astrological" ref="astrological">
      <label for="description">Description :</label>
      <textarea name="description" ref="description"></textarea>
    </v-card>
    <v-card class="model-form">
      <h3>Model social network</h3>
      <label for="instagram">Instagram :</label>
      <input type="text" name="instagram" ref="instagram">
      <label for="facebook">Facebook :</label>
      <input type="text" name="facebook" ref="facebook">
      <label for="snapchat">Snapchat :</label>
      <input type="text" name="snapchat" ref="snapchat">
      <label for="tiktok">Tiktok :</label>
      <input type="text" name="tiktok" ref="tiktok">
      <label for="twitter">Twitter :</label>
      <input type="text" name="twitter" ref="twitter">
    </v-card>
    <v-card class="model-form">
      <h3>Model pictures</h3>
      <label for="mainpicture">Main picture :</label>
      <input type="file" name="mainpicture" accept="image/*" ref="mainpicture">
      <label for="pictures">Pictures :</label>
      <input type="file" name="pictures" multiple="multiple" ref="pictures">
    </v-card>
    <div class="model-form-btn">
      <v-btn text @click="sendModel()">Send</v-btn>
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
    modelNetwork: null,
    dataMainPicture: null
  }),
  methods: {
    // TODO: manage emprty value
    sendModel() {
      this.manageModelInfo();
      this.manageModelMeasurement();
      this.manageModelNetwork();
      // this.manageModelMainPicture();
      // this.manageModelPictures();
      this.sendAllModelData();
    },
    manageModelInfo() {
      this.modelInfo = {
        firstname: this.$refs.firstname.value,
        lastname: this.$refs.lastname.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        address: this.$refs.address.value,
        birth_date: this.$refs.birthdate.value
      }
      // console.log(this.modelInfo);
    },
    manageModelMeasurement() {
      this.modelMeasurement = {
        size: this.$refs.size.value,
        weight: this.$refs.weight.value,
        chest: this.$refs.chest.value,
        waist: this.$refs.waist.value,
        hips: this.$refs.hips.value,
        shoe_size: this.$refs.shoes.value,
        color: this.$refs.color.value,
        hair_color: this.$refs.haircolor.value,
        astrological: this.$refs.astrological.value,
        description: this.$refs.description.value
      }
      // console.log(this.modelMeasurement);
    },
    manageModelNetwork() {
      this.modelNetwork = {
        instagram: this.$refs.instagram.value,
        facebook: this.$refs.facebook.value,
        snapchat: this.$refs.snapchat.value,
        tiktok: this.$refs.tiktok.value,
        twitter: this.$refs.twitter.value
      }
      // console.log(this.modelNetwork);
    },
    manageModelMainPicture() {
      let picture = this.$refs.mainpicture.files[0];
      let reader = new FileReader();
      let dataPicture = [];
      reader.readAsDataURL(picture);
      reader.onload = () => {
        dataPicture.push(reader.result);
      }
      // console.log("main picture : ");
      // console.log(dataPicture);
    },
    manageModelPictures() {
      let pictures = this.$refs.pictures.files;
      let allDataPictures = [];
      for (let i = 0; i < pictures.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(pictures[i]);
        reader.onload = () => {
          allDataPictures.push(reader.result);
        }
      }
      // console.log("all picture :");
      // console.log(allDataPictures);
    },
    sendAllModelData() {
      let modelData = {
        model: this.modelInfo,
        model_info: this.modelMeasurement,
        model_network: this.modelNetwork
      }
      console.log(modelData);
    }
  }
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
