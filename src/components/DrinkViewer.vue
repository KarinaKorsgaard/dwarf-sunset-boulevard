<template>
  <div class="container">
    <img
      v-if="isSeleted"
      :src="require('../assets/checkmark.png')"
      class="badge"
    />
    <img
      v-else
      :src="require('../assets/checkmark-inactive.png')"
      class="badge"
    />
    <img :src="image" />
    <h3 id="drinkName">{{ drink.name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    isSeleted: {
      type: Boolean,
      default: false
    },
    drink: Object
  },
  methods: {
    truncateString(str, length) {
      var str1;
      if (str.length <= length) {
        return str.toString();
      }
      str1 = str.slice(0, length);
      return str1 + "...";
    }
  },
  computed: {
    image: function() {
      return this.drink.image_url;
    },
    description: function() {
      return this.truncateString(this.drink.description, 120, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 220px;
  height: 200px;
  background: $grey;
  text-align: center;
  padding: 20px;
  position: relative;
  cursor: pointer;

  .badge {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
  }
}
#drinkName {
  color: $textcolor;
}
img {
  height: 70%;
  margin: 0 auto;
}
</style>
