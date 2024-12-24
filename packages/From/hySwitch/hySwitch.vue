<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();

defineProps({
  // 默认值
  // value: {
  //   type: Boolean,
  //   default: false,
  // },
  // loading: {
  //   type: Boolean,
  //   default: false
  // },
  // disabled: {
  //   type: Boolean,
  //   default: false
  // },
  // size:{
  //   type: String,
  //   default: '26px',
  // },
  // activeColor: {
  //   type: String,
  //   default: '#00A758'
  // },
  // inactiveColor: {
  //   type: String,
  //   default: 'rgba(120, 120, 128, 0.16)'
  // },
  // activeValue: {
  //   type: [String, Number, Boolean],
  //   default: true
  // },
  // inactiveValue: {
  //   type: [String, Number, Boolean],
  //   default: false
  // }
})
</script>

<template>
  <!-- <van-switch 
    :value="value"
    :size="size"
    :activeColor="activeColor"
    :inactiveColor="inactiveColor"
    :activeValue="activeValue"
    :inactiveValue="inactiveValue"
  /> -->
  <van-switch 
    v-bind="attrs"
  />
</template>

<style lang="less" scoped>
</style>