<script setup>
import { useAttrs, onMounted } from 'vue';

const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <van-notice-bar v-bind="attrs" />
</template>

<style lang="less">
</style>