
<script setup>
import { useAttrs, toRefs, onMounted } from 'vue';
const attrs = useAttrs()

const props = defineProps({
  name: {
    type: [String, Number],
    default: 'index'
  },
  icon: {
    type: String,
  },
  size: {
    type: String,
  },
  title: {
    type: String,
    default: ''
  },
  value: {
   type: [String, Number],
  },
  label: {
   type: [String, Number],
  },
  border: {
    type: Boolean,
    default: true
  },
  isLink: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  lazyRender: {
    type: Boolean,
    default: true
  },
  titleClass: {
    type: String,
  },
  valueClass: {
    type: String,
  },
  labelClass: {
    type: String,
  }
})

const {name, icon, size, title, value, label, border, isLink, disabled, readonly, lazyRender, titleClass, valueClass, labelClass} = toRefs(props)
onMounted(() => {
  //  console.log(attrs, '===collapseItem=')
})

</script>

<template>
<van-collapse-item 
   v-bind="attrs"
   :name="name"
   :icon="icon"
   :size="size"
   :title="title"
   :value="value"
   :label="label"
   :border="border"
   :is-link="isLink"
   :disabled="disabled"
   :readonly="readonly"
   :lazy-render="lazyRender"
   :title-class="titleClass"
   :value-class="valueClass"
   :label-class="labelClass"
>
   <template v-if="$slots.title">
      <slot name="title"></slot>
   </template>
   <template v-else-if="$slots.value">
      <slot name="value"></slot>
   </template>
   <template v-else-if="$slots.label">
      <slot name="label"></slot>
   </template>
   <template v-else-if="$slots.icon">
      <slot name="icon"></slot>
   </template>
   <template v-else-if="$slots.right-icon">
      <slot name="right-icon"></slot>
   </template>
   <template v-else-if="$slots.default">
      <slot></slot>
   </template>
</van-collapse-item>
</template>

<style lang="less"></style>