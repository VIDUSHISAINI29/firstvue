import {ref, computed, watch, reactive} from 'vue';
import{ defineStore} from 'pinia';
export const globalInput = defineStore('global', () =>{
    const selectedCategory = ref('');
  
    return {selectedCategory};
})