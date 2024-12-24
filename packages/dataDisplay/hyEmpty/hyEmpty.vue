<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  image: {
    type: String,
  },
  imageSize: {
    type: [Number, String, Array]
  },
  description: {
    type: String,
    default: '暂无数据!'
  }
})

const {image, imageSize, description } = toRefs(props)


</script>

<template>
  <div class="van-empty-box">
    <van-empty 
      :description="description"
      :imageSize="imageSize"
      :image="image"
    >
      <template v-if="$slots.image">
        <slot name="image"></slot>
      </template>
      <template v-if="$slots.description">
        <slot name="description"></slot>
      </template>
      <template v-else>
        <slot name="default"></slot>
      </template>
    </van-empty>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

