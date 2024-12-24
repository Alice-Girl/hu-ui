<script setup>
// import { useAttrs   } from 'vue';
import { useAttrs, toRefs, watch  } from 'vue';
const attrs = useAttrs()

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '320px'
  },
  message: {
    type: Boolean,
    default: false
  },
  messageAlign: {
    type: String,
    default: 'center'
  },
  theme: {
    type: String,
    default: 'default'
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: false
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  },
  confirmButtonColor: {
    type: String,
    default: '#00A758'
  },
  confirmButtonDisabled: {
    type: Boolean,
    default: false
  },
  cancelButtonText: {
    type: String,
    default: "取消"
  },
  cancelButtonColor: {
    type: String,
    default: "black"
  },
  cancelButtonDisabled: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  overlay: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String,
  },
  overlayStyle: {
    type: Object,
  },
  closeOnPopstate: {
    type: Boolean,
    default: false
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  lazyRender:{
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  allowHtml: {
    type: Boolean,
     default: false 
  },
})

const { show, title, width, message, messageAlign, theme, showConfirmButton, showCancelButton, confirmButtonText, confirmButtonColor, confirmButtonDisabled, cancelButtonText, cancelButtonColor, cancelButtonDisabled, zIndex, overlay, overlayClass, overlayStyle, closeOnPopstate, closeOnClickOverlay, lazyRender, lockScroll, allowHtml  } = toRefs(props)

watch(() => props.show, newValue => newValue);
const emit = defineEmits(['update:value', 'confirm', 'cancel', 'close'])
  
const handleConfirm = () => {
  emit('confirm')
  // emit('update:value', false)
}

const handleCancel = () => {
  emit('cancel')
  // emit('update:value', false) 
}
const handleClose = () => {
  emit('close', false);
}

</script>

<template>
<van-dialog
  v-model:show="show"
  v-bind="attrs"
  :title="title"
  :width="width"
  :message="message"
  :message-align="messageAlign"
  :theme="theme"
  :show-confirm-button="showConfirmButton"
  :show-cancel-button="showCancelButton"
  :confirm-button-text="confirmButtonText"
  :confirm-button-color="confirmButtonColor"
  :confirm-button-disabled="confirmButtonDisabled"
  :cancel-button-text="cancelButtonText"
  :cancel-button-color="cancelButtonColor"
  :cancel-button-disabled="cancelButtonDisabled"
  :z-index="zIndex"
  :overlay="overlay"
  :overlay-class="overlayClass"
  :overlay-style="overlayStyle"
  :close-on-popstate="closeOnPopstate"
  :close-on-click-overlay="closeOnClickOverlay"
  :lazy-render="lazyRender"
  :lock-scroll="lockScroll"
  :allow-html="allowHtml"
  @confirm="handleConfirm"
  @cancel="handleCancel"
  @close="handleClose"
>
  <!-- <template v-if="title">
    <slot name="title"></slot>
  </template>
  <template v-else-if="footer">
    <slot name="footer"></slot>
  </template>
  <template v-else>
    <slot name="default"></slot>
  </template> -->
  <slot></slot>
</van-dialog>


<!-- <van-dialog
  v-model:show="show"
  v-bind="attrs"
  @confirm="handleConfirm"
  @cancel="handleCancel"
  @close="handleClose"
>
  <template v-if="title">
    <slot name="title"></slot>
  </template>
  <template v-else-if="footer">
    <slot name="footer"></slot>
  </template>
  <template v-else>
    <slot name="default"></slot>
  </template>
</van-dialog> -->


</template>

<style lang="less" scoped>
::v-deep .van-dialog--default{
  van-dialog__content{
  padding: 26px 24px!important;
  border: 8px solid red;
}
}
</style>