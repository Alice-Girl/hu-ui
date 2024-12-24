
<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();


// const props = defineProps({
//   value: {
//     type: String,
//     default: ''
//   },
//   count: {
//     type: [Number, String],
//     default: 5
//   },
//   size: {
//     type: [Number, String],
//     default: 24
//   },
//   gutter: {
//     type: [Number, String],
//     default: 8
//   },
//   color: {
//     type: String,
//     default: '#EC6453'
//   },
//   voidColor: {
//     type: String,
//     default: '#c8c9cc'
//   },
//   disabledColor: {
//     type: String,
//     default: '#c8c9cc'
//   },
//   disabled: {
//     type: Boolean,
//     default: true
//   },
//   readonly: {
//     type: Boolean,
//     default: false
//   },
//   allowHalf: {
//     type: Boolean,
//     default: false
//   },
// })

// // const emit = defineEmits(['update:modelValue', 'change'])
// const emit = defineEmits(['change'])
// const modelValue = ref(props.value)

// const handleChange = (val) => {
//   emit('change', val)
// }

// const modelValue = computed({
//   get() {
//     return props.value
//   },
// })
</script>

<template>
  <!--  :allowHalf="allowHalf" -->
  <!-- <van-rate 
    :value="value"
    :count="count"
    :size="size"
    :gutter="gutter"
    :color="color"
    :voidColor="voidColor"
    :disabledColor="disabledColor"
    :allowHalf="allowHalf"
    @change="handleChange"
  /> -->
  
  <van-rate 
    :bind="attrs"
    @change="handleChange"
  />
</template>

<style lang="less" scoped>
.van-rate{
  .van-rate__item{
    .van-rate__icon--full{
      color: #EC6453!important;
      border: 1px solid green;
    }
  }
}
</style>