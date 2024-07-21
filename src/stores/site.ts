import {defineStore} from 'pinia';
import api from '../services/api';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        sites: [] as Array<any>,
        currentSite: null,
        filter: ''
    }),
    actions: {
        async fetchSites() {
            try {
                const response = await api.getSites();
                this.sites = response.data;
            } catch (error) {
                console.error('Failed to fetch site', error);
            }
        },
        async fetchSiteById(id: string) {
            try {
                const response = await api.getSite(id);
                this.currentSite = response.data;
            } catch (error) {
                console.error('Failed to fetch site', error);
            }
        },
    },
    getters: {
        filteredSites(state) {
            return state.sites.filter(site => site.title.includes(state.filter));
        }
    }
});
