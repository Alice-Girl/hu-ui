<script setup>
import {useAttrs, onMounted} from 'vue'

defineProps({
  color: {
    type: String,
    default: '#00A758'
  }
})

const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '===attrs=')
})
</script>

<template>
  <van-circle v-bind="attrs"></van-circle>
</template>

<style lang="less" scoped>
.van-circle{
  width: 100px;
  height: 100px;
  background-color: #f4f4f4;
}
</style>