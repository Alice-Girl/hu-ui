<script setup>
defineProps({
  modelLoading: {
    type: Boolean,
    default: false
  },
  modelError: {
    type: Boolean,
    default: false
  },
  finished: {
    type: Boolean,
    default: false
  },
  offset: {
    type: [Number, String],
    default: 300
  },
  loadingText: {
    type: String,
    default: '加载中...'
  },
  finishedText: {
    type: String,
    default: '没有更多了'
  },
  errorText: {
    type: String,
    default: '加载失败，点击重新加载'
  },
  immediateCheck: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: 'down'
  },
  scroller: {
    type: Object
  }
})

const emit = defineEmits(['load'])

const handleLoad = () => {
  emit('load')
}
</script>

<template>
  <!-- v-model:error="modelError" -->
  <van-list
    :modelLoading="modelLoading"
    :modelError="modelLoading"
    :finished="finished"
    :offset="offset"
    :loadingText="loadingText"
    :finishedText="finishedText"
    :errorText="errorText"
    :immediateCheck="immediateCheck"
    :disabled="disabled"
    :direction="direction"
    :scroller="scroller"
    @load="handleLoad"
  >
    <template v-if="$slots.loading">
        <slot name="loading"></slot>
      </template>
      <template v-if="$slots.finished">
        <slot name="finished"></slot>
      </template>
      <template v-if="$slots.error">
        <slot name="error"></slot>
      </template>
      <template v-else>
        <slot name="default"></slot>
      </template>
  </van-list>
</template>

<style lang="less" scoped></style>