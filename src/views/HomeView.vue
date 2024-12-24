<script setup>
// 本地测试OK
// import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue';
// import hyButton from '../../packages/baseCompoents/hyButton/hyButton.vue';
// import hyIcon from '../../packages/baseCompoents/hyIcon/hyIcon.vue';
// import hyImage from '../../packages/baseCompoents/hyImage/hyImage.vue';

// 局部引用 正常
// import {hyDivider, hyButton, hyRow, hyCol, hyImage} from 'hy-mobile-ui'

</script>

<template>
  <div class="hy-main" id="app">
    <div class="hy-header">Hy测试</div>
    <div class="hy-body">
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758', padding: '0 16px' }">Button 按钮篇</hy-divider>
        <div class="hy-item-inner-box">
          <h4>基础用法</h4>
          <div class="inner-box-btns">
            <hy-button @click="handleButton('默认')">默认</hy-button>
            <hy-button type="primary" @click="handleButton('主要')">主要</hy-button>
            <hy-button type="success"  @click="handleButton('成功')">成功</hy-button>
            <hy-button type="warning"  @click="handleButton('警告')">警告</hy-button>
            <hy-button type="danger"  @click="handleButton('危险')">危险</hy-button>
          </div>
        </div>
      </div>
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758', padding: '0 16px' }">Icon 图标篇</hy-divider>
        <div class="hy-item-inner-box">
          <h4>基础用法</h4>
          <div class="inner-box-btns">
            <hy-row gutter="20">
              <hy-col span="12" >
                <hy-icon name="setting-o"></hy-icon>
              </hy-col>
            </hy-row>
          </div>
        </div>
      </div>
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758', padding: '0 16px' }">image 图片篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础用法</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-image  fit="contain" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></hy-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
.van-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  /* background: var(--van-popup-background); */
  transition: var(--van-popup-transition);
  -webkit-overflow-scrolling: touch;
  background: rgba(0, 0, 0, .7)!important;
}
.hy-main{
  width: 100%;
  height: 100vh;
  overflow: auto;
  // background-color: #fafafa;
  background-color: #eff2f5;
   
  .hy-header{
    background-color: #00a758;
    border-radius: 6px 6px 0 0;
    height:1rem;
    line-height:1rem;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .hy-body{
    padding: .2rem;
    color: #000;
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
        h4{
          padding-top: 10px;
          color: #969799;
          font-size: 16px;
        }
        .inner-box-btns{
          margin: 0;
          .van-empty-box{
            img{
              width: 100%;
              height: 100%;
            }
            .box{
              width: 40px;
              height: 40px;
              background: #f2f3f5;
              border-radius: 4px;
            }
            ::v-deep .van-highlight{
              .custom-class{
                color: red;
              }
            }
            // ::v-deep .van-radio__icon--checked{
            //   background: #00a758!important;
            //   color: #fff;
            // }
          }
          :v-deep .van-img{
            width: 100%;
            height: 100%;
            border: none;
          }
          .van-button{
            margin: 0 5px;
            &:last-child{
              margin-right: 0;
            }
          }
        }
        ::v-deep.van-col--8{
          background-color: #00a758;
          border: 1px solid red;
        }
      }
      
    }
  }
  ::v-deep .van-popup {
    background-color: rgba(0, 0, 0, 0.7) !important;
    border: 1px solid red;
  }
  ::v-deep .van-toast {
    border: 1px solid green;
    background-color: rgba(0, 0, 0, 0.7) !important;
  }
}

</style>
  