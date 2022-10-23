<template>
  <div class="select">
    <div class="select-finish"
         @click="isOptionsShow = !isOptionsShow"
    >
      <span class="select-finish__placeholder" v-if="selectedOptions.length === 0">Выберете биржи</span>
      <i :class="`bi bi-caret-${isOptionsShow ? 'up' : 'down'}-fill select-finish__open`"></i>
      <div class="select-finish__item" v-for="option in selectedOptions" :key="option">{{ option }}</div>
    </div>
    <div class="select-options" v-show="isOptionsShow">
      <div class="select-options__item">
        <app-check
            :label="'Выбрать всё'"
            :id="'all'"
            @update:model-value="actionAll"
        ></app-check>
      </div>
      <div class="select-options__item" v-for="(option, index) in options" :key="option.value">
        <app-check
            :label="option.name"
            :id="option.value"
            :disabled="isActionAll"
            :model-value="checked[index]"
            @update:model-value="changeChecked($event, option, index)"
        ></app-check>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-select',
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      selectedOptions: [],
      isActionAll: false,
      isOptionsShow: false,
      checked: []
    }
  },
  mounted() {
    this.clearChecked()
  },
  methods: {
    changeChecked(checked, option, index) {
      this.checked[index] = checked
      let result;
      if (checked) {
        result = [...this.modelValue, option.value]
        this.selectedOptions = [...this.selectedOptions, option.name]
      } else {
        result = this.modelValue.filter(val => val != option.value)
        this.selectedOptions = this.selectedOptions.filter(val => val != option.name)
      }
      this.$emit('update:modelValue', result)
    },
    actionAll(checked) {
      this.isActionAll = checked
      this.clearChecked()
      if (this.isActionAll) {
        this.$emit('update:modelValue', this.options.map(elem => elem.value))
        this.selectedOptions = this.options.map(elem => elem.name)
      } else {
        this.$emit('update:modelValue', [])
        this.selectedOptions = []
      }
    },
    clearChecked() {
      this.checked = this.options.map(() => false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.select {
  display: inline-flex;
  flex-direction: column;

  &-finish {
    height: 40px;
    position: relative;
    width: 300px;
    box-shadow: 0px 0px 5px $shadow-color;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 5px 15px;
    display: inline-flex;
    align-items: center;

    &__placeholder {
      color: $text-color;
      font-size: 0.9em;
    }

    &__item {
      margin-right: 5px;
      background: $main-color;
      color: #ffffff;
      padding: 5px 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }

    &__open {
      position: absolute;
      right: 10px;
      font-size: 1.1em;
      color: $main-color;
    }
  }

  &-options {
    margin-top: 6px;
    width: 300px;
    box-shadow: 0px 0px 5px $shadow-color;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 10px 15px;
    background: #fff;

    &__item:not(:first-child) {
      margin-top: 5px;
    }
  }
}

</style>