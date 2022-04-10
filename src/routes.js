// page component
import HomePage from './components/HomePage.vue';
import AdminLoginPage from './components/AdminLoginPage.vue';
import SingleModelPage from './components/SingleModelPage.vue';
import PricePage from './components/PricePage.vue';

// admin component
import AdminHome from './components/AdminHome.vue';
import AdminHomePage from './components/AdminHomePage.vue';
import AdminModel from './components/AdminModel.vue';
import AdminModifyModel from './components/AdminModifyModel.vue'

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
    path: "/prices",
    name: "prices",
    component: PricePage
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
    component: AdminHome,
    beforeEnter(to, from, next) {
      store.state.adminConnected ? next() : next({path: "/adminlogin"});
    },
    children: [
      {
        path: "",
        name: "adminHome",
        component: AdminHomePage
      },
      {
        path: "/administration/models",
        name: "AdminModel",
        component: AdminModel
      },
      {
        path: "/administration/modify/model",
        name: "AdminModifyModel",
        component: AdminModifyModel
      }
    ],
  },
  {
    path: "*",
    name: "Error404",
    component: Error404
  },
];
  
export default routes;
