<template>
  <ProductContainer
    :categorie="`Resultaat voor: ${term}`"
    :producten="producten"
  />
</template>

<script>
import axios from "axios";
import ProductContainer from "@/components/ProductContainer.vue";

export default {
  components: {
    ProductContainer,
  },
  data() {
    return {
      producten: [],
    };
  },
  computed: {
    term() {
      return this.$route.params.term;
    },
  },
  watch: {
    term: {
      immediate: true,
      handler(newValue) {
        this.fetchProducten(newValue);
      },
    },
  },
  methods: {
    async fetchProducten(term) {
      try {
        const response = await axios.get(`http://localhost:5298/api/Products/${term}`);
        this.producten = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
