import {shallowMount} from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';
import ParkingList from "@/components/ParkingList.vue";
import {useParkingStore} from '@/store/parkingStore';

describe('ParkingList.vue', () => {
    it('devrait afficher la liste des places de parking', async () => {
        const pinia = createTestingPinia();
        const parkingStore = useParkingStore();
        parkingStore.parkingSpots = [
            { id: 1, spot_number: 1, is_occupied: false },
            { id: 2, spot_number: 2, is_occupied: true },
        ];

        const wrapper = shallowMount(ParkingList, {
            global: {
                plugins: [pinia],
            },
        });

        expect(wrapper.findAll('div.p-6').length).toBe(2);
        expect(wrapper.text()).toContain('🅿️ 1');
        expect(wrapper.text()).toContain('🅿️ 2');
    });
});
