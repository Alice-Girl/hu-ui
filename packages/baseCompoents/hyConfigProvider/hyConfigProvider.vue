<script setup>
const props = defineProps({
  them: {
    type: String,
  }
})
</script>
<template>
  <van-config-provider :theme="props.theme "></van-config-provider>
</template>

<style lang="less">
.van-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
</style>