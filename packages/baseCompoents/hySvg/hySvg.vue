<template>
	<svg 
		class="svg-icon"
		aria-hidden="true" 
		:style="'width:' + size + ';height:' + size"
	>
		<use :xlink:href="symbolId" :fill="color"/>
	</svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
	// 名字
	name: {
		type: String,
		require: true,
		default: "",
	},
	// 填充颜色
	color: {
		type: String,
		default: "#000",
	},
	// 大小
	size: {
		type: String,
		default: "16px",
	},
});

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style lang="less" scoped>
.svg-icon{
	width: 16px;
	height: 16px;
	margin: 10px;
	vertical-align: middle;
}
</style>