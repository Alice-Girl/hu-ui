<script setup>
import { useAttrs  } from 'vue'

const attrs = useAttrs()

// defineProps({
//   value: {
//     type: String,
//     default: ''
//   },
//   columns: {
//     type: Array,
//     default: () => []
//   },
//   columnsFieldNames: {
//     type: Object,
//     default: () => ({})
//   },
//   title: {
//     type: String,
//     default: ''
//   },
//   confirmBTuttonText:{
//     type: String,
//     default: '确认'
//   },
//   cancelBTuttonText:{
//     type: String,
//     default: '取消'
//   },
//   toolbarPosition:{
//     type: String,
//     default: 'top'
//   },
//   loading:{
//     type: Boolean,
//     default: false
//   },
//   readonly:{
//     type: Boolean,
//     default: false
//   },
//   showToolbar:{
//     type: Boolean,
//     default: false
//   },
//   allowHtml: {
//     type: Boolean,
//     default: false
//   },
//   optionHeight: {
//     type: [Number, String],
//     default: 44
//   },
//   visibleOptionNum: {
//     type: [Number, String],
//     default: 6
//   },
//   swipeDuration: {
//     type: [Number, String],
//     default: 1000
//   },
//   // 事件
//   onConfirm: {
//     type: Function,
//     default: () => {} // 确认回调
//   },
//   onCancel: {
//     type: Function,
//     default: () => {} // 取消回调
//   },
//   onChange: {
//     type: Function,
//     default: () => {} // 值改变回调
//   }
// })

// const emit = defineEmits(['update:confirm', 'update:cancel', 'update:change', 'click-option', 'scroll-into'])
// const handleConfirm = () => {
//   emit('update:confirm')
// }
// const handleCancel = () => {
//   emit('update:cancel')
// }
// const handleChange = () => {
//   emit('update:change')
// }
// const handleClickOption = () => {
//   emit('click-option')
// }
// const handleScrollInto = () => {
//   emit('scroll-into')
// }

</script>

<template>
  <!-- <van-picker
    :value="modelValue"
    :title="title"
    :columns="columns"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    @change="handleChange"
    @click-option="handleClickOption"
    @scroll-into="handleScrollInto"
  /> -->

  <van-picker
    v-bind="attrs"
  >
  </van-picker>
</template>

<style lang="less"></style>