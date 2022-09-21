import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/views/HomeView.vue';


//import CarAddView from '../components/views/cars/CarAddView.vue';
//import CarListView from '../components/views/cars/CarListView.vue';
//import en lazy loading
const CarAddView = () => import('../components/views/cars/CarAddView.vue');
const CarListView = () => import('../components/views/cars/CarListView.vue');

//import LoginView from '../components/views/authentication/LoginView.vue';
const LoginView = () => import('../components/views/authentication/LoginView.vue')

const routes = [
    { path: '/', component: HomeView },
    { path: '/cars/add', component: CarAddView },
    { path: '/cars/list', component: CarListView },
    { path: '/login', component: LoginView }
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;