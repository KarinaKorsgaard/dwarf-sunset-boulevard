<template>
  <div id="datePickerContainer">
    <date-picker v-model="date" :inline="true" :disabled-dates="disabledDates" id="datePicker"></date-picker>
  </div>
</template>

<script>
import DatePicker from "vuejs-datepicker";
export default {
  data: function() {
    return {
      disabledDates: {
        to: this.getYesterDay()
      }
    };
  },
  mounted() {
    this.$store.commit("setCurrentOrderDate", new Date().toDateString());
  },
  components: {
    DatePicker
  },
  methods: {
    getYesterDay() {
      var date = new Date();
      date.setDate(date.getDate() - 1);
      return date;
    }
  },
  computed: {
    date: {
      get: function() {
        return this.$store.state.currentOrder.date;
      },
      set: function(value) {
        this.$store.commit("setCurrentOrderDate", value.toDateString());
      }
    }
  }
};
</script>
<style lang="scss">
.vdp-datepicker__calendar {
  .cell {
    border-radius: px;
    transition: color 0.4s;
    transition: background-color 0.3s;
    &:not(.blank):not(.disabled):not(.selected).day,
    &:not(.blank):not(.disabled):not(.selected).month,
    &:not(.blank):not(.disabled):not(.selected).year {
      &:hover {
        border: none !important;
        background-color: $grey !important;
      }
    }

    &.selected {
      background-color: $secondary !important;
      color: white;
      font-weight: bold;
      &:hover {
        border: none !important;
      }
    }
  }
}
</style>