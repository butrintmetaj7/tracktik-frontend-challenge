<template>
  <div class="site-card" @click="navigateToDetails">
    <img :src="site.images[0]" alt="Site Image" class="site-image" />
    <div class="site-details">
      <h2>{{ site.title }}</h2>
      <p>{{ site.address.street }}, {{ site.address.city }}</p>
      <p>{{ site.contacts.main.firstName }} {{ site.contacts.main.lastName }}</p>
    </div>
    <div class="right-arrow">&#x2192;</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  site: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const navigateToDetails = () => {
  router.push({ name: 'site-details', params: { id: props.site.id } });
};
</script>

<style scoped>
.site-card {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  background-color: #fff;
}
.site-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.site-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}
.site-details {
  flex-grow: 1;
  padding-right: 20px;
}
.right-arrow {
  font-size: 24px;
}
</style>
