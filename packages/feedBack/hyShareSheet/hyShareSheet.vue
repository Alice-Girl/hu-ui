<script setup>
// import {  toRefs  } from 'vue';
import { useAttrs } from 'vue';
const attrs = useAttrs()

// const props = defineProps({
//   options: {
//     type: Array,
//     default: []
//   },
//   title: {
//     type: String,
//   },
//   cancelText: {
//     type: String,
//     default: '取消'
//   },
//   description: {
//     type: String,
//   },
//   duration: {
//     type: [Number, String],
//     default: 0.3
//   },
//   zIndex: {
//     type: [Number, String],
//     default: 2000
//   },
//   round: {
//     type: Boolean,
//     default: true
//   },
//   overlay: {
//     type: Boolean,
//     default: true
//   },
//   overlayClass: {
//     type: [String, Array, Object],
//   },
//   lockScroll: {
//     type: Boolean,
//     default: true
//   },
//   lazyRender: {
//     type: Boolean,
//     default: true
//   },
//   closeOnPopstate: {
//     type: Boolean,
//     default: true
//   },
//   closeOnClickOverlay: {
//     type: Boolean,
//     default: true
//   },
//   safeAreaInsetBottom:{
//     type: Boolean,
//     default: true
//   },
//   teleport: {
//     type: String,
//   },
//   beforeClose: {
//     type: Function,
//   }
// })

// const { options, title, cancelText, description, duration, zIndex, round, overlay, overlayClass, lockScroll, lazyRender, closeOnPopstate, closeOnClickOverlay, safeAreaInsetBottom, teleport, beforeClose} = toRefs(props)

</script>

<template>
  <!-- -->
  <!-- <van-share-sheet
    v-bind="attrs"
    v-model:show="showShare"
    :options=options
    :title="title"
    :cancel-text="cancelText"
    :description="description"
    :duration="duration"
    :z-index="zIndex"
    :round="round"
    :overlay="overlay"
    :overlay-class="overlayClass"
    :lock-scroll="lockScroll"
    :lazy-render="lazyRender"
    :close-on-popstate="closeOnPopstate"
    :close-on-click-overlay="closeOnClickOverlay"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    :teleport="teleport"
    :before-close="beforeClose"
  >
    <slot></slot>
  </van-share-sheet> -->

  <van-share-sheet
    v-bind="attrs"
  >
    <slot></slot>
  </van-share-sheet>
</template>

<style lang="less" scoped></style>