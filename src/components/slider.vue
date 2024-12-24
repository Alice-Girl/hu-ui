<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';

import hySlider from '../../packages/From/hySlider/hySlider.vue';
import hyStepper from '../../packages/From/hyStepper/hyStepper.vue';
import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyCol from '../../packages/baseCompoents/hyCol/hyCol.vue';

const silderVal = ref(20);
const silderValue = ref(50);
const silderDouble = ref([10, 50]);
const silderChange = (value) => showToast('当前值：' + value);
</script>


<template>
  <div class="hy-item">
    <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">Slider滑块 篇</hy-divider>
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>初始状态</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box gray">
          <hy-slider v-model="silderVal"></hy-slider>
        </div>
      </div>
    </div> 
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>选中值</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box gray">
          <hy-slider v-model="silderValue"></hy-slider>
        </div>
      </div>
    </div>
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>禁用</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box gray">
          <hy-slider v-model="silderValue"></hy-slider>
        </div>
      </div>
    </div>
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>扩展-双滑块</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box gray">
          <hy-slider v-model="silderDouble" @change="silderChange"></hy-slider>
        </div>
      </div>
    </div> 
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>扩展-数字输入框</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box display-center">
          <hy-row :gutter="10" style="align-items: center;">
          <hy-col span="14">
            <hy-slider v-model="silderValue"></hy-slider>
          </hy-col>
          <hy-col span="10">
            <hy-stepper v-model="silderValue" ></hy-stepper>
          </hy-col>
          </hy-row>
        </div>
      </div>
    </div> 
    <div class="hy-item-inner-box">
      <div class="inner-box-title"><h4>指定范围</h4></div>
      <div class="inner-box-btns">
        <div class="van-empty-box gray">
          <hy-slider v-model="silderValue" max="88" min="30"></hy-slider>
        </div>
      </div>
    </div> 
  </div>
</template>

<style lang="less" scoped>
 .hy-item{
      padding: 10px;
      font-size: 1rem;
      border-radius: .2rem;
      background-color: #fff;
      margin-bottom: .2rem;
      box-shadow: 0 4px 32px 0 rgba(133, 142, 153, .3), 0 0 16px 0 rgba(133, 142, 153, .12);
      .hy-item-inner-box{
        border-bottom: 1px dashed #969799;
        padding-bottom: 10px;
        font-size: 16px;
        .inner-box-title{
          margin: 10px 0;
          h4{
            color: #969799;
            font-size: 16px;
          }
        }
        .inner-box-btns{
          margin: 0;
          // 倒计时
          .colon {
            display: inline-block;
            margin: 0 4px;
            color: #1989fa;
          }
          .block {
            display: inline-block;
            width: 22px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #1989fa;
          }
          .van-empty-box{
            img{
              width: 100%;
              height: 100%;
            };
            .preview-cover {
              position: absolute;
              bottom: 0;
              box-sizing: border-box;
              width: 100%;
              padding: 4px;
              color: #fff;
              font-size: 12px;
              text-align: center;
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid red;
            }
            .my-rolling-text {
              --van-rolling-text-background: #00A758;
              --van-rolling-text-color: white;
              --van-rolling-text-font-size: 24px;
              --van-rolling-text-gap: 6px;
              --van-rolling-text-item-border-radius: 5px;
              --van-rolling-text-item-width: 40px;
            }
            ::v-deep .van-highlight{
              .custom-class{
                color: red;
              }
            }
          }
          .gray{
            background-color: #f7f8fa;
          }
          // end
          .box{
            width: 40px;
            height: 40px;
            background: #f2f3f5;
            border-radius: 4px;
          }
          
          .van-button{
            margin: 0 5px;
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
      
    }
</style>