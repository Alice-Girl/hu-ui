<script setup>
// import { toRefs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()
// const props = defineProps({
//   title: {
//     type: String,
//     default: ''
//   },
//   leftText: {
//     type: String,
//     default: ''
//   },
//   rightText: {
//     type: String,
//     default: ''
//   },
//   leftDisabled: {
//     type: Boolean,
//     default: false
//   },
//   rightDisabled: {
//     type: Boolean,
//     default: false
//   },
//   leftArrow: {
//     type: Boolean,
//     default: false
//   },
//   border: {
//     type: Boolean,
//     default: true
//   },
//   fixed: {
//     type: Boolean,
//     default: true
//   },
//   placeholder: {
//     type: Boolean,
//     default: false
//   },
//   zIndex: {
//     type: [String,Number],
//     default: 1
//   },
//   safeAreaInsetTop: {
//     type: Boolean,
//     default: false
//   },
//   clickable: {
//     type: Boolean,
//     default: true
//   },
// })

// const {title, leftText, rightText, leftDisabled, leftArrow,border,fixed,placeholder,zIndex,safeAreaInsetTop,clickable} = toRefs(props)

// const emit  = defineEmits(['click-left','click-right'])
// const handleClickLeft = (event) => {
//   emit('click-left', event)
// }
// const handleClickRight = (event) => {
//   emit('click-right', event)
// }

// const emit = defineEmits(['click-left','click-right'])

// const handleClickLeft = () => {
//   emit('click-left')
// }
// const handleClickRight = () => {
//   emit('click-right')
// }
</script>

<template>
  <!-- <van-nav-bar 
    :title="title"
    :leftText="leftText"
    :rightText="rightText"
    :leftDisabled="leftDisabled"
    :leftArrow="leftArrow"
    :border="border"
    :fixed="fixed"
    :placeholder="placeholder"
    :zIndex="zIndex"
    :safeAreaInsetTop="safeAreaInsetTop"
    :clickable="clickable"
    @click-left="handleClickLeft"
    @click-right="handleClickRight"
  >
    <template v-if="$slots.title">
      <slot name="title"></slot>
    </template>
    <template v-else-if="$slots.left">
      <slot name="left"></slot>
    </template>
    <template v-else-if="$slots.right">
      <slot name="right"></slot>
    </template>
  </van-nav-bar>  -->

  <van-nav-bar 
    v-bind="attrs"
  >
    <slot></slot>
  </van-nav-bar>
</template>

<style lang="less" scoped>

:deep(.van-nav-bar__text){
  color: #00A758;
}
::v-deep .van-nav-bar__left{
  color: #00A758;
}
:deep(.van-icon){
  color: #00A758;
}
</style>