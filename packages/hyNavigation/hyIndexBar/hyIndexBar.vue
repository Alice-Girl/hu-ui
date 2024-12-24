<script setup>
import { useAttrs, onMounted } from 'vue';
const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <van-index-bar v-bind="attrs"></van-index-bar>
</template>

<style lang="less"></style>