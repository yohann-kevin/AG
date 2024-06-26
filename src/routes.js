// import vue router
import VueRouter from 'vue-router';

// page component
import HomePage from './components/HomePage.vue';
import AdminLoginPage from './components/AdminLoginPage.vue';
import SingleModelPage from './components/SingleModelPage.vue';
import SingleArticlePage from './components/SingleArticlePage.vue';
import AboutPage from './components/pages/about/AboutPage.vue';
import ContactPage from './components/pages/contact/ContactPage.vue';
import ActualityPage from './components/pages/actuality/ActualityPage.vue';

// admin component
import AdminHome from './components/AdminHome.vue';
import AdminHomePage from './components/AdminHomePage.vue';
import AdminModel from './components/AdminModel.vue';
import AdminModifyModel from './components/AdminModifyModel.vue';
import AddArticle from './components/administrations/AddArticle/AddArticle.vue';
import ListArticle from './components/administrations/ListArticle/ListArticle.vue';
import ModifyArticle from './components/administrations/ModifyArticle/ModifyArticle.vue';

// agent component
import RegisterAgent from './components/agents/RegisterAgent/RegisterAgent.vue';
import LoginAgent from './components/agents/LoginAgent/LoginAgent.vue';
import DashboardAgent from './components/agents/DashboardAgent/DashboardAgent.vue';

// renew password
import ResetPassword from './components/agents/ResetPassword/ResetPassword.vue';
import RenewPassword from './components/agents/RenewPassword/RenewPassword.vue';

// error component
import Error404 from './components/404Page.vue';
import Error500 from './components/500Page.vue';


// LegalNotice & RgpdManagement & Cgu Management
import LegalNotice from './components/legals/LegalNotice.vue';
import RgpdManagement from './components/legals/RgpdManagement.vue';
import CguManagement from './components/legals/CguManagement.vue';



// store
import store from './store.js';

// api method
import adminapi from './api/admin.js';
import agentapi from './api/agent.js';
import statusapi from './api/status';

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
    path: "/article/:id",
    name: "article",
    component: SingleArticlePage
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage
  },
  {
    path: "/legal",
    name: "legal",
    component: LegalNotice
  },
  {
    path:"/rgpd",
    name: "rgpd",
    component:RgpdManagement
  },
  {
    path:"/cgu",
    name: "cgu",
    component:CguManagement
  },
 {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/actuality',
    name:'actuality',
    component: ActualityPage
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
      },

      {
        path: "/administration/add-article",
        name: "AddArticle",
        component: AddArticle
      },
      {
        path: "/administration/article",
        name: "ListArticle",
        component: ListArticle
      },
      {
        path: "/administration/modify/article/:id",
        name: "ModifyArticle",
        component: ModifyArticle
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
    path: '/renew/password/:id',
    name: 'RenewPassword',
    component: RenewPassword
  },
  {
    path: '/error',
    name: 'Error500',
    component: Error500
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
  const status = await statusapi.checkStatus();
  if (status !== 200  && to.path !== '/error') {
    next({ path: '/error' });
  }
  await checkAgtConnexion();
  // Scroll to the top
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  next();
});
  
export default router;
