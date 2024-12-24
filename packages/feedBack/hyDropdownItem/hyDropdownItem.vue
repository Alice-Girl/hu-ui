<script setup>
import { useAttrs  } from 'vue';
const attrs = useAttrs()


</script>

<template>
  <van-dropdown-item
    v-bind="attrs"
  >
  </van-dropdown-item>
</template>

<style lang="less" scoped></style>