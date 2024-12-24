<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs()

</script>

<template>
  <van-step v-bind="attrs">
    <slot></slot>
  </van-step>
</template>

<style lang="less"></style>