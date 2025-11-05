 import { createWebHashHistory,createRouter } from "vue-router";
 import Home from "./components/Home.vue";
 import AboutSection from "./components/AboutSection.vue";
 import ContactsSection from "./components/ContactsSection.vue";
 import GallerySection from "./components/GallerySection.vue";
 import ProductsSection from "./components/ProductsSection.vue";
 import About from "./components/ModalPages/About.vue";
 import GalleryFive from "./components/ModalPages/GalleryFive.vue";
 import GalleryFour from "./components/ModalPages/GalleryFour.vue";
 import GalleryOne from "./components/ModalPages/GalleryOne.vue";
 import Galleryseven from "./components/ModalPages/Galleryseven.vue";
 import GallerySix from "./components/ModalPages/GallerySix.vue";
 import GalleryThree from "./components/ModalPages/GalleryThree.vue";
 import GalleryTwo from "./components/ModalPages/GalleryTwo.vue";


 const routes = [
    {
        name: 'AboutSection',
        component: AboutSection,
        path: '/about'
    },
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'ContactsSection',
        component: ContactsSection,
        path: '/contacts'
    },
    {
        name: 'GallerySection',
        component: GallerySection,
        path: '/gallery'
    },
    {
        name: 'ProductsSection',
        component: ProductsSection,
        path: '/products'
    },
    {
        name: 'GalleryFive',
        component: GalleryFive,
        path: '/gallery5'
    },
    {
        name: 'GalleryFour',
        component: GalleryFour,
        path: '/gallery4'
    },
    {
        name: 'GalleryOne',
        component: GalleryOne,
        path: '/gallery1'
    },
    {
        name: 'Galleryseven',
        component: Galleryseven,
        path: '/gallery7'
    },
    {
        name: 'GallerySix',
        component: GallerySix,
        path: '/gallery6'
    },
    {
        name: 'GalleryThree',
        component: GalleryThree,
        path: '/gallery3'
    },
    {
        name: 'GalleryTwo',
        component: GalleryTwo,
        path: '/gallery2'
    },
    {
        name: 'About',
        component: About,
        path: '/about'
    }
 ]

 const router = createRouter({
    routes,
    history: createWebHashHistory()
 });

 export default router;
 