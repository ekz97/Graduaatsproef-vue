<template>
  <div>
    <NavItem />
    <SearchBar />
   <product-container v-if="producten && producten.length > 0" :categorie="'Producten'" :producten="producten"/>
  </div>
</template>

<script>
import axios from 'axios';
import NavItem from '../components/NavItem.vue';
import SearchBar from '../components/SearchBar.vue';
import ProductContainer from '../components/ProductContainer.vue';

export default {
  data() {
    return {
      producten: [] 
    }
  },
  components: {
    NavItem,
    SearchBar,
    ProductContainer
  },
  methods: {
    fetchProducten: async function() {
      try {
         const response = await axios.get("http://localhost:5298/api/Products");
         this.producten = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchProducten();
  }
}
</script>
