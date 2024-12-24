<script setup>
// import { toRefs, onMounted } from 'vue'
import { useAttrs, onMounted } from 'vue'
const attrs = useAttrs()
// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false
//   },
//   overlay: {
//     type: Boolean,
//     default: true
//   },
//   position: {
//     type: String,
//     default: 'center'
//   },
//   overlayClass: {
//     type: [String, Array, Object],
//     default: 'center'
//   },
//   overlayStyle: {
//     type: Object,
//   },
//   duration: {
//     type: [Number, String],
//     default: 300
//   },
//   zIndex: {
//     type: [Number, String],
//     default: 2000
//   },
//   round: {
//     type: Boolean,
//     default: false
//   },
//   lockScroll: {
//     type: Boolean,
//     default: true
//   },
//   lazyRender: {
//     type: Boolean,
//     default: true
//   },
//   closeOnPopstate: {
//     type: Boolean,
//     default: false
//   },
//   closeOnClickOverlay: {
//     type: Boolean,
//     default: true
//   },
//   closeable: {
//     type: Boolean,
//     default: false
//   },
//   closeIcon: {
//     type: String,
//   },
//   closeIconPosition: {
//     type: String,
//     default: 'top-right'
//   },
//   beforeClose: {
//     type: Function
//   },
//   iconPrefix: {
//     type: String
//   },
//   transition: {
//     type: String
//   },
//   transitionAppear: {
//     type: Boolean,
//     default: false,
//   },
//   teleport: {
//     type: [String, Element],
//   },
//   safeAreaInsetTop: {
//     type: Boolean,
//     default: false
//   },
//   safeAreaInsetBottom: {
//     type: Boolean,
//     default: false
//   },
// })


// const {show,overlay, position, overlayClass, overlayStyle, duration,zIndex, round, lockScroll, lazyRender, closeOnPopstate, closeOnClickOverlay, closeable, closeIcon, closeIconPosition, beforeClose, iconPrefix, transition, transitionAppear, teleport, safeAreaInsetTop, safeAreaInsetBottom } = toRefs(props)

// const emit = defineEmits(['update:show', 'click', 'click-overlay','click-close-icon', 'open', 'colse', 'opened', 'closed' ])

// const handleClick = () => {
//   emit('click' )
// }
// const handleClickOverlay = () => {
//   emit('click-overlay' )
// }
// const handleCloseIcon = () => {
//   emit('click-close-icon' )
// }
// const handleOpen = () => {
//   emit('open' )
// }
// const handleClose = () => {
//   emit('update:show', false);
//   emit('close', false )
// }
// const handleOpened = () => {
//   emit('opened')
// }
// const handleClosed = () => {
//   emit('closed')
// }

onMounted(() => {
  // console.log(attrs, '====show==')
})

</script>
<template>
  <!-- <van-popup
    :show="show"
    :overlay="overlay"
    :position="position"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :duration="duration"
    :z-index="zIndex"
    :round="round"
    :lock-scroll="lockScroll"
    :lazy-render="lazyRender"
    :close-on-popstate="closeOnPopstate"
    :close-on-click-overlay="closeOnClickOverlay"
    :closeable="closeable"
    :close-icon="closeIcon"
    :close-icon-position="closeIconPosition"
    :before-close="beforeClose"
    :icon-prefix="iconPrefix"
    :transition="transition"
    :transition-appear="transitionAppear"
    :teleport="teleport"
    :safe-area-inset-top="safeAreaInsetTop"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    @click="handleClick"
    @click-overlay="handleClickOverlay"
    @click-close-icon="handleCloseIcon"
    @open="handleOpen"
    @close="handleClose"
    @opened="handleOpened"
    @closed="handleClosed"
    :style="{ height: '50%' }"
  >
    <template v-if="$slots.default">
      <slot name="default"></slot>
    </template>
    <template v-else-if="$slots.overlay-content">
      <slot name="overlay-content"></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </van-popup> -->
  <van-popup v-bind="attrs"></van-popup>
</template>


<style lang="less" scoped>
@import "./css/index.less";
</style>