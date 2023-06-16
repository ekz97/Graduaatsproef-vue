<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Mijn Webshop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <nav-item
            v-for="categorie in categorieen"
            :key="categorie.id"
            :id="categorie.id"
            :categorie="categorie.name"
            @nav-clicked="toggleMenu"
          ></nav-item>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import NavItem from './NavItem.vue';

export default {
  name: 'NavBar',
  components: {
    'nav-item': NavItem
  },
  data() {
    return {
      categorieen: [],
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:5298/api/Category');
      this.categorieen = response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
.nav-item {
  display: inline-block;
  padding: 0 10px;
}

.nav-link {
  font-weight: 500;
  font-size: 16px;
}

.nav-link:hover {
  color: #fff;
  text-decoration: none;
}

.navbar-brand {
  font-weight: 600;
  font-size: 20px;
}
</style>
