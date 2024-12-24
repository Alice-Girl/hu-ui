<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()
</script>

<template>
  <van-highlight v-bind="attrs"></van-highlight>
</template>

<style lang="less"></style>