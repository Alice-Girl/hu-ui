<script setup>
import { onMounted, useAttrs   } from 'vue';
const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '-droup---')
})

</script>

<template>
  <van-dropdown-menu
    v-bind="attrs"
  >
    <slot></slot>
  </van-dropdown-menu>
</template>

<style lang="less" scoped></style>