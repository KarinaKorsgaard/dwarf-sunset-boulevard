<template>
  <main class="placeOrder">
    <h3>Pick date and time</h3>
    <date-picker class="date"></date-picker>
    <amount-picker class="amount"></amount-picker>
    <email-input class="email"></email-input>
  </main>
</template>

<script>
// import DatePicker from "@/components/DateAndTimePicker.vue";
import DatePicker from "@/components/DatePicker.vue";
import AmountPicker from "@/components/AmountPicker.vue";
import EmailInput from "@/components/EmailInput.vue";

export default {
  components: {
    DatePicker,
    AmountPicker,
    EmailInput
  }
};
</script>

<style lang="scss" scoped>
.placeOrder {
  @include small {
    .amount,
    .email {
      margin-top: 20px;
    }
  }
  @include medium {
    .amount,
    .email {
      margin-top: 20px;
    }
  }
  .amount,
  .email {
    margin-top: 0px;
  }

  @include large {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 1fr 1fr;
    grid-gap: 20px;
    .date {
      grid-row: 2/5;
    }
    .amount {
      grid-row-start: 2;
    }
    .email {
      grid-row-start: 3;
    }
  }
}
</style>