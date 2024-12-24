<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  gutter: {
    type: [Number, String, Array],
  },
  tag: {
    type: String,
    default: 'div'
  },
  justify: {
    type: String,
    default: 'start',
    validator: (value) => {
      const valiTypes = ['start', 'end', 'center', 'between', 'around'];
      // return valiTypes.indexOf(value)
      return valiTypes.includes(value)
    }
  },
  align: {
    type: String,
    default: 'top',
    validator: (value) => {
      const valiTypes = ['top', 'center', 'bottom'];
      return valiTypes.includes(value)
    }
  },
  wrap: {
    type: Boolean,
    default: true
  }
})
const { gutter, tag, justify, align, wrap } = toRefs(props)
const emit = defineEmits(['click'])
const handleClick = (e) => {
  emit('click', e)
}
</script>

<template>
	<van-row
    :gutter="gutter"
    :tag="tag"
    :justify="justify"
    :align="align"
    :wrap="wrap"
    @click="handleClick"
  >
    <slot></slot>
  </van-row>
</template>

<style lang="less">
@import './css/index.less';
</style>