<template>
  <main>
    <div v-for="(item, index) in drinks" :key="index" @click="setDrink(item)">
      <drink-viewer :drink="item" :isSeleted="getSelected(item)" />
    </div>
  </main>
</template>

<script>
import DrinkViewer from "@/components/DrinkViewer";
export default {
  components: {
    DrinkViewer
  },
  methods: {
    setDrink(item) {
      this.$store.commit("updateDrinksOrder", item);
    },
    getSelected(item) {
      return this.$store.state.currentOrder.drinks.includes(item);
    }
  },
  computed: {
    drinks: function() {
      return this.$store.state.drinks;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-gap: 10px;

  @include small {
    grid-template-columns: 1fr;
  }
  @include medium {
    grid-template-columns: 1fr;
  }
  @include large {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
