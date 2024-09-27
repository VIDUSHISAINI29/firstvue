<script setup>
import { ref } from "vue";
import { globalInput } from "@/stores/global";
const global = globalInput();
console.log('navbar se globalcat', global.selectedCategory)
console.log("ye hai global variable ki value", global.selectedCategory);
// const inpCategory = ref();
// global.selectedCategory = inpCategory;


  const handleFilterClick = () => {
    global.selectedCategory = 'breakfast';
    global.filterBreakfast(global.selectedCategory);
    
  console.log('i am gc = ', global.selectedCategory)
};

</script>
<template>
   <div class="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center">
      <div
         class="navbar tw-relative tw-w-full tw-p-1 tw-flex tw-justify-center tw-items-center">
         <div
            class="nav_in tw-sticky tw-top-0 tw-left-0 tw-flex tw-w-3/5 tw-p-1 tw-justify-around tw-items-center">
            <div class="logo tw-w-2/5 tw-p-1">
               <img class="tw-w-32 tw-h-20" src="@/assets/recipe.png" alt="" />
            </div>
            <ul
               class="tw-flex tw-gap-12 tw-font-semibold tw-text-gray-900 tw-text-lg tw-items-center">
               <RouterLink
                  class="home tw-py-2 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white"
                  to="/home">
                  Home
               </RouterLink>
               <li @click="handleFilterClick"
                  class="tw-py-2 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
                  Breakfast
               </li>
               <li
                  class="tw-py-2 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
                  Lunch
               </li>
               <li
                  class="tw-py-2 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
                  Dinner
               </li>
            </ul>
         </div>
         <button
            class="tw-px-5 tw-h-12 home tw-text-white tw-font-semibold tw-text-xl tw-rounded-md tw-ml-96">
            Add Recipe
         </button>
      </div>
      <!-- <input
      class="tw-w-2/5 tw-rounded-3xl tw-p-3 tw-m-2"
      v-model="global.selectedCategory"
      type="text"
      placeholder="Search with Category"
    /> -->
   </div>
</template>
<style>
.navbar {
   background-color: #fec0c5;
}

ul li,
.home {
   background-color: #d32f2f;
}
</style>
<script scoped>
import { globalInput } from "@/stores/global";
import { ref } from "vue";
const global = globalInput();
</script>
