<template>
  <div>
    <div v-for="site in sites" :key="site.id" class="site-item">
      <SiteCard :site="site"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, defineProps,watch } from 'vue';
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

onMounted(() => {
  siteStore.fetchSites(props.searchQuery);
});

watch(() => props.searchQuery, (newQuery) => {
    siteStore.fetchSites(newQuery);
}, { immediate: true });

</script>
