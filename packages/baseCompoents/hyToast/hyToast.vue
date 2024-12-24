<!-- <script setup>
import { toRefs } from 'vue';

const props = defineProps({
   show: {
      type: String,
      default: 'false'
   },
   type: {
      type: String,
      default: 'text'
   },
   position: {
      type: String,
      default: 'middle'
   },
   message: {
      type: String,
      default: ''
   },
   wordBreak: {
      tyoe: String,
      default: 'break-all'
   },
   icon: {
      type: String,
      default: ''
   },
   iconSize: {
      type: String,
      default: '36px'
   },
   iconPrefix: {
      type: String,
      default: 'vanicon'
   },
   overlay: {
      type: Boolean,
      default: false
   },
   forbidClick: {
      type: Boolean,
      default: false
   },
   closeOnClick: {
      type: Boolean,
      default: false
   },
   closeOnClickOverlay: {
      type: Boolean,
      default: false
   },
  
   loadingType: {
      type: String,
      default: 'circular'
   },
   duration: {
      type: Number,
      default: 2000
   },
   className: {
      type: [String, Number, Object],
      default: ''
   },
   overlayClass: {
      type: [String, Number, Object],
   },
   overlayStyle: {
      type: Object,
   },
   transition: {
      type: [String, Element],
      default: 'van-fade'
   },
   teleport: {
      type: [String, Element],
      default: 'body'
   },
   zIndex: {
      type: [String, Number],
      default: 2000
   }
})

 const { show, type, position, message, wordBreak, icon, iconSize, iconPrefix, overlay, forbidClick, closeOnClick, closeOnClickOverlay, loadingType, duration, className, overlayClass, overlayStyle, transition, teleport, zIndex } = toRefs(props)
 
 const emit = defineEmits(['close', 'opened'])
 const handleClose = () => {
   emit('close', false )
 }
 
 const handleOpend = () => {
   emit('opened', show)
   
 }
</script>

<template>
   <van-toast 
      :show="show"
      :type="type"
      :position="position"
      :message="message"
      :word-break="wordBreak"
      :icon="icon"
      :icon-size="iconSize"
      :icon-prefix="iconPrefix"
      :overlay="overlay"
      :forbid-click="forbidClick"
      :close-on-click="closeOnClick"
      :close-on-click-overlay="closeOnClickOverlay"
      :loading-type="loadingType"
      :duration="duration"
      :class-name="className"
      :overlay-class="overlayClass"
      :overlay-style="overlayStyle"
      :transition="transition"
      :teleport="teleport"
      :z-index="zIndex"
      style="padding: 0"
      @close="handleClose"
      @opened="handleOpend"
   >
      <slot></slot>
   </van-toast>
</template>

<style lang="less" scoped>
</style> -->

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()
</script>

<template>
<van-toast 
   v-bind="attrs"
>
</van-toast>

</template>

<style lang="less" scoped></style>