<template>
  <div>
    <aside
      class="admin-nav"
      :class="menuIsOpen ? 'admin-nav-open' : 'admin-nav-closed'"
    >
      <div class="btn-closed">
        <v-icon 
          large 
          @click="menuIsOpen = false"
        >
          mdi-close
        </v-icon>
      </div>
      <ul>
        <li>
          <router-link to="/administration">
            Ajout modèle
          </router-link>
        </li>
        <li>
          <router-link to="/administration/models">
            Voir modèle
          </router-link>
        </li>
        <li>
          <router-link to="/administration/add-article">
            Ajout article
          </router-link>
        </li>
        <li>
          <router-link to="/administration/article">
            Voir article
          </router-link>
        </li>
      </ul>
    </aside>
    <v-btn 
      fab
      class="nav-menu-btn"
      @click="menuIsOpen = true"
    >
      <v-icon large>
        mdi-menu
      </v-icon>  
    </v-btn>
    <router-view class="admin-view" />
  </div>
</template>

<script>
export default {
  data: () => ({
    menuIsOpen: false
  }),
}
</script>

<style scoped>
.nav-menu-btn {
  position: fixed;
  z-index: 1;
  top: 95px;
  left: 15px;
}

.admin-nav {
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 80px;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: 0.5s;
}

.btn-closed {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-height: 50px;
  padding: 10px;
}

.admin-nav > ul {
  width: 100%;
  background-color: #000;
  list-style-type: none;
  padding: 20px;
}

.admin-nav > ul > li {
  margin: 20px;
}

.admin-nav > ul > li > a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: 0.5s;
}

.admin-nav > ul > li > a:hover {
  color: #757575;
  margin-left: 20px;
}

.admin-nav-closed {
  width: 0;
}

.admin-nav-open {
  width: 250px;
}

.admin-view {
  width: 100%;
}
</style>
