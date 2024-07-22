<template>
  <div>
    <div v-for="site in filteredSites" :key="site.id" class="site-item">
      <SiteCard :site="site"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, defineProps } from 'vue';
import { useSiteStore } from '@/stores/site';
import SiteCard from './SiteCard.vue';

const props = defineProps({
  searchQuery: {
    type: String,
    required: true
  }
});

const siteStore = useSiteStore();

const sites = computed(() => siteStore.sites);

const filteredSites = computed(() => {
  if (!props.searchQuery) {
    return sites.value;
  }
  return sites.value.filter(site =>
      site.title.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      site.address.street.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      site.address.city.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      site.contacts.main.firstName.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      site.contacts.main.lastName.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});

onMounted(() => {
  siteStore.fetchSites();
});
</script>
