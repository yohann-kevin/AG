import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

// axios
import axios from 'axios'

import routes from './routes.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.prototype.$axios = axios;

const router = new VueRouter({ routes })

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
