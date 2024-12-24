<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  autoplay: {
    type: [Number, Boolean]
  },
  duration: {
    type: [Number, Boolean],
    default: 500
  },
  initialSwipe: {
    type: [Number, Boolean],
    default: 0
  },
  width: {
    type: [Number, String],
    default: "auto"
  },
  height: {
    type: [Number, String],
    default: "auto"
  },
  loop: {
    type: Boolean,
    default: true
  },
  showIndicators: {
    type: Boolean,
    default: true
  },
  vertical: {
    type: Boolean,
    default: false
  },
  touchable: {
    type: Boolean,
    default: true
  },
  stopPropagation: {
    type: Boolean,
    default: true
  },
  lazyRender: {
    type: Boolean,
    default: false
  },
  indicatorColor: {
    type: String,
    default: "#1989fa"
  }
})

const {autoplay, duration, initialSwipe, width, height, loop, showIndicators, vertical, touchable, stopPropagation, lazyRender, indicatorColor } = toRefs(props)

const emit = defineEmits(['change', 'dragStart', 'dragEnd'])

const handleChange = (index) => {
  emit('change', index)
}
const handleDragStart = (index) => {
  emit('dragStart', index)
}
const handEragEnd = (index) => {
  emit('dragEnd', index)
}

</script>

<template>
  <van-swipe
    :autoplay="autoplay"
    :duration="duration"
    :initialSwipe="initialSwipe"
    :width="width"
    :height="height"
    :loop="loop"
    :showIndicators="showIndicators"
    :vertical="vertical"
    :touchable="touchable"
    :stopPropagation="stopPropagation"
    :lazyRender="lazyRender"
    :indicatorColor="indicatorColor"
    @change="handleChange"
    @drag-start ="handleDragStart"
    @drag-end ="handEragEnd"
  >
    <slot></slot>
    <template v-if="$slots.indicator">
      <slot name="indicator"></slot>
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </van-swipe>
</template>

<style lang="less" scoped>
.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>