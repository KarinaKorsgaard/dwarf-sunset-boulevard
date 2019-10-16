<template>
  <div class="order">
    <transition name="fade">
      <button @click="next" class="orderButton">{{buttonText[state]}}</button>
    </transition>
    <main :class="{component: true}">
      <transition name="fade" mode="out-in">
        <random-dish v-if="state=='FOOD'" />
        <drinks-list v-else-if="state=='DRINKS'" />
        <place-order v-else-if="state=='ORDER'" />
        <receipt-viewer v-else-if="state=='RECEIPT'" />
      </transition>
    </main>
  </div>
</template>

<script>
import RandomDish from "@/components/RandomDish";
import DrinksList from "@/components/DrinksList";
import PlaceOrder from "@/components/PlaceOrder";
import ContentBox from "@/components/ContentBox";
import ReceiptViewer from "@/components/ReceiptViewer";

export default {
  data: function() {
    return {
      message: {
        FOOD: "Next, order some drinks",
        DRINKS: "Next, pick date and amount"
      },
      buttonText: {
        FOOD: "Next, order drinks",
        DRINKS: "Next",
        ORDER: "Order",
        RECEIPT: "Back to home"
      }
    };
  },
  mounted() {
    if (this.$store.state.currentOrder.drinks == []) {
      this.buttonText.ORDER = "Update Order";
    }
  },
  computed: {
    state: function() {
      return this.$route.params.state;
    }
  },
  methods: {
    next() {
      if (this.state == "RECEIPT") {
        this.$store.commit("resetOrder");
        this.$router.push("/");
      }
      if (this.state == "ORDER" && this.$store.state.currentOrder.email == "") {
        alert("Please type in your email");
      } else {
        this.$store.commit("orderState", this.getNextState(this.state));
      }
    },
    getNextState(current) {
      switch (current) {
        case "FOOD":
          return "DRINKS";
          break;
        case "DRINKS":
          return "ORDER";
          break;
        case "ORDER":
          return "RECEIPT";
          break;
        default:
          break;
      }
    }
  },
  components: {
    RandomDish,
    DrinksList,
    PlaceOrder,
    ContentBox,
    ReceiptViewer
  }
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .component {
	width: 100%;
	display: flex;
    justify-content: center;
    @include large {
      width: 70%;
    }
  }
  .orderButton {
    width: 300px;
	order: 5;
	margin-top: 30px;
    @include large {
      width: 100%;
      width: auto;
	  float: right;
	  margin-top: 25px;
    }
  }
}
</style>