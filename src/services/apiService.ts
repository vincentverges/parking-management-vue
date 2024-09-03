import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://0.0.0.0:8000/api',
    withCredentials: false,
})

export default {
    async getParkingSpots() {
        return apiClient.get('/spot')
    },
    async createTicket() {
        return apiClient.post('/spot/create_ticket/')
    },
    async releaseSpot(spotNumber: number) {
        return apiClient.post(`/spot/${spotNumber}/release/`);
    },
}