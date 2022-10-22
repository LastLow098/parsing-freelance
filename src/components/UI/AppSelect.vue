<template>
  <select :value="modelValue" @change="changeSelect">
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
  name: 'app-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeSelect(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  select {
    width: 300px;
    padding: 5px;
  }
</style>