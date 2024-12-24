<script setup>
// import { toRefs, useAttrs } from 'vue';
import { useAttrs } from 'vue';
const attrs = useAttrs()

// const props = defineProps({
//   modelValue: {
//     type: [String, Number],
//     default: ''
//   },
 
// })

// const {modelValue} = toRefs(props)
// const emit = defineEmits(['change'])
// const handleChange = () => {
//   emit('change')
// }

</script>

<template>
<!-- <van-sidebar v-bind="attrs" @change="handleChange"> -->
<van-sidebar v-bind="attrs">
  <slot></slot>
</van-sidebar>
</template>

<style lang="less"></style>