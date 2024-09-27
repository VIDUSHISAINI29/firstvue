<script setup>

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import { useFruits } from "@/composables/FetchApi.js";
const { fruits, error, loading } = useFruits('https://post-api.hrarmy.in/posts');

console.log('khalo fruits', fruits)
</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-p-1  tw-items-center tw-my-10 tw-min-h-screen">
 
      <div  class="tw-w-4/5 tw-flex tw-p-1 tw-justify-center" >
        <table class="tw-border-gray-800 tw-w-full tw-flex tw-flex-col">
            <thead>
                <tr class="tw-flex  text tw-gap-10">
                    <th class="tw-w-1/4 tw-p-2 tw-text-xl">Name</th>
                    <th class="tw-w-1/4 tw-p-2 tw-text-xl">Glimpse</th>
                    <th class="tw-w-1/4 tw-p-2 tw-text-xl">Category</th>
                    <th class="tw-w-1/4 tw-p-2 tw-text-xl"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fruit in fruits" :key="fruit.id" class="tw-flex text tw-gap-10">
                    <td class="tw-w-1/4 tw-p-2 tw-text-center tw-text-lg tw-flex tw-font-semibold tw-justify-center tw-items-center">{{ fruit.name }}</td>
                    <td class="tw-w-1/4 tw-p-2 tw-text-center tw-text-lg tw-flex tw-font-semibold tw-justify-center tw-items-center"><img class="tw-w-24 tw-h-16" :src="fruit.image" alt=""></td>
                    <td class="tw-w-1/4 tw-p-2 tw-text-center tw-text-lg tw-font-semibold tw-flex tw-justify-center tw-items-center">{{ fruit.category }}</td>
                    <router-link :to="`/home/${fruit.id}`" class="tw-w-1/4  tw-p-3 tw-text-center tw-flex tw-justify-center tw-items-center"><span class="textbg tw-w-32 tw-p-1 tw-rounded-md tw-text-white">See Details</span></router-link>
                </tr>
            </tbody>
        </table>

      </div>
   
  </div>

</template>

<style scoped>
 table{
    border: 1px solid rgb(51, 51, 51);
 }
 tr{
    border-bottom: 1px solid rgb(51, 51, 51);
 }
 .text{
    color: #4E3B31;
 }
 .textbg{
    background-color: #4E3B31;
 }
</style>
