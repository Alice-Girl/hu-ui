<script setup>
import { toRefs, useAttrs } from 'vue';

const attrs = useAttrs()
const props = defineProps({
  type: {
    type: String,
    default: 'png'
  },
  penColor: {
    type: String,
    default: '#000'
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  backgroundColor: {
    type: String,
  },
  clearButtonText: {
    type: String,
    default: '清空'
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  },
  
})

const {type, penColor, lineWidth, backgroundColor, clearButtonText, confirmButtonText} = toRefs(props);

const emit = defineEmits(['start','end','ingle', 'submit', 'clear']);
const handleStart = () => {
  emit('start');
};
const handleEnd = () => {
  emit('end');
};
const handleSingle = () => {
  emit('single');
};
const handleSubmit = (data) => {
  emit('submit', data);
};
const handleClear = () => {
  emit('clear');
}
</script>

<template>
  <van-signature 
    v-bind="attrs"
    :type="type" 
    :pen-color="penColor" 
    :line-width="lineWidth" 
    :background-color="backgroundColor" 
    :clear-button-text="clearButtonText" 
    :confirm-button-text="confirmButtonText" 
    @start="handleStart"
    @end="handleEnd" 
    @signing="handleSingle"
    @submit="handleSubmit"
    @clear="handleClear" 
  />
</template>

<style lang="less" scoped>
::v-deep .van-button--primary {
 background-color: #00A758;
}
</style>