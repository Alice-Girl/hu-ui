// 基础组件
import hySvg from './packages/baseCompoents/hySvg/hySvg.vue'
import hyButton from './packages/baseCompoents/hyButton/hyButton.vue'
import hyIcon from './packages/baseCompoents/hyIcon/hyIcon.vue'
import hyCell from './packages/baseCompoents/hyCell/hyCell.vue'
import hyCellGroup from './packages/baseCompoents/hyCellGroup/hyCellGroup.vue'
import hyImage from './packages/baseCompoents/hyImage/hyImage.vue'
import hyRow from './packages/baseCompoents/hyRow/hyRow.vue'
import hyCol from './packages/baseCompoents/hyCol/hyCol.vue'
import hyPopup from './packages/baseCompoents/hyPopup/hyPopup.vue'
import hySpace from './packages/baseCompoents/hySpace/hySpace.vue'

// import hyConfigProvider from './packages/baseCompoents/hyConfigProvider/hyConfigProvider.vue'
// import hyToast from './packages/baseCompoents/hyToast/hyToast.vue'

// 表单组件
import hyInput from './packages/From/hyInput/hyInput.vue'
import hyRadio from './packages/From/hyRadio/hyRadio.vue'
import hyRadioGroup from './packages/From/hyRadioGroup/hyRadioGroup.vue'
// checkbox 复选框/复选框组
import hySwitch from './packages/From/hySwitch/hySwitch.vue'
import hyPicker from './packages/From/hyPicker/hyPicker.vue'
import hyPickerGroup from './packages/From/hyPickerGroup/hyPickerGroup.vue'

import hyDatePicker from './packages/From/hyDatePicker/hyDatePicker.vue'
import hyCascader from './packages/From/hyCascader/hyCascader.vue'
import hyFrom from './packages/From/hyFrom/hyFrom.vue'
import hyNumberKeyboard from './packages/From/hyNumberKeyboard/hyNumberKeyboard.vue'
import hyRate from './packages/From/hyRate/hyRate.vue'
import hyStepper from './packages/From/hyStepper/hyStepper.vue'
import hyCalendar from './packages/From/hyCalendar/hyCalendar.vue'
import hySlider from './packages/From/hySlider/hySlider.vue'

import hySearch from './packages/From/hySearch/hySearch.vue'
import hyPasswordInput from './packages/From/hyPasswordInput/hyPasswordInput.vue'
import hyTimePicker from './packages/From/hyTimePicker/hyTimePicker.vue'
import hySignature from './packages/From/hySignature/hySignature.vue'

import hyUploader from './packages/From/hyUploader/hyUploader.vue'
import hyTreeSelect from './packages/From/hyTreeSelect/hyTreeSelect.vue'

// 反馈
import hyDialog from './packages/feedBack/hyDialog/hyDialog.vue'
import hyNotify from './packages/feedBack/hyNotify/hyNotify.vue'
import hyLoading from './packages/feedBack/hyLoading/hyLoading.vue'
import hyActionSheet from './packages/feedBack/hyActionSheet/hyActionSheet.vue'
import hyShareSheet from './packages/feedBack/hyShareSheet/hyShareSheet.vue'
import hyPullRefresh from './packages/feedBack/hyPullRefresh/hyPullRefresh.vue'
import hyOverlay from './packages/feedBack/hyOverlay/hyOverlay.vue'
import hySkeleton from './packages/feedBack/hySkeleton/hySkeleton.vue'
import hyResult from './packages/feedBack/hyResult/hyResult.vue'
import hyDropdownMenu from './packages/feedBack/hyDropdownMenu/hyDropdownMenu.vue'
import hyDropdownItem from './packages/feedBack/hyDropdownItem/hyDropdownItem.vue'
import hySwipeCell from './packages/feedBack/hySwipeCell/hySwipeCell.vue'

// 导航
import hyNavBar from './packages/hyNavigation/hyNavBar/hyNavBar.vue'
import hyTabbar from './packages/hyNavigation/hyTabbar/hyTabbar.vue'
import hyTabbarItem from './packages/hyNavigation/hyTabbarItem/hyTabbarItem.vue'
import hyTabs from './packages/hyNavigation/hyTabs/hyTabs.vue'
import hyTab from './packages/hyNavigation/hyTab/hyTab.vue'
import hyIndexBar from './packages/hyNavigation/hyIndexBar/hyIndexBar.vue'
import hyIndexAnchor from './packages/hyNavigation/hyIndexAnchor/hyIndexAnchor.vue'
import hyGrid from './packages/hyNavigation/hyGrid/hyGrid.vue'
import hyGridItem from './packages/hyNavigation/hyGridItem/hyGridItem.vue'
import hySidebar from './packages/hyNavigation/hySidebar/hySidebar.vue'
import hySidebarItem from './packages/hyNavigation/hySidebarItem/hySidebarItem.vue'

// 展示组件
import hyBadge from './packages/dataDisplay/hyBadge/hyBadge.vue'
import hySwipe from './packages/dataDisplay/hySwipe/hySwipe.vue'
import hySwipeItem from './packages/dataDisplay/hySwipeItem/hySwipeItem.vue'
import hyDivider from './packages/dataDisplay/hyDivider/hyDivider.vue'
import hyEmpty from './packages/dataDisplay/hyEmpty/hyEmpty.vue'
import hyCollapse from './packages/dataDisplay/hyCollapse/hyCollapse.vue'
import hyCollapseItem from './packages/dataDisplay/hyCollapseItem/hyCollapseItem.vue'
import hyImagePreview from './packages/dataDisplay/hyImagePreview/hyImagePreview.vue'
import hyCountDown from './packages/dataDisplay/hyCountDown/hyCountDown.vue'
import hyHighlight from './packages/dataDisplay/hyHighlight/hyHighlight.vue'
import hyLazyload from './packages/dataDisplay/hyLazyload/hyLazyload.vue'
import hyNoticeBar from './packages/dataDisplay/hyNoticeBar/hyNoticeBar.vue'
import hyProgress from './packages/dataDisplay/hyProgress/hyProgress.vue'
import hyRollingText from './packages/dataDisplay/hyRollingText/hyRollingText.vue'

import hySteps from './packages/dataDisplay/hySteps/hySteps.vue'
import hyStep from './packages/dataDisplay/hyStep/hyStep.vue'

import hyTextEllipsis from './packages/dataDisplay/hyTextEllipsis/hyTextEllipsis.vue'
import hyWatermark from './packages/dataDisplay/hyWatermark/hyWatermark.vue'
import hyTag from './packages/dataDisplay/hyTag/hyTag.vue'
import hyAvatar from './packages/dataDisplay/hyAvatar/hyAvatar.vue'
import hyCard from './packages/dataDisplay/hyCard/hyCard.vue'

// echart
import hyEchart from './packages/hyEchart/hyEchart.vue'

// 全量注册组件组件
const components = [
  // 基础组件
  hySvg,
  hyButton,
  hyIcon,
  hyCell,
  hyCellGroup,
  hyImage,
  hyRow,
  hyCol,
  hyPopup,
  // hyToast,
  // hyConfigProvider,
  hySpace,

  // 表单组件
  hyInput,
  hyRadio,
  hyRadioGroup,
  hySwitch,
  hyPicker,
  hyPickerGroup,

  hyDatePicker,
  hyCascader,
  hyFrom,
  hyNumberKeyboard,
  hyRate,
  hyStepper,
  hySlider,
  hyCalendar,
  hySearch,
  hyPasswordInput,
  hyTimePicker,
  hySignature,
  hyUploader,
  hyTreeSelect,

  // 反馈
  hyDialog,
  hyNotify,
  hyLoading,
  hyActionSheet,
  hyShareSheet,
  hyPullRefresh,
  hyOverlay,
  hyResult,
  hySkeleton,
  hyDropdownMenu,
  hyDropdownItem,
  hySwipeCell,

  // 导航
  hyNavBar,
  hyTabbar,
  hyTabbarItem,
  // hyTabbar,
  // hyTabbarItem,
  hyTabs,
  hyTab,
  hyIndexBar,
  hyIndexAnchor,
  hyGrid,
  hyGridItem,
  hySidebar,
  hySidebarItem,

  // 展示组件
  hyBadge,
  hySwipe,
  hySwipeItem,
  hyDivider,
  hyEmpty,
  hyImagePreview,
  hyCollapse,
  hyCollapseItem,
  hyCountDown,
  hyHighlight,
  hyLazyload,
  hySteps,
  hyStep,
  hyNoticeBar,
  hyProgress,
  hyRollingText,
  hyTextEllipsis,
  hyWatermark,
  hyTag,
  hyAvatar,
  hyCard,
  hyEchart
]
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

// 按需导入
export {
  hySvg,
  hyButton,
  hyIcon,
  hyCell,
  hyCellGroup,
  hyImage,
  hyRow,
  hyCol,
  hyPopup,
  hySpace,
  // hyToast,
  // hyConfigProvider,

  // 表单
  hyInput,
  hyRadioGroup,
  hyRadio,
  hySwitch,
  hyPicker,
  hyPickerGroup,
  hyDatePicker,
  hyCascader,
  hyFrom,
  hyNumberKeyboard,
  hyRate,
  hyStepper,
  hyCalendar,
  hySlider,
  hySearch,
  hyPasswordInput,
  hyTimePicker,
  hySignature,
  hyUploader,
  hyTreeSelect,

  // 反馈
  hyDialog,
  hyNotify,
  hyLoading,
  hyActionSheet,
  hyShareSheet,
  hyPullRefresh,
  hyOverlay,
  hySkeleton,
  hyResult,
  hyDropdownMenu,
  hyDropdownItem,
  hySwipeCell,

  // 导航
  hyNavBar,
  hyTabbar,
  hyTabbarItem,
  hyTabs,
  hyTab,
  hyIndexBar,
  hyIndexAnchor,
  hyGrid,
  hyGridItem,
  hySidebar,
  hySidebarItem,

  // 展示组件
  hyBadge,
  hySwipe,
  hySwipeItem,
  hyDivider,
  hyEmpty,
  hyImagePreview,
  hyCollapse,
  hyCollapseItem,
  hyCountDown,
  hyHighlight,
  hyLazyload,
  hySteps,
  hyStep,
  hyNoticeBar,
  hyProgress,
  hyRollingText,
  hyTextEllipsis,
  hyWatermark,
  hyTag,
  hyAvatar,
  hyCard,
  hyEchart
}

// 导出全量
export default install
