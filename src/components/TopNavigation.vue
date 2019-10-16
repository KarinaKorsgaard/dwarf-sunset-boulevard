<template>
  <nav v-if="!isSmall">
    <img class="logo" :src="require('../assets/logo.svg')" />
    <router-link :to="{ name: 'home' }">Restaurenter</router-link>
    <router-link :to="{ name: 'home' }">Produkter</router-link>
    <router-link :to="{ name: 'home' }">Nyhedsbrev</router-link>
    <router-link :to="{ name: 'home' }">Kontakt</router-link>
  </nav>
  <nav v-else>
    <img class="logo" :src="require('../assets/logo.svg')" />
    <img class="burger" :src="require('../assets/burger.png')" />
  </nav>
</template>

<script>
export default {
  name: "TopNavigation",
  data: function() {
    return {
      isSmall: false
    };
  },
  mounted() {
    this.resize();
    window.onresize = this.resize;
  },
  methods: {
    resize() {
      this.isSmall = document.body.clientWidth < 399;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-between;
  @include medium {
    justify-content: space-around;
  }

  font-size: 0.7em;
  line-height: 70px;
  a {
    color: $textcolor;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
  .logo {
    width: 50px;
    margin: 10px;
  }
  .burger {
    height: 20px;
    width: 30px;
    align-self: center;
    margin: 10px;
    cursor: pointer;
  }
}
</style>
