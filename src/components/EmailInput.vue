<template>
  <div class="email">
	  <p>Enter your email</p>
    <input v-model="email" :placeholder="email == '' ? 'Enter email' : email" />
    <button v-if="state==undefined" @click="find">Find previous order</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      emailsToCheck: ["dad@dwarf.com", "hej@gmail.com"]
    };
  },
  methods: {
    find() {
      if (this.emailsToCheck.includes(this.email)) {
        this.$store.commit("setToDefaultOrder", this.email);
        this.$router.push(`/order/FOOD`);
      } else {
        alert("The email does not exist. Try hej@gmail.com");
      }
    }
  },
  computed: {
    email: {
      get: function() {
        return this.$store.state.currentOrder.email;
      },
      set: function(val) {
        this.$store.commit("setCurrentOrderEmail", val);
      }
    },
    state: function() {
      return this.$route.params.state;
    }
  }
};
</script>

<style lang="scss" scoped>
.email {
  button {
	margin: 20px auto;
	width: auto;
	padding-left: 20px;
	padding-right: 20px;
	float:left;
  }
}
input {
  height: 50px;
  width: 280px;
  border: 1px $grey solid;
  padding-left: 20px; 
}
</style>