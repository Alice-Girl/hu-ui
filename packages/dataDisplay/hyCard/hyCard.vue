<script setup>
import { useAttrs, onMounted, toRefs } from 'vue';
const attrs = useAttrs()

const props = defineProps({
  header: {
    type: String
  },
  footer: {
    type: String
  },
  bodyStyle: {
    type: Object
  },
  bodyClass: {
    type: String
  }
})

const {header, footer, bodyStyle, bodyClass} = toRefs(props)

onMounted(() => {
  // console.log(attrs, '---slots--')
})
</script>

<template>
  <div class="van-card">
   <el-card
    v-bind="attrs"
    :header="header"
    :footer="footer"
    :body-style="bodyStyle"
    :body-class="bodyClass"
   >
    <template v-if="$slots.header">
      <slot name="header"></slot>
    </template>
    <template v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </el-card>
  </div>
</template>

<style lang="less" scoped>

</style>