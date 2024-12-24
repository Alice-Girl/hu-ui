

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  // 按钮类型
  type: {
    type: String,
    default: 'default',
    validator: (value) => {
      const valiTypes = ['primary', 'success', 'default', 'danger', 'warning'];
      return valiTypes.indexOf(value)
    }
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => {
      const valiTypes = ['large', 'normal', 'small', 'mini'];
      return valiTypes.indexOf(value)
    }
  },
  text: {
    type: String,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
  iconPrefix: {
    type: String,
  },
  iconPosition: {
    type: String,
    default: 'left'
  },
  tag: {
    type: String,
    default: 'button'
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  block: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hairline: {
    type: Boolean,
    default: false
  },
  loading:{
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
  },
  loadingType: {
    type: String,
    default: 'circle`'
  },
  loadingSize: {
    type: [Number, String],
    default: '20px`'
  },
  url: {
     type: String,
  },
  to: {
    type: [Number, String],
  },
  replace: {
    type: Boolean,
    default: false
  },
 
})

const { type, size, text, color, icon, iconPrefix,iconPosition,tag, nativeType, block, plain, square, round, disabled, hairline, loading,  loadingText, loadingType, loadingSize, url, to, replace
    } = toRefs(props)

const emit = defineEmits(['click', 'touchstart'])

const handleClick = (event) => {
  emit('click', event)
}
const handleTouchstart = (event) => {
  emit('touchstart', event)
}

</script>

<template>
  <van-button   
    :type="type"
    :size="size"
    :text="text"
    :color="color"
    :icon="icon"
    :iconPrefix="iconPrefix"
    :iconPosition="iconPosition"
    :tag="tag"
    :nativeType="nativeType"
    :block="block"
    :plain="plain"
    :square="square"
    :round="round"
    :disabled="disabled"
    :hairline="hairline"
    :loading="loading"
    :loadingText="loadingText"
    :loadingType="loadingType"
    :loadingSize="loadingSize"
    :url="url"
    :to="to"
    :replace="replace"
    @click="handleClick"
    @touchstart="handleTouchstart"
  >
    <slot></slot>
  </van-button>
  

  <!-- <div class="test"></div> -->
</template>

<style lang="less" scoped>
@import './index.less';

</style>