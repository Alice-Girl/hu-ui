<script setup>
defineProps({
  color: {
    type: String,
    default: '#00A758'
  },  
  type: {
    type: String,
    default: 'circular'
  },
  size: {
    type: String,
    default: '30px'
  },
  textSize: {
    type: String,
    default: '14px'
  },
  textColor: {
    type: String,
    default: '#c9c9c9'
  },
  vertical: {
    type: Boolean,
    default: false
  } 
  
})
</script>

<template>
  <van-loading 
    :color="color"
    :type="type"
    :size="size"
    :text-size="textSize"
    :text-color="textColor"
    :vertical="vertical"
  >
    <template v-if="$slots.icon" #icon>
      <slot name="icon"></slot>
    </template>
    <template v-else #default>
      <slot name="default"></slot>
    </template>
  </van-loading>
</template>

<style lang="less">
</style>