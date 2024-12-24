<script setup>
// import { useAttrs, toRefs } from 'vue';
import {  useAttrs  } from 'vue';

const attrs = useAttrs()
// const props = defineProps({
defineProps({
//   type: {
//     type: String,
//     default: 'single',
//   },
//   value: {
//     type: String,
//     default: () => new Date()
//   },
//   title: {
//     type: String,
//     default: ''
//   },
  color: {
    type: String,
    default: '#00A758'
  },
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
})

// const { type, value, title, color, minDate, maxDate, defaultDate, rowHeight, formatter, poppable, lazyRender, showMark, showTitle, showSubtitle, showConfirm, readonly, confirmText, confirmDisabledText, firstDayOfWeek  } = toRefs(props)

// // const modelValue = ref(props.modelValue)

// const emit = defineEmits(['update:modelValue', 'confirm'])
// const handleChange = (date) => {
//   emit('update:modelValue', date)
// }

// const handleConfirm = (date) => {
//   emit('confirm', date)
// }
</script>

<template>
  <!-- <van-calendar 
    v-bind="attrs"
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
    @change="handleChange"
    @confirm="handleConfirm"
   >
   </van-calendar> -->

   <van-calendar v-bind="attrs" :color="color"></van-calendar>
</template>

<style lang="less" scoped>
::v-deep .van-calendar__selected-day{
  border-radius: 50%;
  border: 1px solid pink;
}
</style>
