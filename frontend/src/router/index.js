// In your router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login.vue';
import Register from '../components/register.vue';
import Home from "@/pages/Home.vue";
import Users from "@/pages/Users.vue";
import Trips from "@/pages/Trips.vue";

const routes  = [

    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/trips',
        name: 'Trips',
        component: Trips,
    },
    {
        path: '' ,
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            // Check if there's a JWT in local storage
            const token = localStorage.getItem('token');
            if (token) {
                next();
            } else {
                next('/login');
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
