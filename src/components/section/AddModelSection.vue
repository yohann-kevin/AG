<template>
  <div class="add-model">
    <h2>Ajout d'un modèle</h2>
    <v-card class="model-form">
      <h3>Information du modèle</h3>

      <v-text-field
        label="Prénom"
        color="black"
        prepend-icon="mdi-account"
        v-model="firstname"
      />

      <v-text-field
        label="Nom"
        color="black"
        prepend-icon="mdi-account"
        v-model="lastname"
      />

      <v-text-field
        label="Email"
        color="black"
        prepend-icon="mdi-email"
        v-model="email"
      />

      <v-text-field
        label="Numéro de téléphone"
        color="black"
        prepend-icon="mdi-phone"
        v-model="phone"
      />

      <v-text-field
        label="Adresse"
        color="black"
        prepend-icon="mdi-home-account"
        v-model="address"
      />

      <v-text-field
        label="Date de naissance"
        color="black"
        prepend-icon="mdi-cake-variant"
        v-model="birthdate"
      />

      <v-select
        label="Sexe"
        color="black"
        prepend-icon="mdi-gender-male-female"
        v-model="sexe"
        :items="sexes"
        item-text="text"
        item-value="value"
      />

      <v-select
        label="Niveau"
        color="black"
        prepend-icon="mdi-star"
        v-model="level"
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
        v-model="size"
      />
      <v-text-field
        label="Poids :"
        type="number"
        color="black"
        prepend-icon="mdi-weight-kilogram"
        v-model="weight"
      />
      <v-text-field
        label="Poitrine :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="chest"
      />
      <v-text-field
        label="Taille :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="waist"
      />
      <v-text-field
        label="Hanche :"
        type="number"
        color="black"
        prepend-icon="mdi-tape-measure"
        v-model="hips"
      />
      <v-text-field
        label="Pointure :"
        type="number"
        color="black"
        prepend-icon="mdi-shoe-print"
        v-model="shoes"
      />
      <v-text-field
        label="Couleur de peau :"
        color="black"
        prepend-icon="mdi-palette"
        v-model="color"
      />
      <v-text-field
        label="Couleur de cheveux :"
        color="black"
        prepend-icon="mdi-palette"
        v-model="haircolor"
      />
      <v-text-field
        label="Couleur des yeux :"
        color="black"
        prepend-icon="mdi-eye"
        v-model="eyes"
      />
      <v-text-field
        label="Signe astrologique :"
        color="black"
        prepend-icon="mdi-star"
        v-model="astrological"
      />
      <v-textarea
        label="Petite description :"
        color="black"
        prepend-icon="mdi-pencil"
        v-model="description"
      />
    </v-card>

    <v-card class="model-form">
      <h3>Réseaux sociaux du modèle</h3>
      <v-text-field
        label="Instagram :"
        color="black"
        prepend-icon="mdi-instagram"
        ref="instagram"
        v-model="instagram"
      />
      <v-text-field
        label="Facebook :"
        color="black"
        prepend-icon="mdi-facebook"
        ref="facebook"
        v-model="facebook"
      />
      <v-text-field
        label="Snapchat :"
        color="black"
        prepend-icon="mdi-snapchat"
        ref="snapchat"
        v-model="snapchat"
      />
      <v-text-field
        label="Tiktok :"
        color="black"
        prepend-icon="mdi-video"
        ref="tiktok"
        v-model="tiktok"
      />
      <v-text-field
        label="Twitter :"
        ref="twitter"
        color="black"
        prepend-icon="mdi-twitter"
        v-model="twitter"
      />
      <v-file-input
        label="Photo principale :"
        color="black"
        prepend-icon="mdi-camera-image"
        accept="image/*"
        v-model="mainpicture"
      />
      <v-file-input
        label="Photos :"
        color="black"
        prepend-icon="mdi-image-multiple"
        multiple
        accept="image/*"
        v-model="pictures"
      />
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
          class="add-model-v-alert"
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
          class="add-model-v-alert"
        >
          Le modèle à bien été ajouter !
        </v-alert>

        <v-progress-circular
          :size="90"
          color="black"
          indeterminate
          class="is-in-load"
          v-if="isInLoad"
          :width="8"
        />
      </div>

      <v-btn
        text
        @click="sendModel()"
      >
        Ajouter
      </v-btn>
      <v-btn text>
        Annuler
      </v-btn>
    </div>
  </div>
</template>

<script>
import imageCompression from 'browser-image-compression';
export default {
  name: 'AddModelSection',
  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    birthdate: "",
    sexe: "",
    sexes: [
      { text: 'Homme', value: 'men' },
      { text: 'Femme', value: 'woman' },
    ],
    level: "",
    levels: [
      { text: 'T7', value: 'T7' },
      { text: 'T8', value: 'T8' },
      { text: 'T9', value: 'T9' },
      { text: 'T10', value: 'T10' },
    ],
    size: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    shoes: "",
    color: "",
    haircolor: "",
    eyes: "",
    astrological: "",
    description: "",
    instagram: "",
    facebook: "",
    snapchat: "",
    tiktok: "",
    twitter: "",
    mainpicture: "", 
    pictures: "",
    modelInfo: null,
    modelMeasurement: null,
    modelNetwork: null,
    dataMainPicture: [],
    dataPictures: [],
    errorAlert: false,
    successAlert: false,
    isInLoad: false
}),
  methods: {
    // TODO: manage empty value
    sendModel() {
      this.isInLoad = true;
      this.manageModelInfo();
      this.manageModelMeasurement();
      this.manageModelNetwork();
      this.sendModelData();
    },
    manageModelInfo() {
      this.modelInfo = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        birth_date: this.birthdate,
        sexe: this.sexe,
        level: this.level
      }
    },
    manageModelMeasurement() {
      this.modelMeasurement = {
        size: this.size,
        weight: this.weight,
        chest: this.chest,
        waist: this.waist,
        hips: this.hips,
        shoes: this.shoes,
        color: this.color,
        hair_color: this.haircolor,
        eyes: this.eyes,
        astrological: this.astrological,
        description: this.description
      }
    },
    manageModelNetwork() {
      this.modelNetwork = {
        instagram: this.instagram,
        facebook: this.facebook,
        snapchat: this.snapchat,
        tiktok: this.tiktok,
        twitter: this.twitter
      }
    },
    async convertPicturesToBase64(pictureData, isMainPicture) {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
      if (isMainPicture) {
        this.dataMainPicture.push(await toBase64(pictureData));
      } else {
        this.dataPictures.push(await toBase64(pictureData));
      }
    },
    async compressImage(picture) {
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };
      try {
        return await imageCompression(picture, options);
      } catch (error) {
        this.errorAddModel = true;
        console.log(error);
      }
    },
    async manageModelPictures() {
  if (this.mainpicture) {
    const mainPicture = this.mainpicture.files[0];
    const mainPictureCompressed = await this.compressImage(mainPicture);
    await this.convertPicturesToBase64(mainPictureCompressed, true);
  }

  if (this.pictures) {
    const otherPictures = this.pictures.files;
    for (let i = 0; i < otherPictures.length; i++) {
      const pictureCompressed = await this.compressImage(otherPictures[i]);
      await this.convertPicturesToBase64(pictureCompressed, false);
    }
  }
},

    async sendModelData() {
      await this.manageModelPictures();

      const modelData = {
        model: this.modelInfo,
        model_info: this.modelMeasurement,
        model_network: this.modelNetwork,
        main_picture: this.dataMainPicture,
        all_pictures: this.dataPictures
      };
      const config = {
        method: 'post',
        // eslint-disable-next-line no-undef
        url: process.env.VUE_APP_API_URL + 'create/model',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.admtoken
        },
        data: modelData
      };
      this.$axios(config).then(response => {
        this.isInLoad = false;
        if (response.status === 201) {
          this.successAlert = true;
        }
      }).catch(error => {
        this.isInLoad = false;
        this.errorAlert = true;
        console.log(error);
      });
    }
  }
};
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
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 15px;
  padding: 15px;
}

.model-form h3 {
  width: 100%;
  text-align: center;
}


.add-model-alert {
  width: 100%;
  display: flex;
  justify-content: center;
}

.add-model-v-alert {
  width: 100%;
}

.model-form-btn {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
}

.is-in-load {
  margin-bottom: 30px;
}
</style>
