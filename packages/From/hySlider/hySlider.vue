<script setup>
// import { useAttrs, toRefs } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()

// const props = defineProps({
//   value: {
//     type: Number,
//     default: 0
//   },
//   min: {
//     type: [String, Number],
//     default: 0
//   },
//   max: {
//     type: [String, Number],
//     default: 100
//   },
//   step: {
//     type: Number,
//     default: 1
//   },
//   barHeight: {
//     type: [String, Number],
//     default: '8px'
//   },
//   buttonSize: {
//     type: [String, Number],
//     default: '24px'
//   },
//   activeColor: {
//     type: String,
//     default: '#00A758'
//   },
//   inactiveColor: {
//     type: String,
//     default: '#e5e5e5'
//   },
//   range: {
//     type: Boolean,
//     default: false
//   },
//   disabled: {
//     type: Boolean,
//     default: false
//   },
//   readonly: {
//     type: Boolean,
//     default: false
//   },
//   vertical: {
//     type: Boolean,
//     default: false
//   }
// })
// const {value, min, max, step, barHeight, buttonSize, activeColor, inactiveColor, range, disabled, readonly, vertical  } =  toRefs(props)

// const emit = defineEmits(['change'])
// const handleChange = (val) => {
//   emit('change', val)
// }
</script>

<template>
<!-- <van-slider
    v-bind="attrs"
    :value="value"
    :min="min"
    :max="max"
    :step="step"
    :bar-height="barHeight"
    :button-size="buttonSize"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :range="range"
    :disabled="disabled"
    :readonly="readonly"
    :vertical="vertical"
    @change="handleChange" 
>
</van-slider> -->

<van-slider
    v-bind="attrs"
>
</van-slider>
</template>

<style lang="less">
</style>