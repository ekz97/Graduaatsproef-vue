<template>
  <div id="app">
    <AppHeader />
    <ShoppingCard />
    <AppFooter />

   <router-view :key="$route.fullPath"/>
    

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ShoppingCard from '@/components/ShoppingCard.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ShoppingCard,

  }
}
</script>

<style>
@import "./assets/constants.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
