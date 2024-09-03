<script setup lang="ts">
import ParkingList from "./components/ParkingList.vue";
import CreateTicket from "./components/CreateTicket.vue";
import ReleaseTicket from "./components/ReleaseTicket.vue";
</script>

<template>
    <div id="app" class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6 text-primary">Bienvenu à Datalumni</h1>
    <CreateTicket />
      <ReleaseTicket />
    <ParkingList/>
    </div>
</template>

<style scoped>

</style>
