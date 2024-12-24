<script setup>
import { toRefs } from 'vue';
const props = defineProps({
// defineProps({
  // v-model 的值
  value: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: true
  },
  border:{
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String,
    default: '#00A758'
  },
  inactiveColor: {
    type: String,
    default: '#969799'
  },
  route: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  },
  beforeChange: {
    type: Function
  }
})
const { value, fixed, border, zIndex, activeColor, inactiveColor, route, placeholder, safeAreaInsetBottom, beforeChange } = toRefs(props)

const emit = defineEmits(['change'])

const handleChange = () => {
  emit('change')
}
</script>

<template>
  <!-- tabbar -->
  <van-tabbar 
    :value="value"
    :fixed="fixed"
    :border="border"
    :zIndex="zIndex"
    :activeColor="activeColor"
    :inactiveColor="inactiveColor"
    :route="route"
    :placeholder="placeholder"
    :safeAreaInsetBottom="safeAreaInsetBottom"
    :beforeChange="beforeChange"
    @change="handleChange"
  >
    <slot></slot>
  </van-tabbar> 
</template>

<style lang="less" scoped></style>