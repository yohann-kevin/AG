<template>
  <div
    class="admin-update-model-page"
    v-if="dataLoaded"
  >
    <h2>Modifier le modèle</h2>
    <v-card class="model-form">
      <h3>information du modèle</h3>
      <v-text-field
        label="Prénom"
        color="black"
        prepend-icon="mdi-account"
        v-model="model.firstname"
      />

      <v-text-field
        label="Nom"
        color="black"
        prepend-icon="mdi-account"
        v-model="model.lastname"
      />

      <v-text-field
        label="Email"
        color="black"
        prepend-icon="mdi-email"
        v-model="model.email"
      />

      <v-text-field
        label="Numéro de téléphone"
        color="black"
        prepend-icon="mdi-phone"
        v-model="model.phone"
      />

      <v-text-field
        label="Adresse"
        color="black"
        prepend-icon="mdi-home-account"
        v-model="model.address"
      />

      <v-text-field
        label="Date de naissance"
        color="black"
        type="date"
        prepend-icon="mdi-cake-variant"
        v-model="model.birth_date"
      />
      <v-select
        label="Sexe"
        color="black"
        prepend-icon="mdi-gender-male-female"
        v-model="model.sexe"
        :items="sexes"
        item-text="text"
        item-value="value"
      />
      <v-select
        label="Niveau"
        color="black"
        prepend-icon="mdi-star"
        v-model="model.level"
        :items="levels"
        item-text="text"
        item-value="value"
      />
    </v-card>


    <v-card class="model-form">
      <h3>Mensuration du modèle</h3>
      <v-text-field
        label="Hauteur :"
        type="number"
        color="black"
        prepend-icon="mdi-ruler"
        v-model="modelInfo.size"
      />

      <v-text-field
        label="Poids :"
        type="number"
        color="black"
        prepend-icon="mdi-weight-kilogram"
        v-model="modelInfo.weight"
      />


      <v-text-field
        label="Poitrine :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="modelInfo.chest"
      />

      <v-text-field
        label="Taille :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="modelInfo.waist"
      />

      <v-text-field
        label="Hanche :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="modelInfo.hips"
      />

      <v-text-field
        label="Pointure :"
        type="number"
        color="black"
        prepend-icon="mdi-shoe-print"
        v-model="modelInfo.shoe_size"
      />

      <v-text-field
        label="Couleur de peau :"
        color="black"
        prepend-icon="mdi-palette"
        v-model="modelInfo.color"
      />

      <v-text-field
        label="Couleur de cheveux :"
        color="black"
        prepend-icon="mdi-palette"
        v-model="modelInfo.hair_color"
      />

      <v-text-field
        label="Couleur des yeux :"
        color="black"
        prepend-icon="mdi-eye"
        v-model="modelInfo.eyes"
      />

      <v-text-field
        label="Signe astrologique :"
        color="black"
        prepend-icon="mdi-star"
        v-model="modelInfo.astrological"
      />

      <v-textarea
        label="Petite description :"
        color="black"
        prepend-icon="mdi-pencil"
        v-model="modelInfo.description"
      />
    </v-card>

    <v-card class="model-form">
      <h3>Réseaux sociaux du modèle</h3>
      <v-text-field
        label="Instagram :"
        color="black"
        prepend-icon="mdi-instagram"
        ref="instagram"
        v-model="modelNetwork.instagram"
      />

      <v-text-field
        label="Facebook :"
        color="black"
        prepend-icon="mdi-facebook"
        ref="facebook"
        v-model="modelNetwork.facebook"
      />

      <v-text-field
        label="Snapchat :"
        color="black"
        prepend-icon="mdi-snapchat"
        ref="snapchat"
        v-model="modelNetwork.snapchat"
      />

      <v-text-field
        label="Tiktok :"
        color="black"
        prepend-icon="mdi-video"
        ref="tiktok"
        v-model="modelNetwork.tiktok"
      />

      <v-text-field
        label="Twitter :"
        ref="twitter"
        color="black"
        prepend-icon="mdi-twitter"
        v-model="modelNetwork.twitter"
      />
    </v-card>
    <div class="model-form-btn">
      <div class="modify-model-alert">
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="error"
          v-model="errorAlert"
        >
          La modification du modèle n'a pas fonctionner !
        </v-alert>
        <v-alert
          dense
          text
          dismissible
          elevation="15"
          type="success"
          v-model="successAlert"
        >
          Le modèle à bien été modifier !
        </v-alert>
      </div>

      <v-btn
        text
        @click="sendModel()"
      >
        Modifier
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
    <ModifyPicture
      :pictures="modelPictures"
      :model-id="modelId"
    />
    <AddPicture
      :model-id="modelId"
      @add:picture="modelPictures = $event"
    />
  </div>
</template>

<script>
import ModifyPicture from './section/ModifyPicture.vue';
import AddPicture from './section/AddPicture.vue';

export default {
  data: () => ({
    sexes: [
        { text: 'Homme', value: 'men' },
        { text: 'Femme', value: 'woman' },
    ],
    levels: [
        { text: 'T7', value: 'T7' },
        { text: 'T8', value: 'T8' },
        { text: 'T9', value: 'T9' },
        { text: 'T10', value: 'T10' },
    ],
    modelId: "",
    dataLoaded: false,
    errorAlert: false,
    successAlert: false,
    model: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        birth_date: "",
        sexe: "",
        level: "",
    },
    modelInfo: {
        size: null,
        weight: null,
        chest: null,
        waist: null,
        hips: null,
        shoe_size: null,
        color: "",
        hair_color: "",
        eyes: "",
        astrological: "",
        description: "",
    },
    modelPictures: null,
    modelNetwork: {
        instagram: "",
        facebook: "",
        snapchat: "",
        tiktok: "",
        twitter: "",
    },
}),


  components: {
    ModifyPicture,
    AddPicture
  },
  beforeMount() {
    this.modelId = this.$store.state.modelId;
    if (this.modelId === null && this.$route.params.id === null) {
      this.$router.push({ path: "/administration/models" });
    } else if (this.modelId !== null) {
      this.findModelData();
    } else {
      this.modelId = this.$route.params.id;
      this.$store.commit("modelId", this.modelId);
      this.findModelData();
    }
  },
  methods: {
    findModelData() {
      // eslint-disable-next-line no-undef
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
      const modelData = {
        model_id: this.modelId,
        model: this.model,
        model_info: this.modelInfo,
        model_network: this.modelNetwork
      };

      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'modify/model',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        },
        data : modelData
      };

      this.$axios(config).then(response => {
        if (response.status != 500) {
          this.successAlert = true;
          
        }
      }).catch(error => {
        this.errorAlert = true;
        this.$hygie.logger.error(error);
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
