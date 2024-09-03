<script setup lang="ts">
  import { ref }  from "vue";
  import { useParkingStore } from "../store/parkingStore.ts";

  const parkingStore = useParkingStore();
  const spotNumber = ref<number | null>(null);
  const releaseMessage = ref<string | null>(null);
  const errorMessage = ref<string | null>(null);

  const releaseSpot = async () => {
    if (spotNumber.value !== null) {
      try {
        await parkingStore.releaseSpot(spotNumber.value);
        releaseMessage.value = `Place numéro ${spotNumber.value} libérée avec succès!`;
        errorMessage.value = null;
      } catch (error) {
        releaseMessage.value = null;
        errorMessage.value = (error as Error).message;
      }
    }
  }
</script>

<template>
  <div class="container mx-auto p-8">
    <button
        @click="releaseSpot"
        class="px-4 py-2 bg-datalumni text-white rounded hover:bg-accent"
    >
      Rendre le ticket et libérer la place
    </button>
    <input
        v-model="spotNumber"
        type="number"
        placeholder="Numéro de place"
        class="px-4 py-2 border rounded mb-4 ml-2"
    />

    <div v-if="releaseMessage" class="mt-4">
      <p class="text-datalumni">
        {{ releaseMessage }}
      </p>
    </div>

    <div v-if="errorMessage" class="mt-4">
      <p class="text-red-500">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>