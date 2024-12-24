<script setup>
import { toRefs, useAttrs } from 'vue';
// import { useAttrs } from 'vue';
const attrs = useAttrs()

const props = defineProps ({ 
  value: {
    type: String,
    default: ''
  },
  pullingText: {
    type: String,
    default: '下拉即可刷新'
  },
  loosingText: {
    type: String,
    default: '释放即可刷新'
  },
  loadingText: {
     type: String,
    default: '加载中'
  },
  successText: {
    type: String,
  },
  successDuration: {
    type: [String, Number],
    default: 500
  },
  animationDuration: {
    type: [String, Number],
    default: 300
  },
  headHeight: {
    type: [String, Number],
    default: 50
  },
  pullDistance: {
    type: [String, Number],
    default: 30
  },
  disabled: {
    type: Boolean,
    default: false
  }
  
})

const {value, pullingText, loosingText, loadingText, successText, successDuration, animationDuration, headHeight, pullDistance, disabled } = toRefs(props)

const emit = defineEmits(['refresh'])
const handleRefresh = () => {
 emit('refresh')
}
const handleChange = () => {
  emit('change')
}

</script>

<template>
  <van-pull-refresh 
    :value="value"
    v-bind="attrs"
    :pullingText="pullingText"
    :loosingText="loosingText"
    :loadingText="loadingText"
    :successText="successText"
    :successDuration="successDuration"
    :animationDuration="animationDuration"
    :headHeight="headHeight"
    :pullDistance="pullDistance"
    :disabled="disabled"
    @refresh="handleRefresh"
    @change="handleChange"
  >
    <slot></slot>
  </van-pull-refresh>

  <!-- <van-pull-refresh 
    v-bind="attrs"
  >
    <slot></slot>
  </van-pull-refresh> -->
</template>

<style lang="less" scoped>
</style>