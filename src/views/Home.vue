<template>
  <div class="home">
    <product-carousel class="carousel" />
    <create-new-order class="createNew" />
    <email-input class="email" />

    <div class="content">
      <p>
        A restaurant is a business that prepares and serves food and drinks to
        customers in exchange for money. Meals are generally served and eaten on
        the premises, but many restaurants also offer take-out and food delivery
        services. Restaurants vary greatly in appearance and offerings,
        including a wide variety of cuisines and service models ranging from
        inexpensive fast food restaurants and cafeterias, to mid-priced family
        restaurants, to high-priced luxury establishments.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewOrder from "@/components/CreateNewOrder.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";
import EmailInput from "@/components/EmailInput.vue";

export default {
  name: "home",
  components: {
    CreateNewOrder,
    ProductCarousel,
    EmailInput
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin-top: 50px;
  @include large {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 25% 25% 25% 25%;
  }
}
.carousel {
  grid-column: 1 / 4;
}
.email {
  grid-column: 1 / 3;
}
.content {
  grid-column: 3 / 5;
  text-align: left;
  padding: 20px;
  background: white;
  display: inline-block;
}
</style>
