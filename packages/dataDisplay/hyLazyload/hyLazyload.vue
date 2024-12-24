<script setup>
import { useAttrs, onMounted } from 'vue';

const attrs = useAttrs()

onMounted(() => {
  console.log(attrs)
})

</script>
<!-- <script>
export default {
  name: 'hyLazyload'
};
</script> -->
<template>
  <img v-bind="attrs" />
</template>

<style lang="less"></style>