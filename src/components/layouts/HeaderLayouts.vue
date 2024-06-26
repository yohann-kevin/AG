<template>
  <div>
    <v-app-bar
      app
      color="white"
      class="app-bar"
      height="80px"
      ref="header-bar"
    >
      <div
        class="d-flex align-center logo-link"
        @click="redirectToHome"
      >
        <v-img
          alt="AG Scouting"
          class="shrink mr-2 ag-logo"
          contain
          :src="formatImageSource('/public/assets/logo-ag.png')"
          transition="scale-transition"
          width="80px"
          height="78px"
        />

        <h1 class="ag-title">
          AG Scouting
        </h1>
      </div>

      <v-spacer />

      <div id="nav">
        <router-link to="/">
          Accueil
        </router-link>
        <router-link to="/about">
          A propos
        </router-link>
        <router-link to="/contact">
          Contact
        </router-link>
        <router-link to="/actuality">
          Actualités
        </router-link>
        <router-link 
          to="/agent"
          v-if="agentConnected"
        >
          Mon compte
        </router-link>
        <v-menu 
          bottom
          origin="center center"
          transition="scale-transition"
          v-else
        >
          <template #activator="{ on, attrs }">
            <v-btn
              class="menu-button-dropdown"
              text
              v-bind="attrs"
              v-on="on"
            >
              Mon compte
              <v-icon large>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
            >
              <v-list-item-title>
                <router-link
                  class="dropdown-link"
                  :to="link.link"
                >
                  {{ link.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer />

      <v-icon
        x-large
        class="menu-burger"
        @click="openNavSmartphone"
      >
        mdi-menu
      </v-icon>

      <v-btn
        v-if="agentConnected"
        @click="logoutAgent"
        text
        class="logout-button"
      >
        Se déconnecter
      </v-btn>
      <v-btn
        v-else
        @click.prevent="redirectToInstagram"
        target="_blank"
        class="instagram-header-btn"
        text
      >
        <span class="mr-2">Notre Instagram</span>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>
    <div
      id="nav-smartphone"
      class="nav-smartphone"
      ref="nav-smartphone"
    >
      <v-icon
        large
        class="bouton-fermer"
        @click="closeNavSmartphone"
      >
        mdi-close
      </v-icon>

      <ul class="nav-smartphone-link">
        <li class="menu">
          <router-link to="/">
            Accueil
          </router-link>
        </li>
        <li class="menu">
          <router-link to="/about">
            A propos
          </router-link>
        </li>
        <li class="menu">
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
        <li class="menu">
          <router-link to="/actuality">
            Actualités
          </router-link>
        </li>
        <li class="menu">
          <router-link :to="redirectAgent()">
            Mon Compte
          </router-link>
        </li>

        <li
          class="menu"
          v-if="agentConnected"
        >
          <a
            @click="logoutAgent"
            text
            class="logout-button-menu"
          >
            Se déconnecter
          </a>
        </li>
        <li
          v-else
          class="menu insta-link"
        >
          <a
            @click.prevent="redirectToInstagram"
            target="_blank"
          >
            <v-icon
              color="#818181"
              large
            >mdi-instagram</v-icon> Instagram
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import utils from '../../utils/utils.js';

export default {
  name: "HeaderLayouts",
  data: () => ({
    links: [
      { title: 'Inscription', link:'/register/agents' },
      { title: 'Connexion', link:'/login/agents' }
    ],
    currentRoute: null,
    formatImageSource: utils.formatImageSource
  }),
  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {
    openNavSmartphone() {
      this.$refs['header-bar'].isActive = false;
      this.$refs['nav-smartphone'].style.width = '100%';
    },
    closeNavSmartphone() {
      this.$refs['header-bar'].isActive = true;
      this.$refs['nav-smartphone'].style.width = '0';
    },
    redirectAgent() {
      if (this.$store.state.agentConnected) {
        return '/agent';
      }
      return '/login/agents';
    },
    redirectToHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
    logoutAgent() {
      this.$store.commit("agentData", null);
      this.$store.commit("agentToken", null);
      this.$store.commit("agentConnected", false);
      delete sessionStorage.agttoken;
      this.$router.push({ path: '/' });
      },
    redirectToInstagram() {
      if (!this.agentConnected) 
      window.open("https://www.instagram.com/ag.scouting/", "_blank");
    },
  },
  computed: {
    agentConnected() {
      return this.$store.state.agentConnected;
    },
  },
  watch: {
    $route() {
      this.closeNavSmartphone();
    }
  },
}
</script>


<style scoped>
.logo-link:hover {
  cursor: pointer;
}

#nav {
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#nav > a {
  text-decoration: none;
  font-size: 22px;
  color: #000;
  display: inline-block;
  position: relative;
}

#nav > a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2.5px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

#nav > a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.menu-burger {
  display: none;
}

.nav-smartphone {
   height: 100%;
   width: 0;
   position: fixed;
   z-index: 100;
   left: 0;
   top: 0;
   background-color: rgba(0, 0, 0, 0.9);
   overflow-x: hidden;
   transition: 0.6s;
   -webkit-transition: 0.6s;
   -moz-transition: 0.6s;
   -ms-transition: 0.6s;
   -o-transition: 0.6s;
}

.nav-smartphone-link {
   position: relative;
   top: 15%;
   width: 100%;
   text-align: center;
   list-style: none;
}

.menu {
  margin-top: 25px;
}

.nav-smartphone a {
   padding: 8px;
   text-decoration: none;
   font-size: 36px;
   color: #818181;
   display: block;
   transition: 0.5s;
   -webkit-transition: 0.5s;
   -moz-transition: 0.5s;
   -ms-transition: 0.5s;
   -o-transition: 0.5s;
}

.nav-smartphone a:hover,
.nav-smartphone a:focus {
   color: #f1f1f1;
}

.nav-smartphone .bouton-fermer {
   position: absolute;
   top: 45px;
   right: 45px;
   color: #f1f1f1;
}

.menu-button-dropdown {
  font-size: 16px;
  margin-top: -2px;
  color: #000;
}

.dropdown-link {
  font-size: 18px;
  color: #000;
  text-decoration: none;
  color: #000;
  display: inline-block;
  position: relative;
}

.dropdown-link:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2.5px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.dropdown-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.ag-title {
  font-family: 'creattion';
  font-size: 2.8rem;
  font-weight: 500;
}

.insta-link {
  align-items: center;
}
/* Styles for Nexus 10 */
@media only screen and (min-width:800px) and (max-width:1000px) {
  #nav {
    display: none;
  }
  .instagram-header-btn {
    display: none;
  }
  .menu-burger {
    display: initial;
  }
  .ag-logo {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  #nav {
    display: none;
  }

  .menu-burger {
    display: initial;
  }

  .ag-logo {
    display: none;
  }
  .instagram-header-btn {
    display: none;
  }
  .logout-button{
    display: none;
  }
  
}
@media only screen and (max-width: 480px) {
  .instagram-header-btn {
    display: none;
  }
  .logout-button{
    display: none;
  }
}
</style>
