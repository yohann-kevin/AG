<template>
  <div class="agent-dashboard">
    <h2>Tableau de bord</h2>
    <div 
      class="dashbord-agent-descritption"
      v-if="agents"
    >
      <p>
        Bienvenue sur votre espace personnel {{ agents.firstname }} ici, vous pourrez modifier vos informations, 
        consulter l'avancement de votre demande de rendez-vous ave modèle et consulter les différentes factures que vous avez réglées.
      </p>
    </div>

    <div class="agent-options">
      <v-card
        elevation="8"
        class="agent-card"
      >
        <v-card-title>
          Vos demandes de rendez-vous
        </v-card-title>

        <v-card-text>
          Fonctionnalité indisponible pour le moment !
        </v-card-text>
      </v-card>

      <v-card
        elevation="8"
        class="agent-card"
      >
        <v-card-title>
          Vos factures
        </v-card-title>

        <v-card-text>
          Fonctionnalité indisponible pour le moment !
        </v-card-text>
      </v-card>

      <v-card
        elevation="8"
        class="agent-card"
      >
        <v-card-title>
          Vos informations
        </v-card-title>

        <v-card-text>
          <v-form
            v-model="updateFormValid"
            class="update-info-agent-form"
            ref="update-info-agent-form"
            v-if="agents"
          >
            <v-text-field
              v-model="agentsUpdated.firstname"
              color="black"
              label="Prénom"
              required
            />

            <v-text-field
              v-model="agentsUpdated.lastname"
              color="black"
              label="Nom de famille"
              required
            />

            <v-text-field
              v-model="agentsUpdated.email"
              color="black"
              :rules="emailRules"
              type="email"
              label="Courriel"
              required
            />
            <div class="update-agent-btn">
              <v-btn
                text
                :disabled="!updateFormValid"
                @click="updateAgent"
              >
                Envoyer
              </v-btn>
              <v-btn
                text
                @click="resetFormUpdateAgent"
                class="ml-4"
              >
                Annuler
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>

      <v-card
        elevation="8"
        class="agent-card"
      >
        <v-card-title>
          Votre mot de passe
        </v-card-title>

        <v-card-text>
          <v-form
            v-model="updatePasswordValid"
            ref="update-agent-password"
          >
            <v-text-field
              v-model="lastPassword"
              color="black"
              :rules="passwordRules"
              type="password"
              label="Entrer votre ancien mot de passe"
              required
            />

            <v-text-field
              v-model="newPassword"
              color="black"
              :rules="passwordRules"
              type="password"
              label="Nouveau mot de passe"
              required
            />

            <v-text-field
              v-model="confirmPassword"
              color="black"
              :rules="[(this.newPassword === this.confirmPassword) || 'Les mot de passe ne corresponde pas']"
              type="password"
              label="Confirmer le nouveau mot de passe"
              required
            />
            <div class="update-agent-btn">
              <v-btn
                text
                :disabled="!updatePasswordValid"
                @click="updatePasswordAgent"
              >
                Envoyer
              </v-btn>
              <v-btn
                text
                @click="resetFormPasswordAgent"
                class="ml-4"
              >
                Annuler
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
      <div>
        <ModalDelete
          v-model="showModal"
          @accept="deleteAgent"
          :modal-info="modalDeleteInfo"
        />
      </div>
      <v-btn
        class="ma-2"
        dark
        text
        color="error"
        @click="showModal = true"
      >
        Supprimer votre compte
      </v-btn>
    </div>
  </div>
</template>

<script>
import ModalDelete from '../../modal/ModalDelete.vue';

export default {
  data: () => ({
    agents: null,
    agentsUpdated: null,
    updateFormValid: false,
    emailRules: [ v => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Adresse email invalide' ],
    passwordRules: [ v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Mot de passe invalide' ],
    newPassword: '',
    lastPassword: '',
    confirmPassword: '',
    updatePasswordValid: false,
    showModal: false,
    modalDeleteInfo: {
      modalTitle: "Suppression de votre compte",
      modalText: 'Souhaitez vous réellement supprimer votre compte ? Une fois cela fait il ne sera plus possible de le récupérer !'
    },
  }),
  components: {
    ModalDelete
  },
  mounted() {
    this.agents = this.formatAgentData();
    this.agentsUpdated = this.agents;
  },
  methods: {
    updateAgent() {
      const config = {
        method: 'put',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL + 'agents/' + this.agentsUpdated.id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : this.agentsUpdated
      };

      this.$axios(config).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    },
    resetFormUpdateAgent() {
      this.$refs['update-info-agent-form'].reset();
    },
    formatAgentData() {
      const agentData = this.$store.state.agentData;
      delete agentData.created_at;
      delete agentData.updated_at;
      delete agentData.cgu;
      return agentData;
    },
    updatePasswordAgent() {
      const passwordData = {
        new_password: this.newPassword,
        last_password: this.lastPassword,
      };
      
      const config = {
        method: 'put',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL + 'agent/update/password/' + this.agents.id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : passwordData
      };

      this.$axios(config).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    },
    resetFormPasswordAgent() {
      this.$refs['update-agent-password'].reset();
    },
    deleteAgent() {
      var config = {
        method: 'delete',
        // eslint-disable-next-line no-undef
        url: process.env.VITE_APP_API_URL + 'agents/' + this.agents.id,
        headers: { }
      };

      this.$axios(config).then(response => {
        console.log(response.data);
        this.logoutAgent();
      }).catch(error => {
        console.log(error);
      });
    },
    logoutAgent() {
      this.$store.commit("agentData", null);
      this.$store.commit("agentToken", null);
      this.$store.commit("agentConnected", false);
      delete sessionStorage.agttoken;
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style>
.agent-dashboard {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.agent-dashboard h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}

.dashbord-agent-descritption {
  width: 100%;
  display: flex;
  justify-content: left;
}

.dashbord-agent-descritption p {
  width: 60%;
  margin-left: 25px;
}

.agent-options {
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.agent-card {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.update-info-agent-form {
  width: 100%;
}

.update-agent-btn {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .dashbord-agent-descritption p {
    width: 90%;
    text-align: justify;
  }

  .agent-options {
    width: 90%;
  }

  .update-agent-btn {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (max-width: 480px) {}
</style>
