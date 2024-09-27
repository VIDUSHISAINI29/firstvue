<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

import { useFruits } from "@/composables/FetchApi.js";
import { onMounted, ref, defineProps, watch, watchEffect } from "vue";
const isLoading = ref(false);
const props = defineProps({
   uri: String,
});

const eachProductData = ref([]);
async function fetchOrganicData() {
   try {
      const res = await fetch(`https://post-api.hrarmy.in/posts/${props.uri}`);
      eachProductData.value = await res.json();
      console.log(eachProductData.value);
   } catch (error) {
      console.log(error);
   }
}
// watchEffect(() => props.uri);

// Initially fetch data on mount
onMounted(() => {
   fetchOrganicData();
   isLoading.value = true;
});
//  v-for="fruit in eachProductData"
</script>

<template>
   <div v-if="isLoading" class="tw-flex tw-justify-center tw-min-h-screen">
      <div
         :key="eachProductData.id"
         class="tw-w-3/4 tw-p-1 tw-flex-col tw-flex tw-items-center">
         <div class="tw-w-full tw-p-1 tw-flex tw-justify-center">
            <div class="image tw-w-1/2 tw-p-2">
               <img class="tw-w-4/5" :src="eachProductData.image" alt="" />
            </div>
            <div
               class="detail tw-w-1/2 tw-p-2 tw-flex tw-flex-col tw-items-center tw-justify-around">
               <span
                  class="tw-block tw-text-6xl tw-text-center tw-text-yellow-600 tw-font-bold">
                  {{ eachProductData.name }}
               </span>
               <span
                  class="tw-block tw-text-4xl tw-text-center tw-text-red-600 tw-font-semibold">
                  Category : {{ eachProductData.category }}
               </span>
               <span
                  class="tw-block tw-text-3xl tw-text-center tw-text-red-600 tw-font-semibold">
                  Cooking Time : {{ eachProductData.cookingTime }}
               </span>
            </div>
         </div>
         <div class="tw-w-full tw-p-3">
            <span class="tw-text-gray-950 tw-text-3xl font-semibold">
               Ingredients :
            </span>
            <pre
               class="tw-text-gray-950 tw-inline tw-text-2xl font-semibold"
               v-for="item in eachProductData.ingredients"
               >{{ item }}, </pre
            >
            <span
               class="tw-block tw-mt-5 tw-text-xl tw-text-center tw-text-gray-600 tw-font-semibold">
               <pre
                  class="tw-text-gray-950 tw-text-3xl tw-inline tw-font-semibold">
 Recipe: </pre
               >
               {{ eachProductData.recipe }}
            </span>
         </div>
         <!-- {{ route.params.uri }} -->
      </div>
   </div>
</template>

<style scoped></style>
