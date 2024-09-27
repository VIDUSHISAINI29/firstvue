import { ref, onMounted } from 'vue';

export function useFruits(url) {
  const fruits = ref([]);
  const error = ref(null);
  const loading = ref(true);

  const fetchFruits = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      fruits.value = Array.isArray(data) ? data : [];
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchFruits();
  });

  return {
    fruits,
    error,
    loading
  };
}
