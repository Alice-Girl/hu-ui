<script setup>
// import { toRefs, useAttrs, onMounted } from 'vue';
import { useAttrs, onMounted } from 'vue';
const attrs = useAttrs()

// const props = defineProps({
//   columnNum: {
//     type: [Number, String],
//     default: 4
//   },
//   iconSize: {
//     type: [Number, String],
//     default: '18px'
//   },
//   gutter: {
//     type: [Number, String],
//     default: 0
//   },
//   border: {
//     type: Boolean,
//     default: true
//   }, 
//   center: {
//     type: Boolean,
//     default: true
//   }, 
//   square: {
//     type: Boolean,
//     default: false
//   },
//   clickable: {
//     type: Boolean,
//     default: false
//   },
//   direction: {
//     type: String,
//     default: 'vertical'
//   },
//   reverse: {
//     type: Boolean,
//     default: false
//   }
// })

// const { columnNum, iconSize, gutter, border, center, square, clickable, direction, reverse } = toRefs(props)

// const emit = defineEmits(['click'])
// const handleClick = () => {
//   emit('click')
// }

onMounted(() => {
  // console.log(attrs, '-hyGrid--slots--')
})
</script>

<template>
  <van-grid v-bind="attrs"><slot></slot></van-grid>
  <!-- <van-grid
    :column-num="columnNum"
    :icon-size="iconSize"
    :gutter="gutter"
    :border="border"
    :center="center"
    :square="square"
    :clickable="clickable"
    :direction="direction"
    :reverse="reverse"
    @click="handleClick"
  >
  </van-grid> -->
</template>

<style lang="less"></style>