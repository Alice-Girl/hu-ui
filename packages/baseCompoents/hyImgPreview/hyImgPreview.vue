<!-- <script setup>
import { toRefs, useAttrs, onMounted } from 'vue';
// import { toRefs, onMounted } from 'vue';

const attrs = useAttrs()
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
  },
  startPosition: {
    type: [Number, String],
    default: 0
  },
  swipeDuration: {
    type: [Number, String],
    default: 300
  },
  showIndex: {
    type: Boolean,
    default: true
  },
  showIndicators: {
    type: Boolean,
    default: false
  },
  loop:{
    type: Boolean,
    default: true
  },
  doubleScale: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: Function
  },
  closeOnPopstate: {
    type: Boolean,
    default: true
  },
  closeOnClickImage: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  vertical: {
    type: Boolean,
    default: false
  },
  className: {
    type: [Boolean, String, Object],
    default: false
  },
  maxZoom: {
    type: [Number, String],
    default: 3
  },
  minZoom: {
    type: Number,
    default: 1/3
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: String,
  },
  closeIconPosition: {
    type: String,
    default: 'top-right'
  },
 
  transition: {
    type: String,
    default: 'van-fade'
  },
  overlayClass: {
    type: [String, Array, Object]
  },
  overlayStyle: {
    type: Object
  },
  teleport: {
    type: [String, Element],
  },
})

const { show, images, startPosition, swipeDuration, showIndex, showIndicators, loop, doubleScale, closeOnPopstate, closeOnClickImage, closeOnClickOverlay, vertical, className, closeable, closeIcon, closeIconPosition, transition, overlayClass, overlayStyle, teleport } = toRefs(props);

const emit = defineEmits(['update:show', 'close', 'closed', 'change', 'scale', 'long-press']);
const handleClose = () => {
  emit('update:show', FontFaceSetLoadEvent);
  emit('close', false);
  console.log('关闭')
}
const handleClosed = () => {
  emit('closed');
}
const handleChange = () => {
  emit('change');
}
const handleScale = () => {
  emit('scale');
}
const handleLongPress = () => {
  emit('long-press');
}

onMounted(() => {
  console.log(attrs, '---slots--')
})
</script>

<template>
  <van-image-preview
    :show="show"
    :images="images"
    :start-position="startPosition"
    :swipe-duration="swipeDuration"
    :show-index="showIndex"
    :show-indicators="showIndicators"
    :loop="loop"
    :doubleScale="doubleScale"
    :close-on-popstate="closeOnPopstate"
    :close-on-click-image="closeOnClickImage"
    :close-on-click-overlay="closeOnClickOverlay"
    :vertical="vertical"
    :class-name="className"
    :closeable="closeable"
    :close-icon="closeIcon"
    :close-icon-position="closeIconPosition"
    :transition="transition"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :teleport="teleport"
    @close="handleClose"
    @closed="handleClosed"
    @change="handleChange"
    @scale="handleScale"
    @long-press="handleLongPress"
  >
    <template v-if="$attrs.index">
      <slot name="index"></slot>
    </template>
    <template v-else-if="$attrs.cover">
      <slot name="cover"></slot>
    </template>
    <template v-else-if="$attrs.image">
      <slot name="image"></slot>
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </van-image-preview>
</template>
<style lang="less" scoped>
</style> -->

<script setup>
import { useAttrs, onMounted } from 'vue';
// import { onMounted } from 'vue';

const attrs = useAttrs()

onMounted(() => {
  // console.log(attrs, '---slots--')
})

</script>

<template>
  <van-image-preview
    v-bind="attrs"
  >
</van-image-preview>
</template>

<style lang="less"></style>

