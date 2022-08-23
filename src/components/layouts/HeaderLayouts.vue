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

    <h1 class="ag-title">AG Scouting</h1>

    <v-spacer></v-spacer>

    <div id="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/prices">Nos tarifs</router-link>
      <v-menu 
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
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
              <router-link class="dropdown-link" :to="link.link">{{ link.title }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-spacer></v-spacer>

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
}

@media only screen and (max-width: 480px) {
  .instagram-header-btn {
    display: none;
  }
}
</style>
