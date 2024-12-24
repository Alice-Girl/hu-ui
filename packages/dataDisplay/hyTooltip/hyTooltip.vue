<script setup>
import { useAttrs, useSlots, onMounted } from 'vue';
const attrs = useAttrs()
const slots = useSlots()
onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <el-tooltip
   v-bind="attrs"
  >
  <template v-if="slots.content">
    <slot name="footer"></slot>
  </template>
  <template v-else>
    <slot name="default"></slot>
  </template>
</el-tooltip>
</template>

<style lang="less" scoped></style>