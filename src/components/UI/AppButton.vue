<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'app-button'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/variables";
  .btn {
    cursor: pointer;
    padding: 10px 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background: $main-color;
    border: none;
    color: #ffffff;
    transition: all .2s linear;
    font-size: 16px;

    &:hover {
      box-shadow: 0 0 10px $shadow-color;
    }

    &:active {
      background: rgba(6, 96, 157, 0.79);
    }
  }
</style>