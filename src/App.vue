<template>
  <div id="app">
    <top-navigation />
    <transition name="fade" mode="out-in">
      <router-view class="maincontent" />
    </transition>
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation.vue";
export default {
  mounted() {
    this.$store.dispatch("fetchsDrinks");
    this.$store.dispatch("generateDefaultOrder");
  },
  components: {
    TopNavigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  margin: 0 auto;
  .maincontent {
    margin-top: 80px;
  }
  text-align: left;
  color: $textcolor;
  h1,
  h2,
  h3 {
    color: $primary;
  }
}
</style>
