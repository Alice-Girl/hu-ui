<script setup>
import { useAttrs, onMounted } from 'vue';
const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <van-index-anchor v-bind="attrs"></van-index-anchor>
</template>

<style lang="less"></style>