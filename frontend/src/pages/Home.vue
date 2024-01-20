<template>
    <navbar/>
    <div className="text-white">
        <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold text-black md:py-4">
                Welcome {{ username }}!
            </h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-2xl text-xl font-bold py-4 text-gray-300">
                    You are logged in as {{ role }} for CSP3
                </p>
            </div>
            <p className="md:text-2xl sm:text-1xl text-xl font-bold text-gray-500 px-4">
                This is your dashboard. You can find more in the navigation bar above!</p>
        </div>
    </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";

const username = (localStorage.getItem('LoggedInUser'));
const role = (localStorage.getItem('role'));
</script>

<style scoped>

</style>