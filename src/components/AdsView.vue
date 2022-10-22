<template>
  <div class="ads">
    <div class="ads__article" v-if="ads.kwork_result?.length !== 0">
      <div class="ads__title">Kwork</div>
      <div class="ads__content">
        <app-ad v-for="ad in ads.kwork_result" :key="ad.id" :ad="ad"/>
      </div>
    </div>

    <div class="ads__article" v-if="ads.freelancehabr_result?.length !== 0">
      <div class="ads__title">Freelance</div>
      <div class="ads__content" >
        <app-ad v-for="ad in ads.freelancehabr_result" :key="ad.id" :ad="ad"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppAd from "@/components/AppAd";
import {mapGetters, mapActions} from "vuex";

export default {
  mounted() {
    this.get()
  },
  name: 'app-ads-view',
  components: {AppAd},
  computed: {
    ...mapGetters({
      ads: 'getAds'
    })
  },
  methods: {
    ...mapActions({
      get: 'getParsing'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.ads {
  margin: 20px;

  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__title {
    margin-left: 20px;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 1.5em;
    color: $text-color;
    border-bottom: 0.5px solid $text-color;
  }
}
</style>