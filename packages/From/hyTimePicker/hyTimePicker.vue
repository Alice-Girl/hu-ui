<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  },
  columnsType: {
    type: String,
  },
  minHour: {
    type: [Number, String],
  },
  maxHour: {
    type: [Number, String],
  },
  minMinute: {
    type: [Number, String],
  },
  maxMinute: {
    type: [Number, String],
  },
  minSecond: {
    type: [Number, String],
  },
  maxSecond: {
    type: [Number, String],
  },
  minTime: {
    type: String,
  },
  maxTime: {
    type: String,
  },
  title: {
    type: String,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  showToolbar: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  filter: {
    type: Function,
  },
  formatter: {
    type: Function,
  },
  optionHeight: {
    type: [Number, String],
  },
  visibleOptionNum: {
    type: [Number, String],
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000
  },
})
defineEmits(['update:modelValue'])

</script>

<template>
  <van-time-picker 
    :value="modelValue"
    :columnsType="columnsType"
    :minHour="minHour"
    :maxHour="maxHour"
    :minMinute="minMinute"
    :maxMinute="maxMinute"
    :minSecond="minSecond"
    :maxSecond="maxSecond"
    :minTime="minTime"
    :maxTime="maxTime"
    :title="title"
    :confirmButtonText="confirmButtonText"
    :cancelButtonText="cancelButtonText"
    :showToolbar="showToolbar"
    :loading="loading"
    :readonly="readonly"
    :filter="filter"
    :formatter="formatter"
    :optionHeight="optionHeight"
    :visibleOptionNum="visibleOptionNum"
    :swipeDuration="swipeDuration"
    @input="$emit('update:modelValue', $event.target.value)" 
  />
</template>

<style lang="less">
</style>