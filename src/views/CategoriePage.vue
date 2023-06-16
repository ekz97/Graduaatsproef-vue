<template>
  <div>
    <NavItem />
    <SearchBar />
    <ProductContainer :categorie="categorie.name" :producten="producten" />
  </div>
</template>

<script>
import axios from 'axios';
import NavItem from '../components/NavItem.vue';
import SearchBar from '../components/SearchBar.vue';
import ProductContainer from '../components/ProductContainer.vue';

export default {
  name: 'CategoryPage',
  components: {
    NavItem,
    SearchBar,
    ProductContainer
  },
  data() {
    return {
      producten: [],
      categorie: {}
    };
  },
  methods: {
    async fetchProducten() {
      try {
        const response = await axios.get(`http://localhost:5298/api/Category/${this.$route.params.id}/Products`);
        this.producten = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategorie() {
      try {
        const response = await axios.get(`http://localhost:5298/api/Category/${this.$route.params.id}`);
        this.categorie = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchProducten();
    this.fetchCategorie();
  }
};
</script>
