<script setup lang="ts">
import {ref} from "vue";
import {useParkingStore} from "../store/parkingStore.ts";

const parkingStore = useParkingStore();
const ticketCreated = ref(false);
const spotNumber = ref<number | null>(null);
const errorMessage = ref<string | null>(null);

const createTicket = async () => {
  try {
    spotNumber.value = await parkingStore.createTicket();
    ticketCreated.value = true;
    errorMessage.value = null;
  } catch (error) {
    ticketCreated.value = false;
    errorMessage.value = (error as Error).message;
  }
}
</script>

<template>
  <div class="container mx-auto p-8">
    <button
        @click="createTicket"
        class="px-4 py-2 bg-accent text-white rounded hover:bg-datalumni"
    >
      Prendre un ticket de parking
    </button>

    <div v-if="ticketCreated" class="mt-4">
      <p class="text-datalumni">
        Ticket créé avec succès! Vous avez pris la place numéro <strong>{{ spotNumber }}</strong>.
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