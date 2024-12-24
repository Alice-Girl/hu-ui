<script setup>
// import { toRefs, onMounted, useAttrs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()
// const props = defineProps({
//   content: {
//     type: [String, Number],
//     default: ''
//   },
//   color: {
//     type: String,
//     default: '#ee0a24'
//   },
//   dot: {
//     type: Boolean,
//     default: false
//   },
//   max: {
//     type: [String, Number],
//   },
//   offset: {
//     type: [String, Number],
//   },
//   showZero: {
//     type: Boolean,
//     default: true
//   },
//   position: {
//     type: String,
//     default: 'top-right'
//   }
// })

// const { content, color, dot, max, offset, showZero, position } = toRefs(props)

// onMounted(() => {
//   console.log(attrs, '===attrs=')
// })

</script>

<!--<template>
   <van-badge 
    :content="content"
    :color="color"
    :dot="dot"
    :max="max"
    :offset="offset"
    :show-zero="showZero"
    :position="position"
  >
    <template v-if="$slots.content">
      <slot name="content"></slot>
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </van-badge
</template> >-->


<template>
  <van-badge 
     v-bind="attrs"
  >
    <template v-if="$slots.content">
      <slot name="content"></slot>
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </van-badge>
</template>

<style lang="less">
</style>