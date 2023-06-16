<template>
  <div class="mainContainer">
    <div v-if="producten.length !== 0">
      <div class="sorteerBar">
        <p class="titel">{{ categorie }}</p>
      </div>
      <div class="productContainer">
        <product-card v-for="product in producten" :key="product.id" :product="product" />
      </div>
    </div>
    <not-found v-else />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import NotFound from "./NotFound.vue";

export default {
  components: {
    ProductCard,
    NotFound,
  },
  props: {
    categorie: String,
    producten: Array,
  },
};
</script>

<style scoped>
@import "../assets/constants.css";

.mainContainer {
  background-color: white;
  border-radius: 20px;
  min-height: 500px;
  padding: 40px;
}

.sorteerBar {
  border-bottom: 1px solid var(--CardBorder);
  padding-bottom: 20px;
  margin-bottom: 40px;
}
.titel {
  font-size: 48px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
}

.productContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 20px;
  justify-content: center;
}
</style>
