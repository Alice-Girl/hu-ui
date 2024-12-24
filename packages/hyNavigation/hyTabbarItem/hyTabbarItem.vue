<script setup>
import { toRefs } from 'vue';

const props = defineProps({
 name: {
   type: [String , Number]
 },
 icon: {
   type: String,
   default: ''
 },
 iconPrefix: {
   type: String,
   default: 'van-icon'
 },
 dot: {
   type: Boolean,
   default: false
 },
 badge: {
   type: [String, Number],
 },
 BadgeProps:{
 },
 url: {
  type: String,
 },
 to: {
  type: [String, Object],
 },
 replace: {
  type: Boolean,
  default: false
 }
})

const {name, icon, iconPrefix, dot, badge, badgeProps, url, to, replace} = toRefs(props)

</script>

<template>
  <van-tabbar-item
    :name="name"
    :icon="icon"
    :iconPrefix="iconPrefix"
    :dot="dot"
    :badge="badge"
    :badgeProps="badgeProps"
    :url="url"
    :to="to"
    :replace="replace"
  >
    <slot></slot>
  </van-tabbar-item> 
</template>

<style lang="less" scoped></style>