// import vue router
import VueRouter from 'vue-router';

// page component
import HomePage from './components/HomePage.vue';
import AdminLoginPage from './components/AdminLoginPage.vue';
import SingleModelPage from './components/SingleModelPage.vue';
import PricePage from './components/pages/price/PricePage.vue';
import ContactPage from './components/pages/contact/ContactPage';

// admin component
import AdminHome from './components/AdminHome.vue';
import AdminHomePage from './components/AdminHomePage.vue';
import AdminModel from './components/AdminModel.vue';
import AdminModifyModel from './components/AdminModifyModel.vue'

// agent component
import RegisterAgent from './components/agents/RegisterAgent/RegisterAgent.vue';
import LoginAgent from './components/agents/LoginAgent/LoginAgent.vue';
import DashboardAgent from './components/agents/DashboardAgent/DashboardAgent.vue';

// renew password
import ResetPassword from './components/agents/ResetPassword/ResetPassword.vue';

// error component
import Error404 from './components/404Page.vue';

// store
import store from './store.js';

// api method
import adminapi from './api/admin.js';
import agentapi from './api/agent.js';

async function manageAdmConnexion() {
  store.commit("adminToken", sessionStorage.admtoken);
  store.commit("adminConnected", true);
  const adminData = await adminapi.findAdminData();
  store.commit("adminData", adminData);
}

async function checkAgtConnexion() {
  if (sessionStorage.agttoken) {
    const token = sessionStorage.agttoken;
    const agentData = await agentapi.findAgentData();
    store.commit("agentData", agentData);
    store.commit("agentToken", token);
    store.commit("agentConnected", true);
  }
}

const routes = [
  { 
      path: "/", 
      name: "home",
      component: HomePage,
  },
  {
    path: "/model/:id",
    name: "model",
    component: SingleModelPage
  },
  {
    path: "/prices",
    name: "prices",
    component: PricePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
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
        path: "/administration/modify/model/:id",
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
      sessionStorage.agttoken ? next() : next({path: '/login/agents'});
    },
  },
  {
    path: '/reset/password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: "*",
    name: "Error404",
    component: Error404
  },
];

const router = new VueRouter({ routes });

// manage agent connexion
router.beforeEach(async (to, from, next) => {
  await checkAgtConnexion();
  next();
});
  
export default router;
