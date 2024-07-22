<template>
  <div>
    <div v-for="site in sites" :key="site.id" class="site-item">
      <SiteCard :site="site"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, watch } from 'vue';
import SiteCard from './SiteCard.vue';
import { useSiteStore } from '@/stores/site';

const props = defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
});

const siteStore = useSiteStore();
const sites = computed(() => siteStore.sites);

const fetchSites = () => {
  const query = `q=${props.searchQuery}&_page=${props.currentPage}&_limit=${props.limit}`;
  siteStore.fetchSites(query);
};

watch([() => props.searchQuery, () => props.currentPage], fetchSites, { immediate: true });
</script>
