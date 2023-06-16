<template>
  <div class="productCard">
    <div>
      <div class="imgContainer">
        <img class="productImg" :src="require(`../assets/producten/${product.id}.jpg`)" :alt="product.name" />
        <img class="nutriImg" :src="require(`../assets/nutriscore/${product.nutriScore}.svg`)" :alt="product.nutriScore" />
      </div>
      <div class="textContainer">
        <p class="merk">{{ product.brand }}</p>
        <p class="naam">{{ product.name }}</p>
      </div>
    </div>

    <div class="prijsContainer">
      <div class="prijs">
        <p class="bedrag">€{{ product.price }}</p>
        <p class="type">{{ product.priceType.type }}</p>
      </div>
     <add-cart-button :product="product" />

    </div>
  </div>
</template>

<script>
import AddCartButton from "./AddCartButton.vue";

export default {
  components: {
    AddCartButton,
  },
  props: {
    product: Object,
  },
};
</script>

<style scoped>
@import "../assets/constants.css";

.productCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid var(--CardBorder);
  border-radius: 10px;
}

.imgContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
.productImg {
  width: 150px;
  object-fit: contain;
}
.nutriImg {
  position: absolute;
  height: 30px;
  width: auto;
  bottom: 0;
  left: 0;
}
.merk {
  font-weight: 300;
  font-size: 10px;
}
.naam {
  font-weight: 700;
  font-size: 14px;
}
.prijs {
  padding: 8px 0;
  display: flex;
  align-items: flex-end;
}
.bedrag {
  font-size: 24px;
  font-weight: 700;
}
.type {
  font-size: 12px;
  margin-left: 3px;
  padding-bottom: 2px;
}
</style>
