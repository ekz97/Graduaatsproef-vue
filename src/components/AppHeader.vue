<template>
  <div>
    <h1>Delhaize webshop</h1>
    <!-- <SearchBar /> -->
     <nav-bar />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import NavBar from './NavBar.vue';

// import SearchBar from './SearchBar.vue';

export default {
  components: { NavBar },
  // components: { SearchBar },
  setup() {
    const router = useRouter();
    const handleAanmeldenClick = () => {
      router.push('/registratie');
    };
    return {
      handleAanmeldenClick,
    };
  },
};
</script>
