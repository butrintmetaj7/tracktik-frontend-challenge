<template>
  <div class="sites">
    <h1>All Sites</h1>
    <input v-model="searchQuery" placeholder="Search sites..." class="search-input" />
    <SiteList :search-query="searchQuery"/>
  </div>
</template>

<script setup lang="ts">
import SiteList from "@/components/SiteList.vue";
import  { ref} from "vue";

const searchQuery = ref('');
</script>
<style>
.search-input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

</style>
