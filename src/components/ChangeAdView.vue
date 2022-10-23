<template>
  <div class="change-ad" v-if="isShow">
    <div class="change-ad__content">
      <div class="change-ad__title">Редактирование объявления</div>

      <input class="change-ad__input" type="text"
             v-model="changingAd.title">

      <textarea class="change-ad__textarea"
                v-model="changingAd.article"></textarea>

      <div class="change-ad__btns">
        <app-button @click="changeAd">Cохранить</app-button>
        <app-button @click="setIsShow(false)">Отменить</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'app-change-ad',
  computed: {
    ...mapGetters({
      isShow: 'getIsShowModal',
      changingAd: 'getChangingAd'
    })
  },
  methods: {
    ...mapMutations({
      setChangingAd: 'setChangingAd',
      setIsShow: 'setIsShowModal'
    }),
    ...mapActions({
      changeAd: 'changeAd'
    }),
    change() {
      this.setIsShow(false)
      this.changeAd
    }
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
    width: 500px;
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
    width: 90%;
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