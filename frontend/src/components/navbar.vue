<template>
    <!-- component -->
    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

        <!-- navigation -->
        <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
                <li v-if="currentRouteIs('/login') || currentRouteIs( '/register')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="/login">Login</a>
                </li>
                <li v-if="currentRouteIs('/login') || currentRouteIs( '/register')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <a href="/register">register</a>
                </li>
                <li v-if="currentRouteIs('/') || currentRouteIs( '/users') || currentRouteIs( '/trips')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer items-end">
                    <a href="/">Home</a>
                </li>
                <li v-if="isAdmin && currentRouteIs('/') || currentRouteIs('/users')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer items-end">
                    <a href="/users">Users</a>
                </li>
                <li v-if="isUser && currentRouteIs('/') || currentRouteIs('/trips')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer items-end">
                    <a href="/trips">My trips</a>
                </li>
                <li v-if="currentRouteIs('/') || currentRouteIs( '/users') || currentRouteIs( '/trips')" class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer items-end">
                    <a @click="logout">Logout</a>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {ref} from "vue";
import {useToast} from "vue-toastification";

const router = useRouter();
const toast = useToast();
const isAuthenticated = ref(localStorage.getItem('accessToken') !== null);
const isAdmin = ref(localStorage.getItem('role') === 'admin');
const isUser = ref(localStorage.getItem('role') === 'user');
const currentRouteIs = (route) => {
    return router.currentRoute.value.path === route;
};

const logout = async () => {
    localStorage.removeItem('token');
    isAuthenticated.value = false;

    toast.success("Logged out", {
        position: "top-right",
        timeout: 1000
    });

    setTimeout(() => {
        router.push("/login");
    }, 1500)
};

</script>