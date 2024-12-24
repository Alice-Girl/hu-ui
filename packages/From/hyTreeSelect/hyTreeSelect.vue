<script setup>
// import { toRefs, useAttrs } from 'vue';
import { useAttrs } from 'vue';

const attrs = useAttrs();

// const props = defineProps({
//   items: {
//     type: Array,
//     default: () => []
//   },
//   height: {
//     type: [String, Number],
//     default: 300
//   },
//   max: {
//     type: [String, Number],
//     default: Infinity
//   },
//   selectedIcon: {
//     type: String,
//     default: Infinity
//   }
// })

// const {items, height, max, selectedIcon} = toRefs(props)

// const emit = defineEmits(['click-nav', 'click-item'])

// const handleClickNav = (index) => {
//   emit('click-nav', index)
// }
// const handleClickItem = (index) => {
//   emit('click-item', index)
// }

</script>


<template>
  <van-tree-select
    v-bind="attrs"
    :items="items"
    :height="height"
    :max="max"
    :selected-icon="selectedIcon"
    @click-nav="handleClickNav"
    @click-item="handleClickItem"
  />
</template>

<style lang="less" scoped>
::v-deep .van-sidebar-item--select{
  color: #00A758;
}
::v-deep  .van-sidebar-item--select:before {
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #00A758;
}
::v-deep .van-tree-select__item--active{
  color: #00A758
}
</style>