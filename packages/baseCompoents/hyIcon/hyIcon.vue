<script setup>
defineProps({
  name: {
    type: String
  },
  dot: {
    type: Boolean,
    default: false
  },
  badge: {
    type: [String, Number],
    require: true,
    default: "",
  },
  // badgeProps: {
  //   type: Object,
  //   default: () => ({})
  // },
  color: {
    type: String,
  },
  size: {
    type: [String, Number],
    default: "1rem",
  },
  classPrefix: {
    type: String,
  },
  tag: {
    type: String,
  },
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <van-icon 
    :name="name"
    :dot="dot" 
    :badge="badge" 
    :badgeProps="pbadgeProps" 
    :color="color" 
    :size="size"
    :classPrefix="classPrefix"
    :tag="tag"
    @click="handleClick"
  >
  </van-icon>
</template>

<style lang="less" scoped>
</style>