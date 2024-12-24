<script setup>
import { ref  } from 'vue'
import { showToast } from 'vant';

// 基础
import hyCell from '../../packages/baseCompoents/hyCell/hyCell.vue';
import hyButton from '../../packages/baseCompoents/hyButton/hyButton.vue';
import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyCol from '../../packages/baseCompoents/hyCol/hyCol.vue';

import hyTabs from '../../packages/hyNavigation/hyTabs/hyTabs.vue';
import hyTab from '../../packages/hyNavigation/hyTab/hyTab.vue';


// 反馈
import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue';
import hyLoading from '../../packages/feedBack/hyLoading/hyLoading.vue';
import hyDialog from '../../packages/feedBack/hyDialog/hyDialog.vue';
import hyNotify from '../../packages/feedBack/hyNotify/hyNotify.vue';
import hyPullRefresh from '../../packages/feedBack/hyPullRefresh/hyPullRefresh.vue';
import hyActionSheet from '../../packages/feedBack/hyActionSheet/hyActionSheet.vue';
import hyShareSheet from '../../packages/feedBack/hyShareSheet/hyShareSheet.vue'; 
import hyOverlay from '../../packages/feedBack/hyOverlay/hyOverlay.vue';
// import hySwipeCell from '../../packages/feedBack/hySwipeCell/hySwipeCell.vue';

const showDialog = ref(false)
const showDialogTitle = ref(false)
const showDialogBtn = ref(false)
const showDialogScroll = ref(false)
const handleDiaConfirm = (val) => {
  showDialog.value = false
  if(val == 'title') {
    showDialogTitle.value = false
  }else if(val == 'btn') {
    showDialogBtn.value = false
  }else if(val == 'scroll'){
    showDialogScroll.value = false
  }
  else{
    showDialog.value = false
  }
}

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    loading.value = false;
    count.value++;
  }, 1000);
};

const showActionSheet = ref(false);
const showActionSheetCancel = ref(false);
const showActionSheetDes = ref(false);
const showActionSheetStatus = ref(false);
const showActionSheetCus = ref(false);
const actionsCus = [
  { name: '微信', icon: 'wechat' },
  { name: '朋友圈', icon: 'wechat-moments' },
  { name: 'QQ好友', icon: 'qq' },
  { name: '空间', icon: 'star-o' },
  { name: '复制链接', icon: 'link' }
];
const actionsStatus = [
  { name: '动作一展示状态'  },
  { name: '动作一中状态',  color: '#00A758' },
  { name: '动作二选禁用', disabled: true  },
  { name: '动作三', loading: true },
];
const actions = [
  { name: '选项一' },
  { name: '选项二', subname: '我是描述的内容' },
  { name: '选项三' },
];
const onSelect = (item) => {
  actions.value = false;
  showToast(item.name);
};
const onCancel = () => showToast('取消');

const showShareSheet = ref(false);
const showShareMoreSheet = ref(false);

const shareMoreOptions = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
]

const shareOptions = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const handleShareSelect = (option) => {
  showToast(option.name);
  showShareSheet.value = false;
};

const overLay = ref(false)


const notifyVal = ref(false)
const openNotify = () => {
  notifyVal.value = false;
  setTimeout(() => {
    show.value = false;
  }, 2000);
}
</script>

<template>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">遮罩 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-button type="success" text="组件调用" @click="notifyVal = true">通知</hy-button>
      <hy-notify
        v-model:show="notifyVal"
        :type="'success'"
        :title="测试标题"
        @close="notifyVal = false"
      >
        <hy-icon name="bell" style="margin-right: 4px;"></hy-icon>
        <span>成功消息通知</span>
      </hy-notify>
    </div>
  </div>
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">shareSheet分享面板 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="显示分享面板" @click="showShareSheet = true" ></hy-cell>
      <hy-share-sheet
        v-model:show="showShareSheet"
        title="分享"
        :options="shareOptions"
        @select="handleShareSelect"
      >
      </hy-share-sheet>
    </div>
  </div>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>展示多行面板</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="展示多行面板" @click="showShareMoreSheet = true" ></hy-cell>
      <hy-share-sheet
        v-model:show="showShareMoreSheet"
        title="分享"
        :options="shareMoreOptions"
        @select="handleShareSelect"
      >
      </hy-share-sheet>
    </div>
  </div>
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">遮罩 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-button type="success" @click="openNotify" >显示遮罩层</hy-button>
      <hy-overlay
        :show="overLay"
   
      >
      </hy-overlay>
    </div>
  </div>
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">下拉刷新PullRefresh 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型2</h4></div>
    <div class="inner-box-btns">
      <hy-tabs :value="activeTab">
        <hy-tab title="基础用法" style="height: 200px; border: 1px solid #f4f4f4;">
          <hy-pull-refresh 
            v-model="loading"
            pulling-text="下拉即可刷新..."
            loosing-text="释放即可刷新..."
            loading-text="加载中..."
            @refresh="onRefresh"
          >
              <p>刷新次数: {{ count }}</p>
          </hy-pull-refresh>
          

        </hy-tab>
        <hy-tab title="成功提示" style="height: 200px; border: 1px solid #f4f4f4;">
          <hy-pull-refresh
            v-model="loading"
            loosing-text="释放即可刷新..."
            loading-text="加载中..."
            success-text="刷新成功"
            @refresh="onRefresh"
          >
              <p>成功提示刷新次数: {{ count }}</p>
          </hy-pull-refresh>
        </hy-tab>
      </hy-tabs>
     
    </div>
  </div> 
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">ActionSheet动作面板 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="基础用法" @click="showActionSheet = true" ></hy-cell>
      <hy-action-sheet
        v-model:show="showActionSheet" 
        :actions="actions"
        close-on-click-action
         @select="onSelect"
      >
      </hy-action-sheet>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>取消按钮</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="基础用法" @click="showActionSheetCancel = true" ></hy-cell>
      <hy-action-sheet
        v-model:show="showActionSheetCancel" 
        :actions="actions"
        close-on-click-action
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      >
      </hy-action-sheet>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>动作面板描述</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="基础用法" @click="showActionSheetDes = true" ></hy-cell>
      <hy-action-sheet
        v-model:show="showActionSheetDes" 
        :actions="actions"
         description="面板描述"
        close-on-click-action
        @select="onSelect"
      >
      </hy-action-sheet>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>动作面状态</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="基础用法" @click="showActionSheetStatus = true" ></hy-cell>
      <hy-action-sheet
        v-model:show="showActionSheetStatus" 
        :actions="actionsStatus"
        description="面板描述"
        close-on-click-action
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      >
      </hy-action-sheet>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>自定义面板</h4></div>
    <div class="inner-box-btns">
      <hy-cell is-link title="基础用法" @click="showActionSheetCus = true" ></hy-cell>
      <hy-action-sheet
        v-model:show="showActionSheetCus" 
        title="标题"
        :actions="actionsCus"
        description="面板描述"
        close-on-click-action
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
      >
      </hy-action-sheet>
    </div>
  </div> 
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">加载 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-loading :color="'#00A758'" type="spinner" :size="'30px'" :text-size="'14px'" :text-color="'#c9c9c9'" :vertical="false">加载中...</hy-loading>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>自定义大小及形状</h4></div>
    <div class="inner-box-btns">
      <hy-loading :color="'#00A758'"  :size="'30px'" :text-color="'#00A758'" :vertical="false">加载中...</hy-loading>
      <hy-loading :color="'#00A758'" type="spinner" :size="'30px'" :text-size="'14px'" :text-color="'#c9c9c9'" :vertical="false">加载中...</hy-loading>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>加载文案</h4></div>
    <div class="inner-box-btns">
      <hy-loading :color="'#00A758'"  :size="'30px'"  :vertical="false">加载中...</hy-loading>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>加载方向</h4></div>
    <div class="inner-box-btns">
      <hy-loading :color="'#00A758'"  :size="'30px'"  vertical>加载中...</hy-loading>
    </div>
  </div> 
</div>

<div class="hy-item">
  <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">弹框Dialog 篇</hy-divider>
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>基础类型</h4></div>
    <div class="inner-box-btns">
      <hy-cell title="打开弹出框" @click="showDialog = true"></hy-cell>
      <hy-dialog
        v-model:show="showDialog"
        :showCancelButton="false"
        @confirm="handleDiaConfirm"
      >
       <p style="padding: 26px 24px;"> 无标题呢欧容：生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多</p>
      </hy-dialog>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>标题弹框</h4></div>
    <div class="inner-box-btns">
      <hy-cell title="打开弹出框" @click="showDialogTitle = true"></hy-cell>
      <hy-dialog
        v-model:show="showDialogTitle"
        title="弹框标题"
        :showCancelButton="false"
        @confirm="handleDiaConfirm('title')"
      >
        <p style="padding: 26px 24px;"> 生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多</p>
      </hy-dialog>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>按钮操作框</h4></div>
    <div class="inner-box-btns">
      <hy-cell title="打开弹出框" @click="showDialogTitle = true"></hy-cell>
      <hy-dialog
        v-model:show="showDialogBtn"
        title="弹框标题"
        @confirm="handleDiaConfirm('btn')"
      >
        <p style="padding: 26px 24px;"> 生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多</p>
      </hy-dialog>
    </div>
  </div> 
  <div class="hy-item-inner-box">
    <div class="inner-box-title"><h4>滚动</h4></div>
    <div class="inner-box-btns">
      <hy-cell title="打开弹出框" @click="showDialogScroll = true"></hy-cell>
      <hy-dialog
        v-model:show="showDialogScroll"
        title="弹框标题"
        @confirm="handleDiaConfirm('scroll')"
      >
        <p style="padding: 26px 24px; max-height: 120px; overflow-y: scroll;" > 生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多 生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多 生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多</p>
      </hy-dialog>
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
    .fullHeight{
      height: 300px;
      border: 1px solid #dedede;
    }
  }
}
</style>

