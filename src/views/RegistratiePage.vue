<template>
  <div :class="$style.body">
    <header :class="$style.header">
      <router-link to="/">
 
      </router-link>
    </header>
    <div :class="$style.container">
      <div :class="$style.imageContainer">
        <img src="../assets/GirlHoldingLeeks.png" alt="" />
        <p :class="$style.imageText"> Hallo Goebeziger!</p>
      </div>
      <div :class="$style.formContainer">
        <div :class="$style.textContainer">
          <p :class="$style.greet">Hallo!</p>
          <p :class="$style.instruction">
            Voer je login gegevens in om te kunnen aanmelden!
          </p>
        </div>
        <div :class="$style.form">
          <label for="email">E-mail</label>
          <input type="email" name="email" />
          <label for="wachtwoord">Wachtwoord</label>
          <input type="password" name="wachtwoord" />
          <div :class="$style.buttonContainer">
            <button :class="$style.button">Meld je aan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistratiePage",
};
</script>

<style module>

</style>
