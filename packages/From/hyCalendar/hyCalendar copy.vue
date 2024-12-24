<script setup>
// import { toRefs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs()

// const props = defineProps({
//   type: {
//     type: String,
//     default: 'single',
//   },
//   value: {
//     type: String,
//     default: () => new Date()
//   },
//   switchMode: {
//     type: String,
//     default: 'none'
//   },
//   title: {
//     type: String,
//     default: ''
//   },
//   color: {
//     type: String,
//     default: '#00A758'
//   },
//   minDate: {
//     type: Date,
//   },
//   maxDate: {
//     type: Date,
//   },
//   defaultDate: {
//     type: [Date, null ],
//   },
//   rowHeight:{
//     type: [Number, String],
//     default: 36
//   },
//   formatter: {
//     type: Function,
//   },
//   poppable: {
//     type: Boolean,
//     default: true
//   },
//   lazyRender:{
//     type: Boolean,
//     default: true
//   },
//   showMark: {
//     type: String
//   },
//   showTitle: {
//     type: Boolean,
//     default: false
//   },
//   showSubtitle: {
//     type: Boolean,
//     default: true
//   },
//   showConfirm: {
//     type: Boolean,
//     default: true
//   },
//   readonly:{
//     type: Boolean,
//     default: false
//   },
//   confirmText:{
//     type: String,
//     default: '确认'
//   },
//   confirmDisabledText: {
//     type: String,
//     default: '确认'
//   },
//   firstDayOfWeek: {
//     type: String,
//     default: '0'
//   },
//   // 日历 Poppable 显示的参数
//   position:    {
//     type: String,
//     default: 'bottom'
//   },
//   round:{
//     type: Boolean,
//     default: true
//   },
//   closeOnPopstate: {
//     type: Boolean,
//     default: true
//   },
//   loseOnClickOverlay: {
//     type: Boolean,
//     default: true
//   },
//   safeAreaInsetTop: {
//     type: Boolean,
//     default: false
//   },
//   safeAreaInsetBottom: {
//     type: Boolean,
//     default: true
//   },
//   teleport: {
//     type: [String, Element],
//   },
  
//   // Range props
//   maxRange: {
//     type: [Number,String],
//   },
//   rangePrompt: {
//     type: String,
//   },
//   showRangePrompt: {
//     type: Boolean,
//     default: true
//   },
//   allowSameDay: {
//     type: Boolean,
//     default: false
//   }
// })

// const {value, type, title, color, minDate, maxDate, defaultDate, rowHeight, formatter, poppable, lazyRender, showMark, showTitle, showSubtitle, showConfirm, readonly, confirmText, confirmDisabledText, firstDayOfWeek, position, round, closeOnPopstate, closeOnClickOverlay, safeAreaInsetTop, safeAreaInsetBottom,teleport, maxRange, rangePrompt, showRangePrompt, allow  }  = toRefs(props)

// const {value, type, title, color, minDate, maxDate, defaultDate, rowHeight, formatter, poppable, lazyRender, showMark, showTitle, showSubtitle, showConfirm, readonly, confirmText, confirmDisabledText, firstDayOfWeek }  = toRefs(props)
const emits = defineEmits(['change', 'confirm'])

const handleChange = (value) => {
  emits('change', value)
}

const handleConfirm = (value) => {
  emits('confirm', value)
}

</script>

<template>
  <!-- v-bind="attrs" -->
  <!-- <van-calendar 
    :value="value"
    :type="type"
    :title="title"
    :color="color"
    :min-date="minDate"
    :max-date="maxDate"
    :default-date="defaultDate"
    :row-height="rowHeight"
    :formatter="formatter"
    :poppable="poppable"
    :lazy-render="lazyRender"
    :show-mark="showMark"
    :show-title="showTitle"
    :show-subtitle="showSubtitle"
    :show-confirm="showConfirm"
    :readonly="readonly"
    :confirm-text="confirmText"
    :confirm-disabled-text="confirmDisabledText"
    :first-day-of-week="firstDayOfWeek"
    :position="position"
    :round="round"
    :close-on-popstate="closeOnPopstate"
    :close-on-click-overlay="closeOnClickOverlay"
    :safe-area-inset-top="safeAreaInsetTop"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    :teleport="teleport"
    :max-range="maxRange"
    :range-prompt="rangePrompt"
    :show-range-prompt="showRangePrompt"
    :allow-same-day="allowSameDay"
    v-bind="attrs"
    @change="handleChange"
    @confirm="handleConfirm"
   >
   </van-calendar> -->

   <van-calendar 
     v-bind="attrs"
   >
   </van-calendar>
</template>

<style lang="less">
</style>
