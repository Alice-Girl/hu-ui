<script setup>
// import { useAttrs, onMounted, toRefs } from 'vue';
import { useAttrs, onMounted } from 'vue';
const attrs = useAttrs()

// const props = defineProps({
//   text: {
//     type: String,
//   },
//   icon: {
//     type: String,
//   },
//   iconPrefix: {
//     type: String,
//     default: 'van-icon'
//   },
//   iconColor: {
//     type: String,
//   },
//   dot: {
//     type: Boolean,
//     default: false
//   },
//   badge: {
//     type: [String, Number],
//   },
//   // BadgeProps: {
//   //   type: BadgeProps,
//   // },
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
// })

// const { text, icon, iconPrefix, iconColor, dot, badge, url, to, replace } = toRefs(props)

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <van-grid-item v-bind="attrs"></van-grid-item>
  <!-- <van-grid-item 
    :bind="attrs"
    :text="text"
    :icon="icon"
    :icon-prefix="iconPrefix"
    :icon-color="iconColor"
    :dot="dot"
    :badge="badge"
    :url="url"
    :to="to"
    :replace="replace"
  >
    <slot></slot>
    <slot name="icon"></slot>
    <slot name="text"></slot>
    <slot name="default"></slot>
  </van-grid-item> -->
</template>

<style lang="less"></style>