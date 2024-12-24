<script setup>
import { useAttrs,toRefs, onMounted  } from 'vue';

const props = defineProps({
  percentage: {
    type: [Number, String],
    default: 0
  },
  trokeWidth: {
    type: [Number, String],
  },
  color: {
    type: String,
    default: '#00A758'
  },
  trackColor: {
    type: String,
    default: '#e5e5e5'
  },
  pivotText: {
    type: String,
    default: ''
  },
  pivotColor: {
    type: String,
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  inactive:{
    type: Boolean,
    default: false
  },
  strokeLinecap: {
    type: String,
    default: 'round'
  },
  showPivot: {
    type: Boolean,
    default: true
  }
 
})
const attrs = useAttrs()

const { percentage, trokeWidth , color , trackColor , pivotText , pivotColor , textColor , inactive , strokeLinecap , showPivot } = toRefs(props)

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <!-- <van-progress v-bind="attrs" /> -->
  <van-progress v-bind="attrs" 
    :percentage="percentage"
    :trokeWidth="trokeWidth"
    :color="color"
    :trackColor="trackColor"
    :pivotText="pivotText"
    :pivotColor="pivotColor"
    :textColor="textColor"
    :inactive="inactive"
    :strokeLinecap="strokeLinecap"
    :showPivot="showPivot"

  >
  </van-progress>
</template>

<style lang="less"></style>