<script setup>
import { ref } from 'vue';

import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue'
import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyCol from '../../packages/baseCompoents/hyCol/hyCol.vue';
import HyInput from '../../packages/From/hyInput/hyInput.vue';


</script>

<template>
  <div class="hy-item">
    <input />
    <div class="left-item">
      <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">输入框 篇</hy-divider>
      <div class="hy-item-inner-box">
        <div class="inner-box-title"><h4>基础写法</h4></div>
        <div class="inner-box-btns">
          <div class="van-empty-box">
            <hy-row>
                <hy-col span="24">
                  <hy-input
                    value="password"
                    :label="labelTxt"
                    label-align="left"
                    placeholder="请输入"
                    autosize="autosize"
                    :inputAlign="right"
                    :maxlength="12"
                    type="tel"
                  >
                    <template #button>
                      <hy-button size="small" type="primary">发送验证码</hy-button>
                    </template>
                  </hy-input>
                </hy-col>
            </hy-row>
          </div>
        </div>
      </div>
    </div>
  </div>
     
</template>

<style lang="less" scoped>
.left-item{
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #dedede;
  box-shadow: 0 4px 32px 0 rgba(133, 142, 153, .3), 0 0 16px 0 rgba(133, 142, 153, .12);
  border: 1px solid #dedede;
  margin: 0.62rem 0;

  :dee0(.van-button){
    display: inline-block;
  }

  h2{
    font-size: 1.375rem;
  }
}
</style>