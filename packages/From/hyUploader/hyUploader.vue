<script setup>
// import { toRefs } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()
// const props = defineProps({
// 	value: {
// 		type: Array,
// 		default: () => []
// 	},
// 	afterRead: {
// 		type: Function,
// 		default: function(file){console.log(file), '---file--'}
// 	},
// 	accept: {
// 		type: String,
// 		default: 'image/*'
// 	},
// 	name: {
// 		type: String,
// 		default: 'file'
// 	},
// 	previewSize: {
// 		type: [Number, String, Array],
// 		default: '80px'
// 	},
// 	previewImage: {
// 		type: Boolean,
// 		default: true
// 	},
// 	previewFullImage: {
// 		type: Boolean,
// 		default: true
// 	},
// 	previewOptions: {
// 		type: Object,
// 	},
// 	multiple: {
// 		type: Boolean,
// 		default: false
// 	},
// 	disabled: {
// 		type: Boolean,
// 		default: false
// 	},
// 	readonly: {
// 		type: Boolean,
// 		default: false
// 	},
// 	deletable: {
// 		type: Boolean,
// 		default: true
// 	},
// 	reupload: {
// 		type: Boolean,
// 		default: false
// 	},
// 	showUpload: {
// 		type: Boolean,
// 		default: true
// 	},
// 	lazyLoad: {
// 		type: String,
// 	},
// 	capture: {
// 		type: String,
// 	},
// 	beforeRead: {
// 		type: Function,
// 		default: function(){return true}
// 	},
// 	beforeDelete: {
// 		type: Function,
// 		default: function(){return true}
// 	},
// 	maxSize: {
// 		type: [Number, String],
// 		default: 1024
// 	},
// 	maxCount: {
// 		type: [Number, String],
// 		default: 1
// 	},
// 	resultType: {
// 		type: String,
//  	},
// 	uploadText: {
// 		type: String,
// 		default: '点击上传'
// 	},
// 	imageFit: {
// 		type: String,
// 		default: 'cover'
// 	},
// 	uploadIcon: {
// 		type: String,
// 		default: 'photograph'
// 	}
// })

// const {
// 	accept,
// 	name,
// 	previewSize,
// 	previewImage,
// 	previewOptions,
// 	multiple,
// 	disabled,
// 	readonly,
// 	deletable,
// 	reupload,
// 	showUpload,
// 	lazyLoad,
// 	capture,
// 	maxSize,
// 	maxCount,
// 	resultType,
// 	uploadText,
// 	imageFit,
// 	uploadIcon
// } = toRefs(props)

// const emit	= defineEmits(['update:modelValue', 'oversize', 'clickUpload', 'clickPreview', 'clickReupload', 'delete', 'closePreview', 'afterRead', 'beforeRead', 'beforeDelete'])

// // 文件超出大小时的限制
// const handleOverSize = (files) => {
// 	console.log('文件超出大小限制')
// 	// emit('hy:uploader:oversize', files)
// 	emit('oversize', files)
// }

// // 点击上传区域时触发
// const handleClickUpdate = () => {
// 	console.log('点击上传区域时触发')
// 	// emit('hy:uploader:clickUpload')
// 	emit('clickUpload')
// }

// // 点击预览图时触发
// const handleClickPreview = () => {
// 	console.log('点击预览图时触发')
// 	// emit('hy:uploader:clickPreview')
// 	emit('clickPreview')
// }

// // 点击覆盖上传时触发
// const handleClickReupload = () => {
// 	console.log('点击预览图时触发')
// 	// emit('hy:uploader:clickReupload')
// 	emit('clickReupload')
// }

// // 关闭全屏图片预览时触发
// const handleClosePreview = () => {
// 	console.log('关闭全屏图片预览时触发')
// 	// emit('hy:uploader:closePreview')
// 	emit('closePreview')
// }

// // 删除文件时出发
// const handleDelete = (index) => {
// 	console.log('删除文件时出发')
// 	emit('delete', index)
// }
// // 文件读取完成后的回调函数
// const handleAfterRead = (file) => {
// 	emit('afterRead', file)
//   console.log(file, '--children-file--');
// }
// // 文件读取前的回调函数
// const handleBeforeRead = (file) => {
// 	emit('beforeRead', file)
//   console.log(file, '--children-file--');
// }
// // 文件删除前的回调函数
// const handleBeforeDelete = () => {
// 	emit('beforeDelete' )
//   console.log('--children-file--');
// }


</script>

<template>
	<!-- <van-uploader
		:value="modelValue"
		:accept="accept"
		:name="name"
		:previewSize="previewSize"
		:previewImage="previewImage"
		:previewFullImage="previewFullImage"
		:previewOptions="previewOptions"
		:multiple="multiple"
		:disabled="disabled"
		:readonly="readonly"
		:deletable="deletable"
		:reupload="reupload"
		:showUpload="showUpload"
		:lazyLoad="lazyLoad"
		:capture="capture"
		:afterRead="handleAfterRead"
		:beforeRead="handleBeforeRead"
		:beforeDelete="handleBeforeDelete"
		:maxSize="maxSize"
		:maxCount="maxCount"
		:resultType="resultType"
		:uploadText="uploadText"
		:imageFit="imageFit"
		:uploadIcon="uploadIcon"
		@input="$emit('update:modelValue', $event.target.value)"
		@oversize="handleOverSize"
		@clickUpload="handleClickUpdate"
		@clickPreview="handleClickPreview"
		@clickReupload="handleClickReupload"
		@closePreview="handleClosePreview"
		@delete="handleDelete"
	>
		<template v-if="$slots.previewDelete" #previewDelete>
      <slot name="previewDelete"></slot>
    </template>
		<template v-if="$slots.previewCover" #previewCover>
      <slot name="previewCover"></slot>
    </template>
    <template v-else #default>
      <slot name="default"></slot>
    </template>
	</van-uploader>-->
	
	<van-uploader v-bind="attrs"></van-uploader>
</template> 

<style lang="less" scoped>
:deep(.van-uploader__mask-message){
	padding: 0 13px;
}
</style>