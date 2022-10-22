<template>
  <div class="form-parsing">
    <app-select v-model="selectedValue" :options="options"></app-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: 'kkk',
          value: "2"
        },
        {
          name: 'kkk2',
          value: "1"
        }
      ],
      selectedValue: ""
    }
  },
  watch: {
    selectedValue(newValue) {
      console.log(newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-parsing {

  }
</style>