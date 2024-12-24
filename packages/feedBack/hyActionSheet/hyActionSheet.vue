<script setup>
// import { ref, toRefs } from 'vue'

import {useAttrs  } from 'vue'

const attrs = useAttrs()

// const props = defineProps({
//   value: {
//     type: String,
//   },
//   show: {
//     type: Boolean,
//     default: false
//   },
//   actions: {
//     type: Array,
//     default: () => []
//   },
//   title: {
//     type: String,
//     default: ''
//   },
//   cancelText: {
//     type: String,
//     default: '取消'
//   },
//   description: {
//     type: String,
//     default: ''
//   },
//   closeable: {
//     type: Boolean,
//     default: true
//   },
//   closeIcon: {
//     type: String,
//     default: 'cross'
//   },
//   duration: {
//     type: [Number, String],
//     default: 300
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
//     default: 'hy-overlay'
//   },
//   overlayStyle: {
//     type: Object,
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
//     default: false
//   },
//   closeOnClickAction: {
//     type: Boolean,
//     default: false
//   },
//   closeOnClickOverlay: {
//     type: Boolean,
//     default: true
//   },
//   safeAreaInsetBottom: {
//     type: Boolean,
//     default: true
//   },
//   // type: [String | Element],
//   Teleport: {
//     type: String,
//   },
//   beforeClose: {
//     type: Function,
//     default: null
//   }
// })

// const {actions, title, cancelText, description, closeable, closeIcon, duration, zIndex, round, overlay, overlayClass, overlayStyle, lockScroll, lazyRender, closeOnPopstate, closeOnClickAction, closeOnClickOverlay, safeAreaInsetBottom, Teleport, beforeClose} = toRefs(props)

// const isShow = ref(props.show)
// const emit = defineEmits(['select'])
// const handleSelect = (item) => {
//   emit('select', item)
// }
</script>

<template>
  <!-- <van-action-sheet 
    v-model:show="isShow" 
    v-bind="attrs"
    :actions="actions" 
    :title="title"
    :cancelText="cancelText"
    :description="description"
    :closeable="closeable"
    :closeIcon="closeIcon"
    :duration="duration"
    :zIndex="zIndex"
    :round="round"
    :overlay="overlay"
    :overlayClass="overlayClass"
    :overlayStyle="overlayStyle"
    :lockScroll="lockScroll"
    :lazyRender="lazyRender"
    :closeOnPopstate="closeOnPopstate"
    :closeOnClickAction="closeOnClickAction"
    :closeOnClickOverlay="closeOnClickOverlay"
    :safeAreaInsetBottom="safeAreaInsetBottom"
    :teleport="teleport"
    :beforeClose="beforeClose"
    @select="handleSelect"
  >
  <slot></slot>
  </van-action-sheet> -->

  <van-action-sheet 
    v-bind="attrs"
  >
  <slot></slot>
  </van-action-sheet>
</template>

<style lang="less">
</style>