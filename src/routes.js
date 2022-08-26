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

// agent component
import RegisterAgent from './components/agents/RegisterAgent/RegisterAgent.vue';
import LoginAgent from './components/agents/LoginAgent/LoginAgent.vue';
import DashboardAgent from './components/agents/DashboardAgent/DashboardAgent.vue';

// error component
import Error404 from './components/404Page.vue';

// store
import store from './store.js';

// api method
import adminapi from './api/admin.js';

async function manageAdmConnexion() {
  store.commit("adminToken", sessionStorage.admtoken);
  store.commit("adminConnected", true);
  const adminData = await adminapi.findAdminData();
  store.commit("adminData", adminData);
}

const routes = [
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
    async beforeEnter(to, from, next) {
      if (sessionStorage.admtoken) {
        await manageAdmConnexion();
      }
      store.state.adminConnected ? next({ path: "/administration" }) : next();
    }
  },
  {
    path: "/administration",
    name: "administration",
    component: AdminHome,
    async beforeEnter(to, from, next) {
      if (sessionStorage.admtoken) {
        await manageAdmConnexion();
      }
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
    path: "/register/agents",
    name: "RegisterAgent",
    component: RegisterAgent
  },
  {
    path: "/login/agents",
    name: "LoginAgent",
    component: LoginAgent
  },
  {
    path: '/agent',
    name: 'agent',
    component: DashboardAgent,
    beforeEnter(to, from, next) {
      store.state.agentConnected ? next() : next({path: '/login/agents'});
    },
  },
  {
    path: "*",
    name: "Error404",
    component: Error404
  },
];
  
export default routes;
