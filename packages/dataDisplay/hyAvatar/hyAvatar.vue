<script setup>
import { useAttrs, toRefs, onMounted } from 'vue';
const attrs = useAttrs()

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: [Number],
  },
  shape: {
    type: String,
    default: 'circle'
  },
  src: {
    type: String,
  },
  srcSet: {
    type: String,
  },
  alt: {
    type: String,
    default: 'cover'
 },
  fit: {
    type: String,
    default: 'cover'
 },
})

const {icon, shape, size, src, srcSet, alt, fit} = toRefs(props)
onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
    <el-avatar
      v-bind="attrs"
      :icon="icon"
      :shape="shape"
      :size="size"
      :src="src"
      :src-set="srcSet"
      :alt="alt"
      :fit="fit"
    >
      <slot>{{attrs.default}}</slot>
    </el-avatar>
</template>

<style lang="less"></style>