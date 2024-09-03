<script setup lang="ts">
  import { onMounted } from "vue";
  import {useParkingStore} from "../store/parkingStore.ts";

  const parkingStore = useParkingStore()

  onMounted(() => {
    parkingStore.fetchParkingSpots()
  })
</script>

<template>
  <div class="container mx-auto p-8">
  <h2 class="text-2xl font-bold mb-4 text-primary">Parking</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
          v-for="spot in parkingStore.parkingSpots"
          :key="spot.id"
          class="p-6 bg-white border border-gray-300 rounded-lg shadow-md transition transform hover:scale-105"
      >
        <h2 class="text-xl font-semibold text-secondary mb-2">🅿️ {{ spot.spot_number }}</h2>
        <p :class="{'text-green-500': !spot.is_occupied, 'text-red-500': spot.is_occupied}">
          {{ spot.is_occupied ? '🔴' : '🟢' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>