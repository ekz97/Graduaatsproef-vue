<template>
  <div class="mainContainer">
    <p class="boldError">
      Het spijt ons. Er is een fout opgetreden. Controleer het formulier en
      probeer het opnieuw.
    </p>
    <p class="smallError">
      Er is een fout opgetreden. Probeer het opnieuw.
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
@import "../assets/constants.css";
.mainContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}
.boldError {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
.smallError {
  margin-top: 24px;
  font-size: 24px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
</style>
