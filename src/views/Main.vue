<template>
  <app-change-ad />
  <div class="main">
    <app-form-view />
    <app-ads-view />
  </div>
</template>

<script>
import AppFormView from "@/components/FormView";
import AppAdsView from "@/components/AdsView";
import AppChangeAd from "@/components/ChangeAdView";
export default {
  name: 'app-main',
  components: {AppChangeAd, AppAdsView, AppFormView}
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
  }
</style>