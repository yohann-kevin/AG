<template>
  <v-app-bar
    app
    color="white"
    class="app-bar"
    height="80px"
  >
    <div class="d-flex align-center">
      <v-img
        alt="AG Scouting"
        class="shrink mr-2"
        contain
        src="../../assets/logo-ag.png"
        transition="scale-transition"
        width="80px"
        height="78px"
      />
    </div>

    <h1 class="ag-title">
      AG Scouting
    </h1>

    <v-spacer />

    <div id="nav">
      <router-link to="/">
        Accueil
      </router-link>
      <router-link to="/prices">
        Nos tarifs
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

    <div
      id="nav-smartphone"
      class="nav-smartphone"
    >
      <a
        class="bouton-fermer"
        id="bouton-fermer"
      >&times;</a>

      <div class="nav-smartphone-liens">
        <li class="menu">
          <a href="#">Home</a>
        </li>
        <li class="menu">
          <a href="#">About</a>
        </li>
        <li class="menu">
          <a href="#">Shop</a>
        </li>
        <li class="menu">
          <a href="#">Blog</a>
        </li>
        <li class="menu">
          <a href="#">Contact</a>
        </li>
      </div>
    </div>

    <v-spacer />

    <v-icon
      large
      class="menu-burger"
    >
      mdi-menu
    </v-icon>

    <v-btn
      href="https://www.instagram.com/ag.scouting/"
      target="_blank"
      text
      class="instagram-header-btn"
    >
      <span class="mr-2">Notre instagram</span>
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>


export default {
  name: "HeaderLayouts",
  data: () => ({
    links: [
      { title: 'Inscription', link:'/register/agents' },
      { title: 'Connexion', link:'/login/agents' }
    ]
  }),
  computed: {
    agentConnected() {
      return this.$store.state.agentConnected;
    },
  }
}






</script>

<style scoped>
#nav {
  width: 40%;
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
  display: none;
}

.nav-smartphone {
   height: 100%;
   width: 0;
   position: fixed;
   z-index: 1;
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


.nav-smartphone-liens {
   position: relative;
   top: 25%;
   width: 100%;
   text-align: center;
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
   top: 20px;
   right: 45px;
   font-size: 60px;

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

@media only screen and (max-width: 768px) {
  #nav {
    display: none;
  }

  .menu-burger {
    display: initial;
  }
}

@media only screen and (max-width: 480px) {
  .instagram-header-btn {
    display: none;
  }
}
</style>
