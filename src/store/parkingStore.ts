import { defineStore} from "pinia";
import apiService from "../services/apiService";

export const useParkingStore = defineStore('parking', {
    state: () => ({
        parkingSpots: [] as { id: number; spot_number: number; is_occupied: boolean } [],
    }),
    actions: {
        async fetchParkingSpots(){
            const response = await apiService.getParkingSpots();
            this.parkingSpots = response.data.sort((a, b) => a.spot_number - b.spot_number);
        } ,
        async createTicket(){
            const response = await apiService.createTicket();
            if (response.status === 201){
                const spotNumber = response.data.ticket.spot;
                this.updateParkingSpot(spotNumber, true);
                return spotNumber;
            }
            throw new Error("Aucune palce disponible");
        },
        async releaseSpot(spotNumber){
            try {
                const response = await apiService.releaseSpot(spotNumber);
                if (response.status === 200){
                    this.updateParkingSpot(spotNumber, false);
                }
            } catch (error) {
                throw new Error("Impossible de libérer la place");
            }
        },

        updateParkingSpot(spotNumber: number, isOccupied: boolean){
            const spot = this.parkingSpots.find(s => s.spot_number === spotNumber);
            if (spot) {
                spot.is_occupied = isOccupied;
            }
        }
    }
})