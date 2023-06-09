<template>
  <div>
    <NavigationItem />
    <ProductSearchBar />
    <ProductListContainer :producten="featuredProducts" />
  </div>
</template>

<script>
import NavigationItem from '../components/NavigationItem.vue';
import ProductSearchBar from '../components/ProductSearchBar.vue';
import ProductListContainer from '../components/ProductListContainer.vue';

export default {
  data() {
    return {
      featuredProducts: [] 
    }
  },
  components: {
    NavigationItem,
    ProductSearchBar,
    ProductListContainer
  }
}
</script>
