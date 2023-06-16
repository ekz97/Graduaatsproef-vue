<template>
  <div class="input-group my-3">
    <input
      type="text"
      class="form-control"
      placeholder="Zoek producten"
      aria-label="Zoek producten"
      v-model="searchTerm"
      @keydown.enter="search"
    />
    <button class="btn btn-outline-secondary" type="button" @click="search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.searchTerm}`);
      this.searchTerm = "";
    },
  },
};
</script>
