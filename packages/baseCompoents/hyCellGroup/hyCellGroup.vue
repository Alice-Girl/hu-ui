<script setup>
import { useAttrs } from 'vue'; 

const attrs = useAttrs()
// defineProps({
//   title: {
//     type: String,
//     default: ''
//   },
//   inset: {
//     type: Boolean,
//     default: false
//   },
//   border: {
//     type: Boolean,
//     default: true
//   },
// })
</script>

<template>
<!-- <van-cell-group
  :title="title"
  :inset="inset"
  :border="border"
>
  <template v-if="$slots.title">
    <slot name="title"></slot>
  </template>
  <template v-else>
    <slot name="default"></slot>
  </template>
</van-cell-group> -->
<van-cell-group v-bind="attrs">
  <template v-if="$slots.title">
    <slot name="title"></slot>
  </template>
  <template v-else>
    <slot name="default"></slot>
  </template>
</van-cell-group>
</template>

<style lang="less" scoped>
</style>