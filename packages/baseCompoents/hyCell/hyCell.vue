<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()

// const props = defineProps({
// 	title: {
// 		type: [String, Number],
// 		default: '标题',
// 	},
// 	value: {
// 		type: [String, Number],
// 		default: ''
// 	},
// 	label: {
// 		type: [String, Number],
// 		default: ''
// 	},
// 	size: {
// 		type: String,
// 		default: 'medium'
// 	},
// 	icon: {
// 		type: String,
// 		default: ''
// 	},
// 	iconPrefix: {
// 		type: String,
// 		default: 'van-icon'
// 	},
// 	tag: {
// 		type: String,
// 		default: 'div'
// 	},
// 	url: {
// 		type: String,
// 		default: ''
// 	},
// 	to: {
// 		type: [String, Object],
// 		default: ''
// 	},
// 	border: {
// 		type: Boolean,
// 		default: true
// 	},
// 	replace: {
// 		type: Boolean,
// 		default: false
// 	},
// 	clickable: {
// 		type: Boolean,
// 		default: null
// 	},
// 	isLink: {
// 		type: Boolean,
// 		default: false
// 	},
// 	required: {
// 		type: Boolean,
// 		default: false
// 	},
// 	center:{
// 		type: Boolean,
// 		default: false
// 	},
// 	arrowDirection: {
// 		type: String,
// 		default: 'right'
// 	},
// 	titleStyle: {
// 		type: [String, Array ,Object],
// 	},
// 	titleClass: {
// 		type: [String, Array ,Object],
// 	},
// 	valueClass: {
// 		type: [String, Array ,Object],
// 	},
// 	labelClass: {
// 		type: [String, Array ,Object],
// 	}
// })
// const modelValue = ref(props.value)
// const emit =	defineEmits(['click'])

// const handleClick = () => {
// 	emit('click')
// }
</script>

<template>
	<!-- <van-cell
		:title="title"
		:value="modelValue"
		:label="label"
		:size="size"
		:icon="icon"
		:iconPrefix="iconPrefix"
		:tag="tag"
		:url="url"
		:to="to"
		:border="border"
		:replace="replace"
		:clickable="clickable"
		:isLink="isLink"
		:required="required"
		:center="center"
		:arrowDirection="arrowDirection"
		:titleStyle="titleStyle"
		:titleClass="titleClass"
		:valueClass="valueClass"
		:labelClass="labelClass"
		@click="handleClick"
	>
		<template v-if="$slots.title">
			<slot name="title"></slot>
		</template>
		<template v-else-if="$slots.value">
			<slot name="value"></slot>
		</template>
		<template v-else-if="$slots.label">
			<slot name="label"></slot>
		</template>
		<template v-else-if="$slots.icon">
			<slot name="icon"></slot>
		</template>
		<template v-else-if="$slots.right-icon">
			<slot name="right-icon"></slot>
		</template>
		<template v-else>
			<slot name="extra"></slot>
		</template>
	</van-cell> -->
	<van-cell v-bind="attrs">
		<slot></slot>
	</van-cell>
</template>

<style lang="less" scoped>

</style>