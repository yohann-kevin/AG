<template>
  <div class="agent-dashboard">
    <h2>Tableau de bord</h2>
    <div class="dashbord-agent-descritption">
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

        <!-- TODO: place component for modify informations -->
        <v-card-text>
          <v-form
            v-model="valid"
            class="update-info-agent-form"
            ref="update-info-agent-form"
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
                :disabled="!valid"
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
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    agents: null,
    agentsUpdated: null,
    valid: false,
    emailRules: [ v => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Adresse email invalide' ],
  }),
  async beforeMount() {
    this.agents = await this.formatAgentData();
    this.agentsUpdated = this.agents;
    console.log(this.agents);
  },
  updated() {
    // TODO: test object equality here
    // console.log(this.agentsUpdated == this.agents);
    // const infoNotChanged = JSON.stringify(this.agents) == JSON.stringify(this.agentsUpdated);
    // console.log(infoNotChanged);
  },
  methods: {
    updateAgent() {
      // TODO: send agent data updated
      console.log(this.agentsUpdated);
    },
    async resetFormUpdateAgent() {
      this.$refs['update-info-agent-form'].reset();
    },
    async formatAgentData() {
      const agentData = await this.$store.state.agentData;
      delete agentData.created_at;
      delete agentData.updated_at;
      delete agentData.cgu;
      return agentData;
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


</style>
