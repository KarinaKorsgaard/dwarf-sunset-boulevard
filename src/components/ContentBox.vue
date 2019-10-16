<template>
  <div>
    <p class="content">
      <slot name="content">content</slot>
    </p>
    <button @click="$emit('clicked')">
      <p class="button">
        <slot name="button-name">button-name</slot>
      </p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
  .content {
    width: 80%;
    margin: 0 auto;
  }
  p {
    margin: 0;
  }
}
</style>
