import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';
import Error404 from './components/404Page.vue';

var routes = [
    { 
        path: "/", 
        name: "Home",
        component: HomePage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage
    },
    {
      path: "*",
      name: "Error404",
      component: Error404
    },
];
  
export default routes;
