import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

// axios
import axios from 'axios'

// momement for manage date
import moment from 'moment' 

// router
import routes from './routes.js';

// store
import store from './store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;

const router = new VueRouter({ routes })

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
