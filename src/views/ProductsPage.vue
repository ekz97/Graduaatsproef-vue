<template>
  <div>
    <product-container v-if="producten && producten.length > 0" :categorie="'Producten'" :producten="producten"/>
    <not-found v-else/>
  </div>
</template>

<script>
import axios from 'axios'
import ProductContainer from '@/components/ProductContainer.vue';
import NotFound from '@/components/NotFound.vue';

export default {
  components: {
    ProductContainer,
    NotFound
  },
  data() {
    return {
      producten: []
    }
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:5298/api/Products");
      this.producten = response.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style >
@import "../assets/constants.css";
</style>
