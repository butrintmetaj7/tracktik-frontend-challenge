<template>
  <div v-if="site" class="details-card">
    <div class="header">
      <h1>Scheduling</h1>
      <div class="menu-icon">&#x2630;</div>
    </div>
    <!-- Header with navigation and title -->
    <!-- Site Information Section -->
    <div class="site-info">
      <button @click="goBack" class="back-button">&#x2190;</button>
      <img :src="site.images[0]" alt="Site Image" class="rounded-image"/>
      <div>
        <h2>{{ site.title }}</h2>
        <p>{{ site.address.street }}, {{ site.address.city }}</p>
        <p>{{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
      </div>
    </div>

    <div class="contact-details">
      <div class="contact-row">
        <i class="icon">&#x1F464;</i>
        <div>
          <p>{{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
          <p class="subtext">{{ site.contacts.main.jobTitle }}</p>
        </div>
      </div>
      <div class="contact-row">
        <i class="icon">&#x2706;</i>
        <p>{{ site.contacts.main.phoneNumber }}</p>
      </div>
      <div class="contact-row">
        <i class="icon">&#x2709;</i>
        <p>{{ site.contacts.main.email }}</p>
      </div>
      <div class="contact-row">
        <i class="icon">&#x1F4CD;</i>
        <p>{{ site.contacts.main.address.street }}, {{ site.contacts.main.address.city }}</p>
        <p>{{ site.contacts.main.address.state }}, {{ site.contacts.main.address.country }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading site details...</p>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useSiteStore} from '@/stores/site';

const router = useRouter();
const siteStore = useSiteStore();
const route = useRoute();

const siteId = computed(() => route.params.id);
const site = computed(() => siteStore.currentSite);

const fetchSite = async () => {
  await siteStore.fetchSiteById(siteId.value);
};

onMounted(fetchSite);
watch(siteId, fetchSite);

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.details-card {
  border: 1px solid #ddd;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: #181818;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.menu-icon {
  font-size: 24px;
}

.rounded-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.site-info {
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
}

.contact-details {
  padding: 10px;
}

.contact-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  font-size: 24px;
  margin-right: 10px;
}

.subtext {
  color: gray;
  font-size: smaller;
}
</style>
