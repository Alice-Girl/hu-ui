<script setup>
// import { toRefs } from 'vue';
import { useAttrs, toRefs, onMounted } from 'vue';
const attrs = useAttrs();

onMounted(() => {
  // console.log(attrs, '---hyTabs--')
})
const props = defineProps({
  value: {
    type: [String, Number],
    default: 0
  },
  type: {
    type: String,
    default: 'line'
  },
  color: {
    type: String,
    default: '#00A758'
  },
  background: {
    type: String,
    default: '#fff'
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  lineWidth: {
    type: [Number, String],
    default: '40px'
  },
  lineHeight: {
    type: [Number, String],
    default: '3px'
  },
  animated: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  sticky: {
    type: Boolean,
    default: false
  },
  shrink: {
    type: Boolean,
    default: false
  },
 swipeable: {
    type: Boolean,
    default: false
 },
 lazyRender: {
    type: Boolean,
    default: true
 },
 scrollspy: {
    type: Boolean,
    default: false
 },
 showHeader: {
  type: Boolean,
  default: true
 },
 offsetTop: {
  type: [Number, String],
  default: 0
 },
 swipeThreshold: {
  type: [Number, String],
  default: 5
 },
 titleActiveColor: {
  type: String,
 },
 titleInactiveColor: {
  type: String,
 }
})

const emit = defineEmits(['click-tab', 'change', 'rendered', 'scroll'])
const handleClickTab = (event) => {
  emit('click-tab', event)
}
const handleChange = (event) => {
  emit('change', event)
}
const handleRendered = (event) => {
  emit('rendered', event)
}
const handleScroll = (event) => {
  emit('scroll', event)
}

const { value, type, color, background,duration,  lineWidth, lineHeight, animated, border, ellipsis, sticky, shrink, swipeable, lazyRender, scrollspy, showHeader, offsetTop, swipeThreshold, titleActiveColor, titleInactiveColor, beforeChange } = toRefs(props)
</script>

<template>
  <van-tabs
    v-model:active="value"
    v-bind="attrs"
    :type="type"
    :color="color"
    :background="background"
    :duration="duration"
    :lineWidth="lineWidth"
    :lineHeight="lineHeight"
    :animated="animated"
    :border="border"
    :ellipsis="ellipsis"
    :sticky="sticky"
    :shrink="shrink"
    :swipeable="swipeable"
    :lazyRender="lazyRender"
    :scrollspy="scrollspy"
    :showHeader="showHeader"
    :offsetTop="offsetTop"
    :swipeThreshold="swipeThreshold"
    :titleActiveColor="titleActiveColor"
    :titleInactiveColor="titleInactiveColor"
    :beforeChange="beforeChange"
    @click-tab="handleClickTab"
    @change="handleChange"
    @rendered="handleRendered"
    @scroll="handleScroll"
  >
    <slot></slot>
  </van-tabs>

  <!--<van-tabs v-bind="attrs">
     <tempalte v-if="nav-left">
      <slot name="nav-left"></slot>
    </tempalte>
    <tempalte v-if="nav-right">
      <slot name="nav-right"></slot>
    </tempalte>
    <tempalte v-if="nav-icon">
      <slot name="nav-icon"></slot>
    </tempalte>
    <tempalte v-else>
      <slot></slot>
    </tempalte> 
    <slot></slot>
  </van-tabs>-->
</template>

<style lang="less" scoped>
::v-deep  .van-tab--active{
  border: none;
  border-radius: 1rem;
}
::v-deep .van-tab--card{
  border: none;
}
::v-deep .van-tabs__nav--card{
  border: none;
}
::v-deep .van-tab__panel{
  padding: 24px 20px;
}

</style>