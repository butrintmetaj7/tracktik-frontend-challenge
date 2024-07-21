import { defineStore } from 'pinia';
import api from '../services/api';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        sites: [] as Array<any>,
        filter: ''
    }),
    actions: {
        async fetchSites() {
            const response = await api.getSites();
            this.sites = response.data;
        }
    },
    getters: {
        filteredSites(state) {
            return state.sites.filter(site => site.title.includes(state.filter));
        }
    }
});
