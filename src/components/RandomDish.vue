<template>
  <section v-if="loaded" class="main">
    <div class="dish">
      <div
        class="image"
        :style="{ 'background-image': 'url(' + dish.strMealThumb + ')' }"
      />
      <div class="description">
        <div class="text">
          <h3>{{ dish.strMeal }}</h3>
          <i>{{ dish.strArea }}, {{ dish.strCategory }}</i>
        </div>
        <button @click="generateNew" id="genereateNew">Genereate new</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      loaded: false
    };
  },
  mounted() {
    if (this.dish.strMeal == undefined) this.generateNew();
    this.loaded = true;
  },
  methods: {
    async generateNew() {
      await this.$store.dispatch("getRandomDish");
    }
  },
  computed: {
    dish: function() {
      return this.$store.state.currentOrder.dish;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
.dish {
  height: 450px;

  .image {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center center;
  }
}
.description {
  display: flex;
  justify-content: space-between;

  #genereateNew {
    margin: 1em 0 0 0;
  }
}
</style>
