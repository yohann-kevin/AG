import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';

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
    }
];
  
export default routes;