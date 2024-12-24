<script setup>
// import { toRefs, useAttrs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()

// const props = defineProps({
//   active: {
//     type: [String, Number],
//     default: 0
//   },
//   direction: {
//     type: String,
//     default: 'horizontal'
//   },
//   activeIcon: {
//     type: String,
//     default: 'check'
//   },
//   inactiveIcon: {
//     type: String,
//   },
//   finishIcon: {
//     type: String
//   },
//   activeColor: {
//     type: String,
//     default: '#00A758'
//   },
//   inactiveColor: {
//     type: String,
//     default: '#999999'
//   },
//   iconPrefix: {
//     type: String,
//     default: 'van-icon'
//   }
// })

// const {active, direction, activeIcon, inactiveIcon, finishIcon, activeColor, inactiveColor, iconPrefix} = toRefs(props)

</script>

<template>
<!-- <van-steps 
  v-bind="attrs"
  :active="active"
  :direction="direction"
  :active-icon="activeIcon"
  :inactive-icon="inactiveIcon"
  :finishIcon="finishIcon"
  :active-color="activeColor"
  :inactive-color="inactiveColor"
  :icon-prefix="iconPrefix"
>
<slot></slot>
</van-steps> -->

<van-steps v-bind="attrs">
  <slot></slot>
</van-steps>

</template>

<style lang="less"></style>