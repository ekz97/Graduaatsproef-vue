<template>
  <div class="cart position-absolute top-0 end-0">
    <b-dropdown variant="success" no-caret right text="Winkelmandje" class="me-2">
      <b-dropdown-item v-for="(product, index) in producten" :key="index">
        <div class="d-flex align-items-center">
          <img :src="require(`../assets/producten/${product.id}.jpg`)" :alt="product.name" class="product-image mr-2" />
          <div>
            <strong>{{ product.name }}</strong> - {{ product.qty }}x €{{ product.price }}
          </div>
        </div>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>
        <button type="button" class="btn btn-primary w-100 mt-2" @click="handleBetaal">Betaal €{{ totalPrice }}</button>
      </b-dropdown-item>
    </b-dropdown>
    <b-alert v-if="showMessage" variant="success" dismissible class="mt-2" @dismissed="showMessage = false">
      Betaling geslaagd
    </b-alert>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      showMessage: false,
    };
  },
  computed: {
    ...mapState('shoppingCart', ['producten']),
    totalProducts() {
      return this.producten.reduce((total, product) => total + product.qty, 0);
    },
    totalPrice() {
      return this.producten.reduce((total, product) => total + product.qty * parseFloat(product.price), 0).toFixed(2);
    },
  },
  methods: {
    ...mapActions('shoppingCart', ['emptyCart', 'removeProduct', 'increaseQty', 'decreaseQty']),
    handleBetaal() {
      this.emptyCart();
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    },
  },
};
</script>

<style>
.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.cart {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.b-alert.slide-fade-enter-active,
.b-alert.slide-fade-leave-active {
  transition: opacity 0.3s ease;
}

.b-alert.slide-fade-enter,
.b-alert.slide-fade-leave-to {
  opacity: 0;
}
</style>
