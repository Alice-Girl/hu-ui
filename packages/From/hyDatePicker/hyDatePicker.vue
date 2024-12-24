<script setup>
import { useAttrs  } from 'vue'

const attrs = useAttrs()
// defineProps({
// 	minDate: {
// 			type: Date,
// 			default: () => {
// 					return new Date()
// 			}
// 	},
// 	maxDate: {
// 			type: Date,
// 			default: () => {
// 					return new Date()
// 			}
// 	}
// })
</script>

<template>
	<van-date-picker
		:bind="attrs"
	>
	</van-date-picker>
</template>

<style lang="less">
</style>