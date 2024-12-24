<script setup>
import { toRefs } from 'vue';


const props = defineProps({
  dashed: {
    type: Boolean,
    default: false
  },
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  },
  vertical: {
    type: Boolean,
    default: false
  }
})

const { dashed, hairline, contentPosition, vertical } = toRefs(props)

</script>

<template>
  <van-divider
    :dashed="dashed"
    :hairline="hairline"
    :contentPosition="contentPosition"
    :vertical="vertical"
  >
    <slot></slot>
  </van-divider>
</template>

<style lang="less">
</style>