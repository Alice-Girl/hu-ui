<script setup>
// import { useAttrs, toRefs, onMounted } from 'vue';
import { useAttrs, toRefs } from 'vue';
const attrs = useAttrs()

const props = defineProps({
  type:  {
    type: String,
    default: 'default'
  },
  size:  {
    type: String,
    default: 'default'
  },
  color:  {
    type: String,
  },
  show:  {
    type: Boolean,
    default: true
  },
  plain:  {
    type: Boolean,
    default: false
  },
  round:  {
    type: Boolean,
    default: false
  },
  mark:  {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
const handleClose = () => {
  emit('close')
}
const {type, size, color, show, plain, round, mark, textColor, closeable} = toRefs(props)

// onMounted(() => {
//   console.log(attrs, '---slots--')
// })
</script>

<template>
    <van-tag 
      v-bind="attrs"
      :type="type"
      :size="size"
      :color="color"
      :show="show"
      :plain="plain"
      :round="round"
      :mark="mark"
      :text-color="textColor"
      :closeable="closeable"
      @close="handleClose"
      >
        <slot></slot>
    </van-tag>

    <!-- <van-tag 
      v-bind="attrs"
    >
      <slot></slot>
    </van-tag> -->
</template>
<style lang="less" scoped>
::v-deep .van-tag{
  line-height: 28px;
  padding: 0 2px;
  border-radius: 2px;
}
::v-deep .van-tag--large{
  padding: 4px 8px;
}
::v-deep .van-tag--medium{
  padding: 2px 4px;
}

::v-deep .van-tag--default{
  background-color: #00A758;
}
::v-deep .van-tag--success{
  background-color: #00A758;
}
::v-deep .van-tag--warning{
  background-color: #F49600;
}
::v-deep .van-tag--danger{
  background-color: #EC6453;
}
</style>