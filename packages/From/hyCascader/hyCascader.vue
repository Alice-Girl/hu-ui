<script setup>
import { useAttrs, toRefs } from 'vue';

const props = defineProps({
	activeColor: {
		type: String,
		default: '#00A758'
	}
})
const { activeColor } = toRefs(props);
const attrs = useAttrs();

</script>

<template>
	<van-cascader 
		v-bind="attrs"
		:active-color="activeColor"
	/>
</template>

<style lang="less" scoped>

::v-deep .van-cascader__option--selected {
	color: #00A758;
}
::v-deep .van-cascader__close-icon{
	font-size: 18px;
}
</style>