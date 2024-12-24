<script setup>
// import { toRefs } from 'vue'
import {  useAttrs, onMounted} from 'vue'

const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '--RadioGroup--attrs----')
})
// const props = defineProps({
//   value: {
//     type: String,
//     default: ''
//   },

//   disabled: {
//     type: Boolean,
//     default: false
//   },
//   direction: {
//     type: String,
//     default: 'vertical',
//     validator: (value) => {
//       const valiTypes = ['horizontal', 'vertical'];
//       return valiTypes.indexOf(value)
//     }
//   },
//   iconSize: {
//     type: [String, Number],
//     defalut: '1.25rem'
//   },
//   checkedColor: {
//     type: String,
//     defalut: '#1989fa'
//   },
//   shape: {
//     type: String,
//     default: 'round',
//     validator: (value) => {
//       const valiTypes = ['square', 'dot'];
//       return valiTypes.indexOf(value)
//     }
//   }
// })
// const {value, disabled, direction, iconSize, checkedColor, shape } = toRefs(props)

</script>

<template>
  <!-- <van-radio-group 
    :value="value"
    :disabled="disabled"
    :direction="direction"
    :iconSize="iconSize"
    :checkedColor="checkedColor"
    :shape="shape"
    v-bind="attrs"
  >
  </van-radio-group> -->
  <van-radio-group 
    v-bind="attrs"
  >
  </van-radio-group>
</template>

<style lang="less">
</style>