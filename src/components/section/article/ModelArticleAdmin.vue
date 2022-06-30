<template>
  <v-card
    class="model-article-admin"
    max-width="344"
    elevation="2"
  >
    <v-img
      :src="model.model_picture.picture_path"
      height="300px"
    ></v-img>

    <v-card-title>
      {{ model.model.firstname }}
    </v-card-title>

    <v-card-subtitle>
      {{ model.model_info.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="grey"
        @click="redirectToModel(model.model.id)"
      >
        <v-icon dark>
          mdi-pencil-outline
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="error"
        @click="deleteModel(model.model.id)"
      >
        <v-icon dark>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
    model: {
      type: Object,
      required: true
    },
  },
  methods: {
    redirectToModel(modelId) {
      this.$store.commit("modelId", modelId);
      this.$router.push({ path: "/administration/modify/model" });
    },
    deleteModel(modelId) {
      let config = {
        method: 'delete',
        url: process.env.VUE_APP_API_URL + 'delete/model/?id=' + modelId,
        headers: { 
          'Content-Type': 'application/json'
        }
      };

      this.$axios(config).then(response => {
        if (response.status === 200) this.$emit('deleted', { isDelete: response.data.model_deleted, modelId });
      }).catch(error => {
        this.$emit('deleted', { isDelete: false, modelId });
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.model-article-admin {
  margin-bottom: 25px;
  margin-top: 25px;
}

.more-btn {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
