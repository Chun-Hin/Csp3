<template>
    <navbar/>
    <form @submit.prevent="login">
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Login to your account</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-green-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> Username or Email </label>
                        <input v-model="username" type="text" id="username" required placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                        <label class="block mt-3 font-semibold"> Password </label>
                        <input v-model="password" type="password" id="password" required placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                        <div class="flex justify-between items-baseline">
                            <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 ">Login</button>
                            <a href="#" class="text-sm hover:underline">Forgot password?</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </form>


</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import Navbar from "@/components/navbar.vue";

const username = ref('');
const password = ref('');
const router = useRouter();
const toast = useToast();

// Function to decode JWT
const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

const login = async () => {
    try {
        const response = await axios.post('http://localhost:3002/auth/login', {
            username: username.value,
            password: password.value,
        });

        localStorage.setItem('LoggedInUser', username.value);

        const decodedToken = parseJwt(response.data.accessToken);
        const role = decodedToken.role;

        localStorage.setItem('role', role);
        localStorage.setItem('token', response.data.accessToken);

        toast.success('Login successful!', {
            position: "top-right",
            timeout: 1000
        });

        setTimeout(() => {
            router.push("/");
        }, 1000)

    } catch (error) {
        console.error('Login error', error.response.data.message);
        toast.error('Invalid username or password', {
            position: "top-right",
            timeout: 1500
        });
    }
};
</script>
