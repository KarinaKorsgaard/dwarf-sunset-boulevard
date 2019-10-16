<template>
  <!--<div class="newOrder">
    <content-box @clicked="startOrder">
      <template v-slot:content>Click to create a new order</template>
      <template v-slot:button-name>Create new order</template>
    </content-box>
  </div>-->
  <button id="createOrderButton" @click="startOrder">Create new order</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: "createNewOrder",
  mounted() {},
  components: {},
  methods: {
    startOrder() {
      this.$store.commit("orderState", "FOOD");
    }
  }
};
</script>
<style lang="scss" scoped>
#createOrderButton {
  margin: 20px 0 40px 0;
  padding-left: 20px;
  padding-right: 20px;
  @include large {
    margin-left: 20px;
  }
}
</style>
