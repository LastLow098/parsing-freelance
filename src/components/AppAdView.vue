<template>
  <div class="ad">
    <div class="ad__title">{{ ad.title }}</div>
    <div class="ad__keywords">
      <div class="ad__keywords_item" v-for="tag in getTags(ad.keyword)" :key="tag">{{ tag }}</div>
    </div>
    <div class="ad__about">{{ ad.article }}</div>

    <div class="ad__btns">
      <app-button>
        <a :href="ad.url">Перейти</a>
      </app-button>
      <app-button @click="openModal(ad)">
        <i class="bi bi-pen"></i>
      </app-button>
      <app-button @click="removeAd(ad.id)">
        <i class="bi bi-x-lg"></i>
      </app-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'app-ad',
  props: {
    ad: {
      type: Object,
      default: () => {
      }
    },
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      deleteAd: 'deleteAd'
    }),
    ...mapMutations({
      setAd: 'setChangingAd',
      setIsShowModal: 'setIsShowModal',
      setOption: 'setActiveOption'
    }),
    getTags(keywords) {
      return keywords.split(', ')
    },
    openModal(ad) {
      this.setAd({...ad});
      this.setOption(this.option)
      this.setIsShowModal(true)
    },
    removeAd(id) {
      this.setOption(this.option)
      this.deleteAd(id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.ad {
  margin: 20px;
  width: calc(100% / 2 - 40px);
  padding: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 0 0 15px $shadow-color;
  position: relative;

  &__title {
    font-size: 1.2em;
    font-weight: 500;
    color: $text-color;
  }

  &__about {
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 50px;
  }

  &__btns {
    position: absolute;

    right: 20px;
    bottom: 20px;

    a {
      color: #fff;
      text-decoration: none;
    }

    & > * {
      margin-left: 10px;
    }
  }

  &__keywords {
    margin-bottom: 20px;

    &_item {
      margin: 5px 5px 5px 0;
      display: inline-block;
      color: #fff;
      background: $main-color;
      padding: 5px 10px;
      font-size: 0.8em;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }
  }
}
</style>