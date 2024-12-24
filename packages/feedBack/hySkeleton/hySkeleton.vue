<script setup>
defineProps({
  row: {
    type: [Number, String],
    default: 0
  },
  rowWidth: {
    type: [String, Array],
    default: '100%'
  },
  title: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  titleWidth: {
    type: [String, Number],
    default: '40%'
  },
  avatarSize: {
    type: [String, Number],
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  }
})
</script>

<template>
  <van-skeleton 
    :row="row"
    :rowWidth="rowWidth"
    :title="title"
    :avatar="avatar"
    :loading="loading"
    :animate="animate"
    :round="round"
    :titleWidth="titleWidth"
    :avatarSize="avatarSize"
    :avatarShape="avatarShape"
   >
    <slot></slot>
   </van-skeleton>
</template>

<style lang="less"></style>