<template>
    <navbar/>

    <form @submit.prevent="register">
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Register</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-green-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> Username or Email </label>
                        <input v-model="username" type="text" id="username" required placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                        <label class="block mt-3 font-semibold"> Password </label>
                        <input v-model="password" type="password" id="password" required placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                        <label class="block mt-3 font-semibold"> Role </label>
                        <select
                            v-model="role"
                            id="role"
                            required
                            class="border w-full h-15 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                            <option value="" disabled selected>Select Role</option>
                            <option value="admin">admin</option>
                            <option value="user">user</option>
                        </select>
                        <div class="flex justify-between items-baseline">
                            <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 ">Register</button>
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
import Navbar from "@/components/navbar.vue";
import {useRouter} from "vue-router";
import {useToast} from "vue-toastification";

const username = ref('');
const password = ref('');
const role = ref('');
const router = useRouter();
const toast = useToast();

const register = async () => {
    try {

        const response = await axios.post('http://localhost:3002/auth/register', {
            username: username.value,
            password: password.value,
            role: role.value
        });

        toast.success('Registration successful!', {
            position: "top-right",
            timeout: 1500
        });

        setTimeout(() => {
            router.push("/login");
            params: { role: role.value }
        }, 1500)

    } catch (error) {
        toast.error(error.response.data.message, {
            position: "top-right",
            timeout: 1500
        });
    }
};
</script>
