<template>
    <navbar />

    <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div class="h-full">
            <!-- Table -->
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800">My trips</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Destination</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Username</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100">
                            <tr v-for="trip in trips" :key="trip.id">
                                <td class="p-2">{{ trip.destination }}</td>
                                <td class="p-2">{{ trip.username }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const trips = ref([]);

const loadTrips = async () => {
    try {
        const response = await axios.get('http://localhost:3002/trip');

        // Assuming response.data is an array of trips with populated user field
        trips.value = response.data.map((trip) => ({
            id: trip.id,
            destination: trip.destination,
            username: trip.username
        }));
    } catch (error) {
        console.error('Error loading trips', error);
    }
};

onMounted(() => {
    loadTrips();
});
</script>

