import { defineStore } from 'pinia';
import api from '../services/api';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        sites: [] as Array<any>,
        currentSite: null,
        filter: '',
        pagination: {
            first: null,
            prev: null,
            next: null,
            last: null,
            current: 1,
            limit: 10
        }
    }),
    actions: {
        async fetchSites(query_param = '') {
            try {
                const response = await api.getSites(query_param);
                this.sites = response.data;

                const linkHeader = response.headers['link'];
                if (linkHeader) {
                    const links = linkHeader.split(',').reduce((acc, link) => {
                        const [url, rel] = link.split(';');
                        acc[rel.match(/rel="(.+)"/)[1]] = url.trim().slice(1, -1);
                        return acc;
                    }, {});

                    this.pagination = {
                        ...this.pagination,
                        first: links.first || null,
                        prev: links.prev || null,
                        next: links.next || null,
                        last: links.last || null
                    };
                }
            } catch (error) {
                console.error('Failed to fetch sites', error);
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
        setPage(page: number) {
            this.pagination.current = page;
        },
        setLimit(limit: number) {
            this.pagination.limit = limit;
        }
    },
    getters: {
        filteredSites(state) {
            return state.sites.filter(site => site.title.includes(state.filter));
        }
    }
});
