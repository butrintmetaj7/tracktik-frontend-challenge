import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://tracktik-challenge.staffr.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getSites(query_param: string) {
        return apiClient.get(`/sites?q=${query_param}`);
    },
    getSite(id: string) {
        return apiClient.get(`/sites/${id}`);
    },
};
