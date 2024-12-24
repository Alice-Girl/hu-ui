<script setup>
defineProps({
  span: {
    type: [Number, String],
  },
  offset: {
    type: [Number, String],
  },
  tag: {
    type: String,
    default: 'div'
  },
})
const emit = defineEmits(['click'])
const handleClick = (event) => {
  emit('click', event)
}
</script>

<template>
  <van-col
    :span="span"
    :offset="offset"
    :tag="tag"
    @click="handleClick"
  >
    <slot></slot>
  </van-col>
</template>