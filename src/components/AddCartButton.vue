<template>
  <b-button class="add-to-cart-btn" @click="addProduct(product)">
    <span class="button-text">Toevoegen</span>
  </b-button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapActions('shoppingCart', ['addProduct']),
  },
};
</script>

<style scoped>
.add-to-cart-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: darkblue;
}

.button-text {
  display: inline-block;
}
</style>
