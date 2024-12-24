<script setup>
// import { toRefs } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()
// const slots = useSlots()

// const props = defineProps({
//   name: { 
//     type: [String, Number],
//     default: '' 
//   },
//   leftWidth: { 
//     type: [String, Number],
//     default: '' 
//   },
//   rightWidth: { 
//     type: [String, Number],
//     default: '' 
//   },
//   // beforeClose: { 
//   //   type: Function
//   // },
//   disabled: { 
//     type: Boolean,
//   },
//   stopPropagation: {
//     type: Boolean,
//     default: false
//   }
// })

// const {name, leftWidth, rightWidth, disabled, stopPropagation} = toRefs(props)

// const handleBeforeClose = ({position}) => {
//   console.log(position)
// }
// const emit = defineEmits(['update:modelValue', 'close', 'open', 'click'])


// const hanedleClose = () => {
//   emit('update:modelValue', false)
//   emit('close')
// }
// const hanedleOpen = () => {
//   emit('open')
// }
// const hanedleClick = () => {
//   emit('click')
// }
</script>

<template>
  <!-- <van-swipe-cell
    :name="name" 
    :left-width="leftWidth" 
    :right-width="rightWidth" 
    :before-close="handleBeforeClose" 
    :disabled="disabled"
    :stop-propagation="stopPropagation"
    @close="hanedleClose" 
    @open="hanedleOpen" 
    @click="hanedleClick"
  >
    <slot></slot>
  </van-swipe-cell> -->

  <van-swipe-cell
    v-bind="attrs"
  >
  <!-- <template v-if="slots == 'left'">
    <slot name="left"></slot>
  </template>
  <template v-else-if="slots == 'right'">
    <slot name="right"></slot>
  </template>
  <template v-else>
    <slot name="right"></slot>
  </template> -->
  <slot></slot>
  </van-swipe-cell>
</template>

<style lang="less"></style>