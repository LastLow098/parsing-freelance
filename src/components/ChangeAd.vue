<template>
  <div class="change-ad" v-if="isShow">
    <div class="change-ad__content">
      <div class="change-ad__title">Редактирование объявления</div>

      <input class="change-ad__input" type="text" :value="changingAd?.title">

      <textarea class="change-ad__textarea" :value="changingAd?.article"></textarea>

      <div class="change-ad__btns">
        <app-button>Cохранить</app-button>
        <app-button>Отменить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app-change-ad',
  computed: {
    ...mapGetters({
      isShow: 'getIsShowModal',
      changingAd: 'getChangingAd'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.change-ad {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  &__title {
    font-size: 1.2em;
    text-align: center;
  }

  &__content {
    position: absolute;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > *  {
      margin: 15px 0;
    }
  }

  &__input, &__textarea {
    width: 300px;
    box-shadow: 0px 0px 5px $shadow-color;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 10px 15px;
    border: none;
    color: $text-color;
    font-size: 14px;

    &:active, &:focus {
      outline: none;
    }
  }

  &__input {
    height: 40px;
  }

  &__textarea {
    height: 200px;
  }

  &__btns > * {
    margin: 0 10px;
  }
}
</style>