<template>
  <div
    class="single-model-page"
    v-if="dataLoaded"
  >
    <div class="single-model-info">
      <h2><strong>{{ modelLevel }}: </strong> {{ model.firstname }}</h2>
      <p>
        {{ modelInfo.description }}
      </p>
      <ul class="model-measurement">
        <li><span class="measurement-name">Hauteur :</span> {{ modelInfo.size }} cm</li>
        <li><span class="measurement-name">Poids :</span> {{ modelInfo.weight }} kg</li>
        <li><span class="measurement-name">Poitrine :</span> {{ modelInfo.chest }} cm</li>
        <li><span class="measurement-name">Taille :</span> {{ modelInfo.waist }} cm</li>
        <li><span class="measurement-name">Hanche :</span> {{ modelInfo.hips }} cm</li>
        <li><span class="measurement-name">Pointure :</span> {{ modelInfo.shoe_size }}</li>
        <li><span class="measurement-name">Cheveux :</span> {{ modelInfo.hair_color }}</li>
        <li><span class="measurement-name">Yeux :</span> {{ modelInfo.eyes }}</li>
        <li><span class="measurement-name">Signe astrologique :</span> {{ modelInfo.astrological }}</li>
      </ul>
      <div class="single-model-btn">
        <v-btn text>
          <router-link to="/">
            Retour
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/prices">
            Contacter
          </router-link>
        </v-btn>
      </div>
    </div>
    <div class="single-model-image">
      <v-carousel
        cycle
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(modelPicture ,i) in modelPictures"
          :key="i"
          :src="modelPicture.picture_path"
          contain
        />
      </v-carousel>
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
    modelPictures: null
  }),
  beforeMount() {
    this.modelId = this.$store.state.modelId;
    if (this.modelId === null && this.$route.params.id === null) {
      this.$router.push({ path: "/" });
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
        console.log(this.model);
        this.modelInfo = response.data.model_infos;
        this.modelPictures = response.data.model_pictures;
        this.dataLoaded = true;
      });
    }
  },
  computed: {
    modelLevel() {
      return this.model.level !== null ? this.model.level : 'T7';
    }
  }
}
</script>

<style>
.single-model-page {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  width: 55%;
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

@media only screen and (max-width: 768px) {
  .single-model-page {
    margin-top: 0;
    flex-direction: column-reverse;
  }

  .single-model-info {
    width: 100%;
  }

  .single-model-image {
    width: 100%;
  }

  .single-model-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
