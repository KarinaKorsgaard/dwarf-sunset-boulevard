<template>
  <section id="amountPicker">
    <p>Select amount of people</p>
    <div class="container">
      <img
        :src="require('@/assets/arrow-left.png')"
        @click="getClippedAmount(-1)"
        :class="{ disabled: amount < 2 }"
      />
      <h2>{{ amount }}</h2>
      <img
        :src="require('@/assets/arrow-right.png')"
        @click="getClippedAmount(1)"
        :class="{ disabled: amount > 9 }"
      />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getClippedAmount(val) {
      this.amount = Math.min(Math.max(this.amount + val, 1), 10);
    }
  },
  computed: {
    amount: {
      get: function() {
        return this.$store.state.currentOrder.amount;
      },
      set: function(val) {
        this.$store.commit("setCurrentOrderAmount", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#amountPicker {
  width: 100%;
  max-width: 258px;
  p {
    margin-top: 0;
  }
}
img {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.disabled {
  opacity: 0.5;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $grey;
  padding: 0px 20px 0px 20px;
}
</style>
