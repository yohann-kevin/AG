<template>
  <div class="add-model">
    <h2>Ajout d'un modèle</h2>
    <v-card class="model-form">
      <h3>Information du modèle</h3>
      <label for="firstname">Prénom :</label>
      <input type="text" name="firstname" ref="firstname">
      <label for="lastname">Nom :</label>
      <input type="text" name="lastname" ref="lastname">
      <label for="email">Email :</label>
      <input type="email" name="email" ref="email">
      <label for="phone">Numéro de téléphone :</label>
      <input type="number" name="phone" ref="phone">
      <label for="address">Adresse :</label>
      <input type="text" name="address" ref="address">
      <label for="birthdate">Date de naissance :</label>
      <input type="date" name="birthdate" ref="birthdate">
      <label for="sexe">Sexe : </label>
      <select name="sexe" ref="sexe">
        <option value="men">Homme</option>
        <option value="woman">Femme</option>
      </select>
    </v-card>
    <v-card class="model-form">
      <h3>Mensuration du modèle</h3>
      <label for="size">Hauteur :</label>
      <input type="number" name="size" ref="size">
      <label for="weight">Poids :</label>
      <input type="number" name="weight" ref="weight">
      <label for="chest">Poitrine :</label>
      <input type="number" name="chest" ref="chest">
      <label for="waist">Taille :</label>
      <input type="number" name="waist" ref="waist">
      <label for="hips">Hanche :</label>
      <input type="number" name="hips" ref="hips">
      <label for="shoes">Pointure :</label>
      <input type="number" name="shoes" ref="shoes">
      <label for="color">Couleur de peau :</label>
      <input type="text" name="color" ref="color">
      <label for="haircolor">Couleur de cheveux :</label>
      <input type="text" name="haircolor" ref="haircolor">
      <label for="eyes">Yeux :</label>
      <input type="text" name="eyes" ref="eyes">
      <label for="atrological">Signe astrologique :</label>
      <input type="text" name="astrological" ref="astrological">
      <label for="description">Petite description :</label>
      <textarea name="description" ref="description"></textarea>
    </v-card>
    <v-card class="model-form">
      <h3>Réseaux sociaux du modèle</h3>
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
      <h3>Photo du modèle</h3>
      <label for="mainpicture">Photo principale :</label>
      <input type="file" name="mainpicture" accept="image/*" ref="mainpicture">
      <label for="pictures">Photos :</label>
      <input type="file" name="pictures" multiple="multiple" ref="pictures">
    </v-card>
    <div class="model-form-btn">

      <div class="add-model-alert">
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="error"
          v-model="errorAlert"
        >
          L'ajout du modèle n'a pas fonctionner !
        </v-alert>
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="success"
          v-model="successAlert"
        >
          Le modèle à bien été ajouter !
        </v-alert>
      </div>

      <v-btn text @click="sendModel()">Ajouter</v-btn>
      <v-btn text>Annuler</v-btn>
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
    dataMainPicture: [],
    dataPictures: [],
    errorAlert: true,
    successAlert: false
  }),
  methods: {
    // TODO: manage empty value
    sendModel() {
      this.manageModelInfo();
      this.manageModelMeasurement();
      this.manageModelNetwork();
      this.sendModelData();
    },
    manageModelInfo() {
      this.modelInfo = {
        firstname: this.$refs.firstname.value,
        lastname: this.$refs.lastname.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        address: this.$refs.address.value,
        birth_date: this.$refs.birthdate.value,
        sexe: this.$refs.sexe.value
      }
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
        eyes: this.$refs.eyes.value,
        astrological: this.$refs.astrological.value,
        description: this.$refs.description.value
      }
    },
    manageModelNetwork() {
      this.modelNetwork = {
        instagram: this.$refs.instagram.value,
        facebook: this.$refs.facebook.value,
        snapchat: this.$refs.snapchat.value,
        tiktok: this.$refs.tiktok.value,
        twitter: this.$refs.twitter.value
      }
    },
    async manageModelMainPicture() {
      let picture = this.$refs.mainpicture.files[0];
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
      this.dataMainPicture.push(await toBase64(picture));
    },
    async manageModelPictures() {
      let pictures = this.$refs.pictures.files;

      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      for (let i = 0; i < pictures.length; i++) {
        this.dataPictures.push(await toBase64(pictures[i]));
      }
    },
    async sendModelData() {
      await this.manageModelMainPicture();
      await this.manageModelPictures();

      let modelData = {
        model: this.modelInfo,
        model_info: this.modelMeasurement,
        model_network: this.modelNetwork,
        main_picture: this.dataMainPicture,
        all_pictures: this.dataPictures
      };

      let config = {
        method: 'post',
        url: process.env.VUE_APP_API_URL + 'create/model',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : modelData
      };

      this.$axios(config).then(response => {
        console.log(response.data);
        this.successAlert = true;
      }).catch(error => {
        this.errorAlert = true;
        console.log(error);
      });
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

.model-form input, .model-form select {
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

.model-form option {
  text-align: center;
}

.model-form input:hover, .model-form textarea:hover {
  border-radius: 0px;
  outline: none;
}

.add-model-alert {
  width: 100%;
}

.model-form-btn {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
}
</style>
