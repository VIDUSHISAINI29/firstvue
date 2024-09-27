<script setup>
    import home from '@/views/Home/HomeTable.vue';
    import navbar from '@/layout/Navbar.vue'
    import Footer from './Footer.vue'
    // import homeTable from '@/views/Home/HomeTable.vue'
</script>

<template>
<div>
    <navbar/>
    <!-- <homeTable /> -->
   <RouterView/>
   <Footer />
</div>
   
</template>

<style scoped></style>