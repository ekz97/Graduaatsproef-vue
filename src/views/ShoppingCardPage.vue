<template>
  <div class="mainContainer">

    <button class="betaalButton" @click="handleBetaal">
      Betaal
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
  name: 'ShoppingCard',
  computed: {
    ...mapState('shoppingCart.js', ['producten']),
    ...mapState('user', ['email']),
    totalProducts() {
      return this.producten.reduce(
        (total, product) => total + product.qty,
        0
      );
    },
    totalPrice() {
      return this.producten.reduce(
        (total, product) => total + product.qty * product.price,
        0
      );
    }
  },
  methods: {
    ...mapActions('shoppingCart', ['emptyCart', 'removeProduct', 'increaseQty', 'decreaseQty']),
    handleBetaal() {
      if (this.email !== "") {
        const form = {
          id : "string",
          iban: "string",
          amount: 0,
          currency: "EUR",
          transactionId: "string",
          comment: "string"
        };
        // axios.post('http://localhost:5298/api/payments', form)
        //     .then(response => {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         // handle error
        //         console.log(error);
        //     });
        console.log(form);
        this.emptyCart();
        alert("betaling geslaagd!");
      } else {
        alert("meld u aan aub!");
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/constants.css";
</style>
