<template>
  <div class="sites">
    <h1>All Sites</h1>
    <SiteList/>
  </div>
</template>

<script setup lang="ts">
import SiteList from "@/components/SiteList.vue";

</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: white;
}
</style>