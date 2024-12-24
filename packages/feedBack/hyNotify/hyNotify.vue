<script setup>
import { useAttrs  } from 'vue';
const attrs = useAttrs()

</script>

<template>
  <van-notify 
   v-bind="attrs"                                          
  >
    <slot></slot>
  </van-notify>
</template>

<style lang="less" scoped>
</style>