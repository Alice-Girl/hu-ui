<script setup>
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <van-swipe-item @click="handleClick">
    <slot></slot>
  </van-swipe-item>
</template>

<style lang="less" scoped></style>