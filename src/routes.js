import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';
import AdminLoginPage from './components/AdminLoginPage.vue';
import Error404 from './components/404Page.vue';

var routes = [
    { 
        path: "/", 
        name: "home",
        component: HomePage,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactPage
    },
    {
      path: "/administration",
      name: "administration",
      component: AdminLoginPage
    },
    {
      path: "*",
      name: "Error404",
      component: Error404
    },
];
  
export default routes;
