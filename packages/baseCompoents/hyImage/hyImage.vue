<script setup>
// import { toRefs} from 'vue';
import {  useAttrs } from 'vue';

const attrs = useAttrs();
// const props = defineProps({
// 	src: {
// 		type: String,
// 		default: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
// 	},
// 	fit: {
// 		type: String,
// 		default: 'fill',
// 		validator: (value) => {
//       const valiTypes =  ['fill', 'contain', 'cover', 'none', 'scale-down'];
//       return valiTypes.indexOf(value)
//     }
// 	},	
// 	position: {
// 		type: String,
// 		default: 'center'
// 	},
// 	alt: {
// 		type: String,
// 		default: 'auto'
// 	},
// 	width: {
// 		type: [String, Number],
// 		default: 'auto'
// 	},
// 	height: {
// 		type: [String, Number],
// 		default: 'auto'
// 	},
// 	round: {
// 		type: Boolean,
// 		default: false
// 	},
// 	block: {
// 		type: Boolean,
// 		default: false
// 	},
// 	lazyLoad: {
// 		type: Boolean,
// 		default: false
// 	},
// 	showError: {
// 		type: Boolean,
// 		default: true
// 	},
// 	showLoading: {
// 		type: Boolean,
// 		default: true
// 	},
// 	errorIcon: {
// 		type: String,
// 		default: 'error-circle'
// 	},
// 	loadingIcon: {
// 		type: String,
// 		default: 'photo'
// 	},
// 	iconSize: {
// 		type: [String, Number],
// 		default: '32px'
// 	},
// 	iconPrefix: {
// 		type: String,
// 		default: 'van-icon'
// 	},
// 	crossorigin: {
// 		type: String,
// 	},
// 	referrerpolicy: {
// 		type: String,
// 	}
// })

// const { src, fit , position, alt, width, height, round, block, lazyLoad, showError, showLoading, errorIcon, loadingIcon, iconSize, iconPrefix, crossorigin, referrerpolicy } = toRefs(props)
</script>

<template>
	<!-- <van-image 
		:src="src"
		:fit="fit"
		:position="position"
		:alt="alt"
		:width="width"
		:height="height"
		:round="round"
		:block="block "
		:lazyLoad="lazyLoad"
		:showError="showError"
		:showLoading="showLoading"
		:errorIcon="errorIcon"
		:loadingIcon="loadingIcon"
		:iconSize="iconSize"
		:iconPrefix="iconPrefix"
		:crossorigin="crossorigin"
		:referrerpolicy="referrerpolicy"
	>
		<template v-if="loading">
			<slot name="loading">加载中。。。</slot>
		</template>
		<template v-else-if="error">
			<slot>加载失败</slot>
		</template>
		<template v-else>
			<slot name="default"></slot>
		</template>
	</van-image> -->
	<van-image v-bind="attrs"></van-image>
 </template>


<style lang="less" scoped>
.van-image{
    width: 6.25rem;
    height: 6.25rem;
    border: 1px solid #dedede;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    ::deep .van-loading__dot {
        background-color: #ff0000;
    }
    .van-loading__line:before {
    display: block;
    width: 2px;
    height: 25%;
    margin: 0 auto;
    background-color: blue;
    border-radius: 40%;
    content: " ";
}
}
</style>