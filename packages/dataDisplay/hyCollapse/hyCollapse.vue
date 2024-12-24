<script setup>
// import { toRefs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()

// const props = defineProps({
//   modelValue: {
//     type: String,
//   },
//   accordion: {
//     type: Boolean,
//     default: false
//   },
//   border: {
//     type: Boolean,
//     default: true
//   },
// })

// const {modelValue, accordion, border} = toRefs(props)
// const emit = defineEmits(['update:modelValue', 'change'])
// const handleChange = (name) => {
//   console.log(name, '===name===')
//   emit('change')
// }

</script>

<template>
  <!-- <van-collapse 
    v-bind="attrs" 
    v-model:modelValue="modelValue" 
    :accordion="accordion" 
    :border="border"
    @change="handleChange"
    >
    <slot></slot>
  </van-collapse> -->

  <van-collapse 
    v-bind="attrs" 
    >
    <slot></slot>
  </van-collapse>
</template>

<style lang="less"></style>