<script setup>
import { ref } from 'vue';
import homeTable from './Home/HomeTable.vue'
import { useRoute } from "vue-router";
const route = useRoute();
console.log("aaaaaaaaaaaaaaaaaaa",route.params.uri)
</script>

<template>

   <div>
    <div v-if="!route.params.uri" class="tw-min-h-screen">
   <homeTable />
 
   </div>
   <router-view  v-else />
   </div>

</template>

<style scoped>

</style>