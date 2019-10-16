<template>
  <section id="receipt">
    <h2>Your order:</h2>
    <p>1 x {{ order.dish.strMeal }}</p>

    <template v-for="(item, index) in order.drinks">
      <p :key="index">1 x {{ item.name }}</p>
    </template>
    <br />
    <p>Amount of people: {{ order.amount }}</p>
    <p>Date: {{ order.date }}</p>
    <p>Email: {{ order.email }}</p>
  </section>
</template>

<script>
export default {
  computed: {
    order: function() {
      return this.$store.state.currentOrder;
    }
  }
};
</script>
<style lang="scss" scoped>
#receipt {
  width: inherit;
}
</style>
