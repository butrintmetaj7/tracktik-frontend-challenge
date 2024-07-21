import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://tracktik-challenge.staffr.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getSites() {
        return apiClient.get('/sites');
    },
    getSite(id: string) {
        return apiClient.get(`/sites/${id}`);
    },
};
