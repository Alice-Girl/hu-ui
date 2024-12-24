<script setup>
// import { toRefs } from 'vue';

import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['success', 'error', 'warning', 'tip', 'permission', 'noService', 'noInternet'].includes(value),
  },
  title: { 
    type: String,
  },
  subtitle: { 
    type: String,
  }
})
// const {type, title, subtitle } = toRefs(props)

import success from '@/assets/imgs/res-success.png'
import error from '@/assets/imgs/res-error.png'
import tip from '@/assets/imgs/res-tip.png'
import warning from '@/assets/imgs/res-warning.png'
import permission from '@/assets/imgs/res-permission.png'
import noService from '@/assets/imgs/noService.png'
import noInternet from '@/assets/imgs/res-noNet.png'

const classes = computed(() => ({
  'result-icon': true,
  [`result-icon--${props.type}`]: true,
}));
</script>

<template>
  <div class="hy-result">
    <div :class="classes">
      <template v-if="type == 'success'">
         <img :src="success" v-if="'result-icon--success'">
      </template>
       <template v-else-if="type == 'error'">
        <img :src="error">
      </template>
      <template v-else-if="type == 'warning'">
        <img :src="warning">
      </template>
      <template v-else-if="type == 'tip'">
        <img :src="tip">
      </template>
      <template v-else-if="type == 'permission'">
        <img :src="permission">
      </template>
      <template v-else-if="type == 'noService'">
        <img :src="noService">
      </template>
      <template v-else>
        <img :src="noInternet">
      </template>
    </div>
    <div class="result-title">{{ title }}</div>
    <div class="result-subtitle">{{ subtitle }}</div>
    <div class="result-extra"><slot name="extra"></slot></div>
  </div>
</template>

<style lang="less" scoped>
.hy-result{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0,0,0, .12);
  padding: 1.25rem;
  box-sizing: border-box;
  .result-icon{
    width: 1.875rem;
    height: 1.875rem;
  }
  .result-icon-success{
    object-fit: cover;
  }
  .result-title{
    margin-top: .9375rem;
    font-size: 1rem;
  }
  .result-subtitle{
    margin-top: .625rem;
    font-size: .75rem;
    color: #606266;
  }
  .result-extra{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .9375rem;
    font-size: .875rem;
  }

}
</style>