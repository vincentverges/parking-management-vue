import { setActivePinia, createPinia } from 'pinia';
import { useParkingStore } from '@/store/parkingStore';
import apiService from '../../src/services/apiService';

jest.mock('../../src/services/apiService');

describe('ParkingStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('devrait créer un ticket et mettre à jour la place de parking', async () => {
        const parkingStore = useParkingStore();

        parkingStore.parkingSpots = [
            { id: 1, spot_number: 1, is_occupied: false }
        ];

        (apiService.createTicket as jest.Mock).mockResolvedValue({
            status: 201,
            data: {ticket:{id:1,issued_at:"2024-09-03T16:34:57.975687Z",spot:1}},
        });

        const spotNumber = await parkingStore.createTicket();

        expect(spotNumber).toBe(1);
        expect(parkingStore.parkingSpots[0].is_occupied).toBe(true);
    });

    it('devrait lancer une erreur si aucune place n\'est disponible', async () => {
        const parkingStore = useParkingStore();

        (apiService.createTicket as jest.Mock).mockResolvedValue({
            status: 404,
            data: { error: "Aucune place disponible" },
        });

        await expect(parkingStore.createTicket()).rejects.toThrow('Aucune palce disponible');
    });
});
