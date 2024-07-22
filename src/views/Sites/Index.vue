<template>
  <div class="sites">
    <h1>All Sites</h1>
    <input v-model="searchQuery" placeholder="Search sites..." class="search-input" />
    <SiteList :search-query="searchQuery" :current-page="currentPage" :limit="limit"/>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="!pagination.prev">Previous</button>
      <button @click="nextPage" :disabled="!pagination.next">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import SiteList from "@/components/SiteList.vue";
import { useSiteStore } from '@/stores/site';

const searchQuery = ref('');
const siteStore = useSiteStore();
const currentPage = computed(() => siteStore.pagination.current);
const limit = computed(() => siteStore.pagination.limit);

const pagination = computed(() => siteStore.pagination);

const prevPage = () => {
  if (pagination.value.prev) {
    siteStore.setPage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (pagination.value.next) {
    siteStore.setPage(currentPage.value + 1);
  }
};

watch([currentPage, searchQuery], ([newPage, newQuery]) => {
  const query = `q=${newQuery}&_page=${newPage}&_limit=${limit.value}`;
  siteStore.fetchSites(query);
}, { immediate: true, deep: true });
</script>

<style scoped>
.search-input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
.pagination-controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
