// page component
import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';
import AdminLoginPage from './components/AdminLoginPage.vue';
import AdminHomePage from './components/AdminHomePage.vue';
import SingleModelPage from './components/SingleModelPage.vue';

// error component
import Error404 from './components/404Page.vue';

// store
import store from './store.js';

var routes = [
  { 
      path: "/", 
      name: "home",
      component: HomePage,
  },
  {
    path: "/model",
    name: "model",
    component: SingleModelPage
  },
  {
      path: "/contact",
      name: "contact",
      component: ContactPage
  },
  {
    path: "/adminlogin",
    name: "administrationLogin",
    component: AdminLoginPage,
    beforeEnter(to, from, next) {
      store.state.adminConnected ? next({ path: "/administration" }) : next();
    }
  },
  {
    path: "/administration",
    name: "administration",
    component: AdminHomePage,
    beforeEnter(to, from, next) {
      store.state.adminConnected ? next() : next({path: "/adminlogin"});
    }
  },
  {
    path: "*",
    name: "Error404",
    component: Error404
  },
];
  
export default routes;
