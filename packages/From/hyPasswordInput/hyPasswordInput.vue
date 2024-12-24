<script setup>
// import { toRefs} from 'vue'
import {  useAttrs } from 'vue'
const attrs = useAttrs()

// const props = defineProps({
//   value: {
//     type: String,
//     default: ''
//   },
//   info: {
//     type: String
//   },
//   errorInfo:{
//     type: String,
//   },
 
//   length: {
//     type: [Number, String],
//     default: ''
//   },
//   gutter: {
//     type: [Number, String],
//     default: '8px'
//   },
//   mask: {
//     type: Boolean,
//     default: true
//   },
//   focused: {
//     type: Boolean,
//     default:false
//   },
// })

// const {value, info, errorInfo, length, gutter, mask, focused  } = toRefs(props)
//   const emit = defineEmits(['focus'])
//   const handleFocus = (showKeyboard) => {
//     emit('focus', showKeyboard.value)
//   }
</script>

<template>
<!-- <van-password-input
  :value="value"
  :info="info"
  :errorInfo="errorInfo"
  :focused="focused"
  :length="length"
  :gutter="gutter"
  :mask="mask"
  
  @focus="handleFocus"
/> -->

<van-password-input v-bind="attrs" />
</template>

<style lang="less" scoped>
::deep .van-password-input__info{
  color: red;
  border: 1px solid red;
}
</style>