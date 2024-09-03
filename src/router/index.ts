import { createRouter, createWebHistory } from 'vue-router';
import ParkingList from "../components/ParkingList.vue";

const routes = [
    {
        path: '/',
        name: 'ParkingList',
        component: ParkingList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;