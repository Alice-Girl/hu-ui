<script setup>
import { toRefs, useAttrs } from 'vue'
// import { useAttrs} from 'vue'

const attrs = useAttrs()
const props = defineProps({
  // name 任意类型
  name: {
    type: [String, Number,Boolean, Object, Array, Function, undefined,null],
    default: 'String'
  },
  shape: {
    type: String,
    default: 'round',
    validator: (value) => {
      const valiTypes = ['square', 'dot'];
      return valiTypes.indexOf(value)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  labelDisabled: {
    type: Boolean,
    defalut: false
  },
  labelPosition: {
    type: String,
    defalut: "right",
    validator: (value) => {
      const valiTypes = ['left', 'right'];
      return valiTypes.indexOf(value)
    }
  },
  iconSize: {
    type: [String, Number],
    defalut: '1.25rem'
  },
  checkedColor: {
    type: String,
    defalut: '#1989fa'
  }
})

const {name, shape, disabled, labelDisabled, labelPosition, iconSize, checkedColor} = toRefs(props)

</script>

<template>
  <van-radio
    :name="name"
    :shape="shape"
    :disabled="disabled"
    :label-disabled="labelDisabled"
    :label-position="labelPosition"
    :icon-size="iconSize"
    :checked-color="checkedColor"
    v-bind="attrs"
  >
    <slot></slot>
  </van-radio>

  <!-- <van-radio
    v-bind="attrs"
  >
   <slot></slot>
  </van-radio> -->
</template>

<style lang="less">
</style>