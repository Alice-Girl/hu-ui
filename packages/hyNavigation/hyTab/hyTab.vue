<script setup>
// import { toRefs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()

// const props = defineProps({
//   title: {
//     type: String,
//     default: ''
//   },
//   disabled: {
//     type: Boolean,
//     default: false
//   },
//   dot: {
//     type: Boolean,
//     default: false
//   },
//   badge: {
//     type: [String, Number],
//   },
//   name: {
//     type: [String, Number],
//     default: ''
//   },
//   url: {
//     type: String,
//   },
//   to: {
//     type: [String, Object],
//   },
//   replace: {
//     type: Boolean,
//     default: false
//   },
//   titleStyle: {
//     type: [String, Array, Object]
//   },
//   titleClass: {
//     type: String
//   },
//   showZeroBadge: {
//     type: Boolean,
//   default: true
//   }
// })

// const  { title, disabled, dot, badge, name, url, to, replace, titleStyle, titleClass, showZeroBadge } = toRefs(props)
</script>

<template>
  <!-- <van-tab
    :title="title"
    :disabled="disabled"
    :dot="dot"
    :badge="badge"
    :name="name"
    :url="url"
    :to="to"
    :replace="replace"
    :titleStyle="titleStyle"
    :titleClass="titleClass"
    :showZeroBadge="showZeroBadge"
  >
    <slot name="default"></slot>
    <slot name="title"></slot>
  </van-tab> -->

  <van-tab v-bind="attrs" >
    <slot></slot>
  </van-tab>
</template>

<style lang="less" scoped></style>