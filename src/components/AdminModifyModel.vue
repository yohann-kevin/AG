<template>
  <div class="admin-update-model-page" v-if="dataLoaded">
    <h2>Modifier le modèle</h2>
    <v-card class="model-form">
      <h3>information du modèle</h3>
      <label for="firstname">Prénom :</label>
      <input type="text" name="firstname" ref="firstname" :value="model.firstname">
      <label for="lastname">Nom :</label>
      <input type="text" name="lastname" ref="lastname" :value="model.lastname">
      <label for="email">Email :</label>
      <input type="email" name="email" ref="email" :value="model.email">
      <label for="phone">Numéro de téléphone :</label>
      <input type="number" name="phone" ref="phone" :value="model.phone">
      <label for="address">Addresse :</label>
      <input type="text" name="address" ref="address" :value="model.address">
      <label for="birthdate">Date de naissance :</label>
      <input type="date" name="birthdate" ref="birthdate" :value="manageModelBirthDateFormat(model.birth_date)">
      <label for="sexe">Sexe : </label>
      <select name="sexe" ref="sexe" :value="model.sexe">
        <option value="men">Homme</option>
        <option value="woman">Femme</option>
      </select>
    </v-card>
    <v-card class="model-form">
      <h3>Mensuration du modèle</h3>
      <label for="size">Hauteur :</label>
      <input type="number" name="size" ref="size" :value="modelInfo.size">
      <label for="weight">Poid :</label>
      <input type="number" name="weight" ref="weight" :value="modelInfo.weight">
      <label for="chest">Poitrine :</label>
      <input type="number" name="chest" ref="chest" :value="modelInfo.chest">
      <label for="waist">Taille :</label>
      <input type="number" name="waist" ref="waist" :value="modelInfo.waist">
      <label for="hips">Hanche :</label>
      <input type="number" name="hips" ref="hips" :value="modelInfo.hips">
      <label for="shoes">Pointure :</label>
      <input type="number" name="shoes" ref="shoes" :value="modelInfo.shoe_size">
      <label for="color">Couleur de peau :</label>
      <input type="text" name="color" ref="color" :value="modelInfo.color">
      <label for="haircolor">Couleur de cheuveux :</label>
      <input type="text" name="haircolor" ref="haircolor" :value="modelInfo.hair_color">
      <label for="eyes">Yeux :</label>
      <input type="text" name="eyes" ref="eyes" :value="modelInfo.eyes">
      <label for="atrological">Signe astrologique :</label>
      <input type="text" name="astrological" ref="astrological" :value="modelInfo.astrological">
      <label for="description">Petite description :</label>
      <textarea name="description" ref="description" :value="modelInfo.description"></textarea>
    </v-card>
    <v-card class="model-form">
      <h3>Réseaux sociaux du modèle</h3>
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
    <!-- <v-card class="model-form">
      <h3>Model pictures</h3>
      TODO: disable temporally manage main picture change
      <label for="mainpicture">Main picture :</label>
      <input type="file" name="mainpicture" accept="image/*" ref="mainpicture">
      <label for="pictures">Pictures :</label>
      <input type="file" name="pictures" multiple="multiple" ref="pictures">
    </v-card> -->
    <div class="model-form-btn">
      <div class="modify-model-alert">
        <v-alert
          ref="errorModifyModel"
          elevation="15"
          shaped
          type="error"
          :value="false"
        >
          La modification du modèle n'a pas fonctionner !
        </v-alert>

        <v-alert
          ref="successModifyModel"
          elevation="15"
          shaped
          type="success"
          :value="false"
        >
          Le modèle à bien été modifier !
        </v-alert>
      </div>

      <v-btn text @click="sendModel()">Modifier</v-btn>
      <v-btn text>Annuler</v-btn>
    </div>
    <ModifyPicture :pictures="modelPictures"/>
  </div>
</template>

<script>
import ModifyPicture from './section/ModifyPicture.vue';

export default {
  data: () => ({
    modelId: "",
    dataLoaded: false,
    model: null,
    modelInfo: null,
    modelPictures: null,
    modelNetwork: null
  }),
  components: {
    ModifyPicture,
  },
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
        this.model = response.data.model;
        this.modelInfo = response.data.model_infos;
        this.modelPictures = response.data.model_pictures;
        this.modelNetwork = response.data.model_networks;
        this.dataLoaded = true;
      });
    },
    manageModelBirthDateFormat(birthDate) {
      return this.$moment(birthDate).format("YYYY-MM-DD");
    },
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
    sendModelData() {
      let modelData = {
        model_id: this.modelId,
        model: this.modelInfo,
        model_info: this.modelMeasurement,
        model_network: this.modelNetwork
      };

      let config = {
        method: 'post',
        url: process.env.VUE_APP_API_URL + 'modify/model',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : modelData
      };

      this.$axios(config).then(response => {
        console.log(response.data);
        this.$refs.successModifyModel.vamue = true;
      }).catch(error => {
        this.$refs.errorModifyModel.vamue = true;
        console.log(error);
      });
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

.modify-model-alert {
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
