<template>
  <button class="add" @click="alert(`U heeft ${id} toegevoegd!`)">
 
    <p>Toevoegen</p>
  </button>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>

</style>
