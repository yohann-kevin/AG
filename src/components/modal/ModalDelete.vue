<template>
  <div>
    <v-dialog v-model="show" max-width="500px" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="text-h5 lighten-2">
          {{ modalInfo.modalTitle }}
        </v-card-title>

        <hr role="separator" aria-orientation="horizontal" class="mx-4 v-divider theme--light">

        <v-card-text class="mt-3">
          {{ modalInfo.modalText }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="dark" 
            @click="show=false"
            elevation="3"
          >
            Annuler
          </v-btn>
          <v-btn
            text
            color="error" 
            @click="deleteElement()"
            elevation="3"
            class="ml-5"
          >
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
     value: Boolean,
     modalInfo: {
       type: Object,
       required: true
     }
  },
  methods: {
    deleteElement() {
      this.$emit('accept');
      this.show = false;
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
.modal-title {
  border-bottom: 1px solid black;
}
</style>
