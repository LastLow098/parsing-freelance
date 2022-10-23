<template>
  <div class="ads">
    <div v-if="Object.entries(ads).length === 0" class="ads__start">Выберете параметры поиска</div>
    <app-button class="ads__update-btn" v-if="isParsingFinish" @click="parsingAgain">Обновить</app-button>
    <div v-for="option in options" :key="option.value">
      <div class="ads__article" v-if="ads[`${option.name}_result`]?.length">
        <div class="ads__title">{{option.name}}</div>
        <div class="ads__content">
          <app-ad v-for="ad in ads[`${option.name}_result`]" :option="option" :key="ad.id" :ad="ad"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAd from "@/components/AppAdView";
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'app-ads-view',
  components: {AppAd},
  computed: {
    ...mapGetters({
      ads: 'getAds',
      options: 'getOptions',
      isParsingFinish: 'getIsParsingFinish'
    })
  },
  methods: {
    ...mapActions({
      getParsing: 'getParsing',
      show: 'show',
      hide: 'hide'
    }),
    parsingAgain() {
      this.getParsing()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.ads {
  margin: 20px;
  width: 100%;

  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__start {
    font-weight: 600;
    font-size: 1.5em;
    color: $text-color;
    padding-bottom: 20px;
    text-align: center;
  }

  &__update-btn {
    position: absolute;
    right: 30px;
  }

  &__title {
    text-transform: capitalize;
    margin-left: 20px;
    width: 100%;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 1.5em;
    color: $text-color;
    border-bottom: 0.5px solid $text-color;
  }
}
</style>