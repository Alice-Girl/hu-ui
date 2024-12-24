<script setup>
// import { useAttrs, toRefs, onMounted } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()

// const props = defineProps({
//   /**
//    * @tel 输入手机号，调起手机号键盘
//    * @digit  允许输入正整数，调起纯数字键盘
//    * @number 允许输入数字，调起带符号的纯数字键盘
//    */
//   type: {
//     type: String,
//     default: 'text',
//     validator: (value) => {
//       const valiTypes = ['text', 'tel', 'digit', 'number', 'password'];
//       return valiTypes.indexOf(value)
//     }
//   },
//   value: {
//     type: [String, Number],
//     default: ''
//   },
//   label: {
//     type: String,
//     default: ''
//   },
//   labelAlign: {
//     type: Boolean,
//     default: false
//   },
//   placeholder: {
//     type: String,
//     default: '请输入'
//   },
//   // 待定 Start
//   readonly: {
//     type: Boolean,
//     default: false
//   },
//   disabled: {
//     type: Boolean,
//     default: false
//   },
//   // End
//   leftIcon: {
//     type: Boolean,
//     default: false
//   },
//   rightIcon: {
//     type: Boolean,
//     default: false
//   },
//   required: {
//     type: Boolean,
//     default: null
//   },
//   maxlength: {
//     type: Boolean,
//     default: false
//   },
//   showWordLimit: {
//     type: Boolean,
//     default: false
//   },
  
//   error: {
//     type: Boolean,
//     default: false
//   },
//   // errorMessage: {
//   //   type: Boolean,
//   //   default: false
//   // },
//   clearable: {
//     type: Boolean,
//     default: false
//   },
//   autosize: {
//     type: Boolean,
//     default: false
//   },
//   isLink: {
//     type: Boolean,
//     default: true
//   },
//   inputAlign: {
//     type: String,
//     default: 'left',
//     validator: (value) => {
//       const valiTypes = ['left', 'center', 'right'];
//       return valiTypes.indexOf(value)
//     }
//   }
// })

// const {type, value, label, placeholder,  clearable, disabled, readonly, leftIcon, rightIcon, required, maxlength, showWordLimit, error, errorMessage, labelAlign, inputAlign, autosize, isLink } = toRefs(props)

// const emit = defineEmits(['update:modelValue'])
// const handleInput = (e) => {
//   emit('update:modelValue', e.target.value)
//   console.log(e.target.value, '--target-')
// }
// onMounted(() => {
//   console.log(attrs, '==attrs==')
// })
</script>

<template>
  <!-- <van-field 
    :value="modelValue"
    :label="label" 
    :placeholder="placeholder"
    :type="type" 
    :clearable="clearable"
    :disabled 
    :readonly
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
    :required="required"
    :autosize="autosize"
    :inputAlign="inputAlign"
    :maxlength ="maxlength "
    :showWordLimit="showWordLimit"
    :error="error"
    :errorMessage="errorMessage"
    :labelAlign="labelAlign"
    @input="handleInput"
  >

    <template v-if="$slots.button">
			<slot name="button"></slot>
		</template>
		<template v-else>
			<slot name="extra"></slot>
		</template>
  </van-field> -->

  <van-field 
    v-bind="attrs"
  >
  </van-field>
</template>

<style lang="less">
</style>