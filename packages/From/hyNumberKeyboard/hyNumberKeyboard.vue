<script setup>
// import {toRefs } from 'vue';
import { useAttrs } from 'vue'

const attrs = useAttrs()
// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false
// 	},
// 	value: {
// 		title: String,
// 		default: ''
// 	},
// 	theme: {
// 		type: String,
// 		default:'custom'
// 	},
// 	transition: {
// 		type: Boolean,
// 		default: true
// 	},
// 	maxlength: {
// 		type:[Number, String],
// 		default: 6
// 	}
// })

// const {value, show, theme,transition, maxlength	} = toRefs(props)

// const emit = defineEmits(['input', 'delete', 'close', 'blur', 'show', 'hide', 'clear'])
// const handleInput = (val) => {
// 	emit('input', val)
// }
// const handleDelete = (val) => {
// 	emit('delete', val)
// }
// const handleClose = (val) => {
// 	emit('close', val)
// }
// const handleblur = (val) => {
// 	emit('blur', val)
// }
// const handleShow = (val) => {
// 	emit('show', val)
// }
// const handleHide = (val) => {
// 	emit('hide', val)
// }
// const handleClear = () => {
// 	emit('clear')
// }




</script>

<template>
	<!-- <van-number-keyboard
		:show="show"
		:value="value"
		:theme="theme"
		extra-key="."
		random-key-order
		:max-length="maxlength"
		close-button-text="取消"
		elete-button-text="删除"
		show-delete-key
		:transition="transition"
		@input="handleInput"
		@delete="handleDelete"
		@close="handleClose"
		@blur="handleblur"
		@show="handleShow"
		@hide="handleHide"
		@clear="handleClear"
	/> -->
	<van-number-keyboard v-bind="attrs" />
</template>

<style lang="less" scoped>
::v-deep .van-key--blue{
	background-color: #00A758;
}
</style>