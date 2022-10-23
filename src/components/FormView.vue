<template>
  <div class="form-parsing">
    <div class="form-parsing__title">Параметры поиска</div>
    <app-select
        :model-value="source"
        @update:model-value="setSource"
        :options="options"
    ></app-select>
    <div class="form-parsing__keywords">
      <input
          class="form-parsing__keywords_input"
          type="text"
          placeholder="Ключевые слова (через запятую)"
          :value="keywords"
          @input="setKeywords($event.target.value)"
      >
    </div>
    <app-button class="form-parsing__btn" @click="createPars">Поиск</app-button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'app-form-view',
  computed: {
    ...mapGetters({
      source: 'getSource',
      options: 'getOptions',
      keywords: 'getKeywords'
    })
  },
  methods: {
    ...mapMutations({
      setKeywords: 'setKeywords',
      setSource: 'setSource'
    }),
    ...mapActions({
      createPars: 'createPars',
      getPars: 'getParsing'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.form-parsing {
  margin: 20px;
  display: inline-flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }


  &__title {
    font-size: 1.5em;
    font-weight: 500;
  }

  &__keywords {
    &_input {
      height: 40px;
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
  }

  &__btn {
    width: 300px;
  }
}
</style>