<script setup>
import { ref, useSlots } from 'vue'
import { showToast } from 'vant';

const slots = useSlots()
const props = defineProps({
	value: {
		type: String,
		default: ''
	},
	label: {
		type: String,
		default: ''
	},
	name: {
		type: String,
		default: ''
	},
	shape: {
		type: String,
		default: 'square'
	},
	background: {
		type: String,
	},
	maxlength: {
		type: Number,
		default: 50
	},
	placeholder: {
		type: String,
		default: '请输入搜索关键词'
	},
	clearable: {
		type: Boolean,
		default: true
	},
	showAction: {
		type: Boolean,
		default: true
	},
	inputAlign: {
		type: String,
		default: 'left'
	},
	disabled: {
		type: Boolean,
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	},
	autofocus: {
		type: Boolean,
		default: false
	},
	actionText: {
		type: String,
		default: '取消'
	},
	leftIcon: {
		type: String,
		default: 'search'
	},
	rightIcon: {
		type: String,
		default: ''
	},
	autocomplete: {
		type: String,
		default: ''
	}
})

const modelValue = ref(props.value)

const emit = defineEmits(['search', 'cancle'])
const handleSearch = (modelValue) => {
	showToast('搜索：' + modelValue);
	emit('search', modelValue.value)
	console.log('children')
	
};
const handleCancel = () =>  {
	showToast('取消');
	emit('cancle' )
	console.log('children')
}

</script>

<template>
	<!-- v-model:modelValue="modelValue" -->
	<van-search 
		:value="modelValue"
		:label="label"
		:name="name"
		:shape="shape"
		:background="background"
		:maxlength="maxlength"
		:placeholder="placeholder"
		:clearable="clearable"
		:inputAlign="inputAlign"
		:disabled="disabled"
		:readonly="readonly"
		:autofocus="autofocus"
		:actionText="actionText"
		:leftIcon="leftIcon"
		:rightIcon="rightIcon"
		@search="handleSearch"
    @cancel="handleCancel"
	 >
	 <template v-if="slots.left">
			<slot name="left"></slot>
		</template>
		<template v-else-if="slots.action">
			<slot name="action"></slot>
		</template>
		<template v-else-if="slots.label">
			<slot name="label"></slot>
		</template>
		<template v-else-if="slots.left-icon">
			<slot name="left-icon"></slot>
		</template>
		<template v-else>
			<slot name="right-icon"></slot>
		</template>
	 </van-search>
</template>

<style lang="less">
</style>