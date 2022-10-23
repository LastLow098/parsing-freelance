<template>
  <div :class="'snack snack-' + style" v-show="isShow">
    <span class="snack__title">{{ message }}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'app-snack',
  computed: {
    ...mapGetters({
      isShow: 'getIsShow',
      message: 'getMessage',
      style: 'getStyle'
    })
  },
  watch: {
    isShow(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.snack {
  z-index: 3;
  position: fixed;
  right: 30px;
  top: 30px;
  border-radius: 5px;
  box-shadow: 0 0 15px $shadow-color;
  padding: 15px 20px;

  transition: all .2s linear;

  &-error {
    background: rgb(232, 77, 77);
    color: #ffffff;
  }

  &-loading {
    background: #ffffff;
    color: #000000;
  }
}
</style>