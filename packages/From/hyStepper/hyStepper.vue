<script setup>
const props = defineProps({
  value: {
    type: String
  },
  min: {
    type: [String, Number],
    default: 1
  },
  max: {
    type: [String, Number],
  },
  theme: {
    type: String,
    default: 'round'
  },
  step: {
    type: [String, Number],
    default: 1
  },
  name: {
    type: String
  },
  inputWidth: {
    type: [String, Number],
    default: '32px'
  },
  buttonSize: {
    type: [String, Number],
    default: '28px'
  },
  
  placeholder: {
    type: [String, Number],
    default: '请输入'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disablePlus:{
    type: Boolean,
    default: false
  },
  disableMinus:{
    type: Boolean,
    default: false
  },
  disableInput: {
    type: Boolean,
    default: false
  },
  showPlus: {
    type: Boolean,
    default: true
  },
  showMinus: {
    type: Boolean,
    default: true
  },
  showInput: {
    type: Boolean,
    default: false
  },
  integer: {
    type: Boolean,
    default: false
  },
 
})

const moduleValue = props.value
</script>

<template>
  <van-stepper 
   :value="moduleValue"
   :min="min"
   :max="max"
   :theme="theme"
   :step="step"
   :name="name"
   :inputWidth="inputWidth"
   :placeholder="placeholder"
   :disabled="disabled"
   :disablePlus="disablePlus"
   :disableMinus="disableMinus"
   :disableInput="disableInput"
   :integer="integer"
  />

</template>

<style lang="less" scoped>
::v-deep .van-stepper__minus{
  color: #00A758;
  border-color: #00A758;
}
::v-deep .van-stepper__plus{
  background-color: #fff;
  color: #00A758;
  border: 1px solid #00A758;
}
</style>