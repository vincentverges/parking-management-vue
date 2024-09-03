import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import ReleaseTicket from "../../src/components/ReleaseTicket.vue";
import { useParkingStore } from '@/store/parkingStore';

describe('ReleaseTicket.vue', () => {
    it('devrait libérer une place et afficher un message de succès', async () => {
        const pinia = createTestingPinia({
            createSpy: jest.fn,
        });
        const parkingStore = useParkingStore();
        parkingStore.releaseSpot = jest.fn().mockResolvedValue(true);

        const wrapper = shallowMount(ReleaseTicket, {
            global: {
                plugins: [pinia],
            },
        });

        await wrapper.find('input').setValue(1);
        await wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();

        expect(parkingStore.releaseSpot).toHaveBeenCalledWith(1);
        expect(wrapper.text()).toContain('Place numéro 1 libérée avec succès!');
    });

    it('devrait afficher une erreur si la libération échoue', async () => {
        const pinia = createTestingPinia({
            createSpy: jest.fn,
        });
        const parkingStore = useParkingStore();
        parkingStore.releaseSpot = jest.fn().mockRejectedValue(new Error('Impossible de libérer la place'));

        const wrapper = shallowMount(ReleaseTicket, {
            global: {
                plugins: [pinia],
            },
        });

        await wrapper.find('input').setValue(1);
        await wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain('Impossible de libérer la place');
    });
});
