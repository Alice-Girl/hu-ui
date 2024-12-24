<script setup>
import { showToast } from 'vant';
// base com
import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue';
import hyButton from '../../packages/baseCompoents/hyButton/hyButton.vue';
import hyIcon from '../../packages/baseCompoents/hyIcon/hyIcon.vue';
import hyImage from '../../packages/baseCompoents/hyImage/hyImage.vue';
import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyCol from '../../packages/baseCompoents/hyCol/hyCol.vue';
import hySpace from '../../packages/baseCompoents/hySpace/hySpace.vue';
// import hyCell from '../../packages/baseCompoents/hyCell/hyCell.vue';
const handleButton = (val) => {
  console.log(val, '---val------')
  showToast(`点击了${val}`)
}

</script>

<template>
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
  <div class="hy-item-inner-box">
    <h4>按钮尺寸</h4>
    <div class="inner-box-btns">
      <hy-button size="mini" @click="handleButton('迷你型尺寸')">迷你型</hy-button>
      <hy-button size="normal" @click="handleButton('默认尺寸')" type="success">默认</hy-button>
      <hy-button size="small" @click="handleButton('小型尺寸')" type="warning">小型</hy-button>
      <hy-button size="mini"  @click="handleButton('迷你型尺寸')" type="danger">迷你型</hy-button>
      <hy-button size="large" @click="handleButton('大型尺寸')" type="primary">大型</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>朴素按钮</h4>
    <div class="inner-box-btns">
      <hy-button plain @click="handleButton('朴素-默认')">默认</hy-button>
      <hy-button plain type="primary" @click="handleButton('朴素-主要')">主要</hy-button>
      <hy-button plain type="success" @click="handleButton('朴素-成功')">成功</hy-button>
      <hy-button plain type="warning" @click="handleButton('朴素-警告')">警告</hy-button>
      <hy-button plain type="danger" >危险</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>细边框按钮</h4>
    <div class="inner-box-btns">
      <hy-button plain hairline  @click="handleButton('细框-默认')">默认</hy-button>
      <hy-button plain type="primary" @click="handleButton('细框-主要')" hairline >主要</hy-button>
      <hy-button plain type="success" @click="handleButton('细框-成功')" hairline>成功</hy-button>
      <hy-button plain type="warning" @click="handleButton('细框-警告')" hairline>警告</hy-button>
      <hy-button plain type="danger" @click="handleButton('细框-危险')" hairline>危险</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>禁用按钮</h4>
    <div class="inner-box-btns">
      <hy-button disabled @click="handleButton('禁用-默认')">默认</hy-button>
      <hy-button disabled  type="primary" @click="handleButton('禁用-主要')" hairline >主要</hy-button>
      <hy-button disabled  type="success" @click="handleButton('禁用-成功')"  hairline>成功</hy-button>
      <hy-button disabled  type="warning" @click="handleButton('禁用-警告')" hairline>警告</hy-button>
      <hy-button disabled  type="danger" @click="handleButton('禁用-危险')" hairline>危险</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>加载状态</h4>
    <div class="inner-box-btns">
      <hy-button loading @click="handleButton('加载-默认')" >默认</hy-button>
      <hy-button loading loading-type="spinner"  @click="handleButton('加载-主要')" type="danger">主要</hy-button>
      <hy-button loading loading-text="加载中..." type="success" hairline  @click="handleButton('加载-成功')">成功</hy-button>
      <hy-button loading type="warning" hairline  @click="handleButton('加载-警告')">警告</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>按钮形状</h4>
    <div class="inner-box-btns">
      <hy-button square type="primary" hairline @click="handleButton('按钮形状-方形')">方形按钮</hy-button>
      <hy-button round type="warning" hairline @click="handleButton('按钮形状-圆形')">圆形按钮</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>图标按钮</h4>
    <div class="inner-box-btns">
      <hy-button icon="star-o"  type="primary" hairline  @click="handleButton('图标')"/>
      <hy-button type="success" icon="plus"  @click="handleButton('图标-文字按钮')">文字按钮</hy-button>
      <hy-button 
        plain
        icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
        type="primary"
        @click="handleButton('图标-主要按钮')"
      >
      按钮
    </hy-button>
    </div>
  </div>
  <!-- <div class="hy-item-inner-box">
    <h4>文字按钮</h4>
    <div class="inner-box-btns">
      <hy-button  type="primary"  hairline  @click="handleButton('文字按钮： 主要')"></hy-button>
      <hy-button type="success" @click="handleButton('文字按钮： 关键')">关进</hy-button>
      <hy-button type="warning" @click="handleButton('文字按钮： 警告')">警告</hy-button>
      <hy-button type="danger" @click="handleButton('文字按钮： 危险')">文字按钮</hy-button>
    </div>
  </div> -->
  <!-- <div class="hy-item-inner-box">
    <h4>块级按钮</h4>
    <div class="inner-box-btns">
      <hy-button size="normal" type="primary" block>block</hy-button>
    </div>
  </div> -->
  <div class="hy-item-inner-box">
    <h4>按钮导航</h4>
    <div class="inner-box-btns">
      <hy-button url="https://www.baidu.com" type="primary">跳转地址</hy-button>
      <hy-button to="/" type="success">页面路由</hy-button>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>自定义颜色</h4>
    <div class="inner-box-btns">
      <hy-button color="#604584" @click="handleButton('自定义按钮： 紫罗兰')" type="primary">紫罗兰</hy-button>
      <hy-button color="#F49600" plain @click="handleButton('自定义按钮： 金色')" type="primary">金色</hy-button>
    </div>
  </div>
  <!-- <div class="hy-item-inner-box">
    需要搭配swiper 动画， 后期添加
    <h4>按钮动画</h4>
    <div class="inner-box-btns">
      <hy-button color="#604584" type="primary">紫罗兰</hy-button>
      <hy-button color="#F49600" plain>金色</hy-button>
    </div>
  </div> -->
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
  <div class="hy-item-inner-box">
    <h4>使用图片URL</h4>
    <div class="inner-box-btns">
      <hy-row gutter="20">
        <hy-col span="6" >
          <hy-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" ></hy-icon>
        </hy-col>
        <!-- hot-o -->
      </hy-row>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>徽标提示</h4>
    <div class="inner-box-btns">
      <hy-row gutter="20">
        <hy-col span="8" >
          <hy-icon name="video-o" dot></hy-icon>
        </hy-col>
        <hy-col span="8" >
          <hy-icon name="video-o" badge="9"></hy-icon>
        </hy-col>
        <hy-col span="8" >
          <hy-icon name="video-o" badge="99+"></hy-icon>
        </hy-col>
      </hy-row>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>图标颜色</h4>
    <div class="inner-box-btns">
      <hy-row gutter="20">
        <hy-col span="8" >
          <hy-icon name="balance-o" color="282B3E"></hy-icon>
        </hy-col>
        <hy-col span="8" >
          <hy-icon name="calendar-o" color="#06C7BA"></hy-icon>
        </hy-col>
      </hy-row>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <h4>图标大小</h4>
    <div class="inner-box-btns">
      <hy-row gutter="20">
        <hy-col span="8" >
          <hy-icon name="balance-o" size="20px"></hy-icon>
        </hy-col>
        <hy-col span="8" >
          <hy-icon name="calendar-o" size="3rem"></hy-icon>
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
  <div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">布局 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础用法</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row>
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj2">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>offset用法</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row>
          <hy-col span="4">
            <div :style="styleObj">4</div>
          </hy-col>
          <hy-col span="10" offset="4">
            <div :style="styleObj2">offset 4</div>
          </hy-col>
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>元素间距gutter</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row gutter="20">
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj2">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>垂直 间距</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row :gutter="[20, 20]">
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj2">8</div>
          </hy-col>
          <hy-col span="8">
            <div :style="styleObj">8</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>对其方式: center</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row justify="center">
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
          <hy-col span="6">
            <div :style="styleObj2">6</div>
          </hy-col>
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>对其方式: end</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row justify="end">
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
          <hy-col span="6">
            <div :style="styleObj2">6</div>
          </hy-col>
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>对齐方式: space-between</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row justify="space-between">
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
        <hy-col span="6">
          <div :style="styleObj2">6</div>
        </hy-col>
        <hy-col span="6">
            <div :style="styleObj2">6</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>对齐方式: space-around</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-row justify="space-around">
          <hy-col span="6">
            <div :style="styleObj">6</div>
          </hy-col>
        <hy-col span="6">
          <div :style="styleObj2">6</div>
        </hy-col>
        <hy-col span="6">
            <div :style="styleObj2">6</div>
          </hy-col>
        </hy-row>
      </div>
    </div>
  </div>
  </div>
  <div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">Space间距 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础用法</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-space>
          <hy-button type="primary" @click="handleButton('primary')">primary</hy-button>
          <hy-button type="success" @click="handleButton('success')">success</hy-button>
          <hy-button type="danger" @click="handleButton('danger')">danger</hy-button>
          <hy-button type="warning" @click="handleButton('warning')">warning</hy-button>
        </hy-space>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>垂直方向</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-space  direction="vertical" fill>
          <hy-button type="primary" size="mini" @click="handleButton('mini')">关键</hy-button>
          <hy-button type="success" size="large" @click="handleButton('large')">主要</hy-button>
        </hy-space>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>自定义间距：gutter</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-space :gutter="30">
          <hy-button type="primary" @click="handleButton('主要的')">主要的</hy-button>
          <hy-button type="success" @click="handleButton('关键')">关键</hy-button>
          <hy-button type="danger" @click="handleButton('危险')">危险</hy-button>
          <hy-button type="warning" @click="handleButton('警告')">警告</hy-button>
        </hy-space>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>对齐方式align start, center ,end ,baseline</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <van-radio-group
          v-model="spaceAlign"
          direction="horizontal"
          style="margin-bottom: 16px"
        >
          <van-radio name="start">start</van-radio>
          <van-radio name="center">center</van-radio>
          <van-radio name="end">end</van-radio>
          <van-radio name="baseline">baseline</van-radio>
        </van-radio-group>

        <hy-space :align="spaceAlign" style="padding: 16px; background: #f3f2f5">
          <hy-button type="success">{{ spaceAlign }}</hy-button>
          <div style="padding: 40px 20px; background: #fff">Block</div>
        </hy-space>
      </div>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>space： 换行</h4></div>
    <div class="inner-box-btns">
      <div class="van-empty-box">
        <hy-space wrap>
          <hy-button type="success" size="small" block  @click="handleButton('换行1')">space换行</hy-button>
          <hy-button type="danger" size="small" block  @click="handleButton('换行2')">space换行</hy-button>
          <hy-button type="warning" size="small" block  @click="handleButton('换行3')">space换行</hy-button>
          <hy-button type="default" size="small" block @click="handleButton('换行4')">space换行</hy-button>
          <hy-button type="warning" size="small" block @click="handleButton('换行5')">space换行</hy-button>
          <hy-button type="danger" size="small" block @click="handleButton('换行6')">space换行</hy-button>
          <hy-button type="success" size="small" block @click="handleButton('换行7')">space换行</hy-button>
          <hy-button type="primary" size="small" block @click="handleButton('换行8')">space换行</hy-button>
        </hy-space>
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
    h4{
        font-size: 16px;
        line-height: 40px;
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
        border: 1px solid red;
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
      .cellBox{
        background-color: #f7f8fa;
        padding: 15px 10px;
        box-sizing: border-box;

      }
      .gray{
        background-color: #f7f8fa;
      }
 
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
      .van-pull-refresh{
        height: 100%;
        box-shadow: 0 0 8px rgba(133, 142, 153, .12);
        text-align: center;
        line-height: 88px;
      }
    }
  }

  ::v-deep .van-popup {
    background-color: rgba(0, 0, 0, 0.7) !important;
    border: 1px solid blue;
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
</style>