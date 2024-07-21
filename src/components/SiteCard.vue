<template>
  <div class="site-card">
    <img :src="site.images[0]" alt="Site Image" class="site-image" />
    <div class="site-info">
      <h2>{{ site.title }}</h2>
      <p>{{ site.address.street }}, {{ site.address.city }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  site: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.site-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  text-align: center;
}
.site-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.site-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}
.site-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
