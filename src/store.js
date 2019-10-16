import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

const orderStates = {
  NONE: "NONE",
  FOOD: "FOOD",
  DRINKS: "DRINKS",
  ORDER: "ORDER",
  RECEIPT: "RECEIPT"
};

export default new Vuex.Store({
  state: {
    currentOrderState: orderStates.NONE,
    currentOrder: {
      dish: {},
      drinks: [],
      date: "",
      email: "",
      amount: 1
    },
    randomDish: {},
    drinks: [],
    defaultOrder: {
      dish: {},
      drinks: [],
      date: "",
      email: "",
      amount: 1
    }
  },
  mutations: {
    resetOrder(state) {
      state.currentOrder = {
        dish: {},
        drinks: [],
        date: "",
        email: "",
        amount: 1
      };
    },
    orderState(state, newState) {
      if (newState in orderStates) {
        state.currentOrderState = newState;
        router.push(`/order/${newState}`);
      }
    },
    setToDefaultOrder(state, email) {
      state.currentOrder = state.defaultOrder;
      state.currentOrder.email = email;
    },
    setCurrentOrderDish(state, val) {
      state.currentOrder.dish = val;
    },
    setCurrentOrderDate(state, date) {
      state.currentOrder.date = date;
    },
    setCurrentOrderAmount(state, val) {
      state.currentOrder.amount = val;
    },
    setCurrentOrderEmail(state, val) {
      state.currentOrder.email = val;
    },
    setDrinks(state, drinks) {
      state.drinks = drinks;
    },
    setDefaultDish(state, dish) {
      state.defaultOrder.dish = dish;
    },
    setDefaultDrinks(state) {
      state.defaultOrder.drinks = [state.drinks[0], state.drinks[1]];
    },
    updateDrinksOrder(state, drink) {
      const exists = state.currentOrder.drinks.includes(drink);
      if (exists) {
        state.currentOrder.drinks = state.currentOrder.drinks.filter(function(
          item
        ) {
          return item !== drink;
        });
      } else {
        state.currentOrder.drinks.push(drink);
      }
    }
  },
  actions: {
    findEmail(state, email) {
      state.commit("setEmail", email);
    },
    fetchsDrinks(state) {
      axios.get("HTTPS://API.PUNKAPI.COM/V2/BEERS").then(response => {
        state.commit("setDrinks", response.data);
        state.commit("setDefaultDrinks");
      });
    },
    generateDefaultOrder(state) {
      // set random dish default
      axios
        .get("HTTPS://WWW.THEMEALDB.COM/API/JSON/V1/1/RANDOM.PHP")
        .then(response => {
          state.commit("setDefaultDish", response.data.meals[0]);
        });
    },
    getRandomDish(state) {
      axios
        .get("HTTPS://WWW.THEMEALDB.COM/API/JSON/V1/1/RANDOM.PHP")
        .then(response => {
          state.commit("setCurrentOrderDish", response.data.meals[0]);
        });
    }
  }
});
