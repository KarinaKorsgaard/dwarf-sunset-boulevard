<template>
  <nav>
    <img class="logo" :src="require('../assets/logo.svg')" />
    <router-link :to="{ name: 'home' }">Restaurenter</router-link>
    <router-link :to="{ name: 'home' }">Produkter</router-link>
    <router-link :to="{ name: 'home' }">Nyhedsbrev</router-link>
    <router-link :to="{ name: 'home' }">Kontakt</router-link>
  </nav>
</template>

<script>
export default {
  name: "TopNavigation"
};
</script>

<style lang="scss" scoped>
.logo {
  width: 50px;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-around;

  font-size: 0.7em;
  line-height: 70px;
  a {
    color: $textcolor;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
