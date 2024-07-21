<template>
  <div>
    <h1>{{ site.title }}</h1>
    <p>{{ site.address.street }}, {{ site.address.city }}</p>
    <div v-for="image in site.images" :key="image">
      <img :src="image" alt="Site Image"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useSiteStore} from "@/stores/site";

const siteStore = useSiteStore();
const route = useRoute();
const siteId = route.params.id;

const site = computed(() => siteStore.sites.find(s => s.id === siteId));

onMounted(() => {
  if (!site.value) {
    siteStore.fetchSites();
  }
});
</script>
