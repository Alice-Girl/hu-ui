<script setup>

// import { ref, onMounted, watch, watchEffect, toRefs  } from 'vue'
import { ref, onMounted, watch, toRefs  } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  width: {
    type: String,
    default: '200px'
  },
  height: {
    type: String,
    default: '200px'
  },
  options: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const { width, height, options } = toRefs(props);

const echartInstance = ref(null)
const chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;

const initChart = () => {
  if (echartInstance.value) {
    echartInstance.value.dispose();
  }
  echartInstance.value = echarts.init(document.getElementById(chartId))
  echartInstance.value.setOption(props.options)
}
const handleResize = () => {
  echartInstance.value.resize()
}

watch(() => props.options, (newOptions) => {
  if (echartInstance.value && newOptions) {
    echartInstance.value.setOption(newOptions);
    }
  }
)
onMounted(() => {
  initChart()
  // watchEffect(() => echartInstance.value.setOption(props.options))
  window.addEventListener('resize', handleResize)
})
</script>

<template>
  <div class="echartBox" 
    :id="chartId" 
    :options=options 
    :style="{width: width, height: height}" 
  >
    </div>
</template>

<style lang="less" scoped>
.echartBox{
  width: 100%;
  height: 100%;
}
</style>