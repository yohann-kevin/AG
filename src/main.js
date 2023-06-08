import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueScrollReveal from 'vue-scroll-reveal';

// axios
import axios from 'axios'

// momement for manage date
import moment from 'moment' 

// router
import router from './routes.js';

// store
import store from './store.js';

// HygieVuePlugins
import HygieVuePlugins from 'hygie-vue-plugins';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueScrollReveal);
Vue.use(HygieVuePlugins);

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
