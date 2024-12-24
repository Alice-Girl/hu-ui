<script setup>
// import { ref, toRefs } from 'vue' 

import { useAttrs } from 'vue'
const attrs = useAttrs()

//  const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false
//   },

//   zIndex: {
//     type: [Number, String],
//     default: 1
//   },
//   duration: {
//     type: [Number, String],
//     default: 300
//   },
//   className: {
//     type: String,
//   },
//   customStyle: {
//     type: Object,
//     default: () => ({})
//   },
//   lockScroll: {
//     type:Boolean,
//     default: true
//   },
//   lazyRender: {
//     type: Boolean,
//     default: true
//   },
//   teleport: {
//     type: [String, Element],
//   },
//  })
// const { show, zIndex,duration, className,customStyle, lockScroll, lazyRender, teleport  } = toRefs(props)
//  const show = ref(props.show)
//  const emit = defineEmits(['click'])

//  const handleClick = () => {
//    emit('click')
//  }
</script>

<template>
  <!-- <van-overlay 
    :show="show"
    :zIndex="zIndex"
    :duration="duration"
    :className="className"
    :customStyle="customStyle"
    :lockScroll="lockScroll"
    :lazyRender="lazyRender"
    :teleport="teleport"
    @click="handleClick" 
  >
    <slot></slot>
  </van-overlay> -->

  <van-overlay 
   v-bind="attrs"
  >
    <slot></slot>
  </van-overlay>
</template>

<style lang="less">
</style>