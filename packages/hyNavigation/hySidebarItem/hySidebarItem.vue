<script setup>
// import {  useAttrs, toRefs } from 'vue';
import {  useAttrs } from 'vue';
const attrs = useAttrs()

// const props = defineProps({
//   title: {
//     type: String,
//     default: ''
//   },
//   dot: {
//     type: Boolean,
//     default: false
//   },
//   badge: {
//     type: [String, Number],
//   },
//   // badgeProps: {
//   //   type: BadgeProps,
//   // },
//   disabled: {
//     type: Boolean,
//     default: false
//   },
//   url: {
//     type: String,
//   },
//   to: {
//     type: [String, Object],
//   },
//   replace: {
//     type: [String, Object],
//   },
// })


// const { title, dot, badge, disabled, url, to, replace } = toRefs(props)
// const emit = defineEmits(['click'])
// const handleClick = () => {
//   emit('click')
// }
</script>

<template>
  <!-- <van-sidebar-item 
    v-bind="attrs"
    :title="title"
    :dot="dot"
    :badge="badge"
    :disabled="disabled"
    :url="url"
    :to="to"
    :replace="replace"
    @click="handleClick"
  >
    <slot></slot> 
  </van-sidebar-item> -->

  <van-sidebar-item 
    v-bind="attrs"
  >
    <slot name="title"></slot>
  </van-sidebar-item>
</template>

<style lang="less" scoped>
::v-deep .van-sidebar-item--select::before{
  color: #00A758;
}
::v-deep .van-badge{
  background-color: #Ec6453;
}
</style>