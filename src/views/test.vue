<script setup>
import { ref  } from 'vue'
import { showToast } from 'vant'

// 基础
import hyCell from '../../packages/baseCompoents/hyCell/hyCell.vue';
import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyCol from '../../packages/baseCompoents/hyCol/hyCol.vue';
import hyButton from '../../packages/baseCompoents/hyButton/hyButton.vue'; 
import hySwitch from '../../packages/From/hySwitch/hySwitch.vue';

// 展示
import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue';
import hySidebar from '../../packages/hyNavigation/hySidebar/hySidebar.vue';
import hySidebarItem from '../../packages/hyNavigation/hySidebarItem/hySidebarItem.vue';
import hyResult from '../../packages/feedBack/hyResult/hyResult.vue';


const sideBarAc = ref(0);
const sidebarChange = (val) => {
  console.log(val, '-index--')
}


import hyCollapse from '../../packages/dataDisplay/hyCollapse/hyCollapse.vue';
import hyCollapseItem from '../../packages/dataDisplay/hyCollapseItem/hyCollapseItem.vue'
const activeCollapse = ref(['1', '2', '3']);
const activeCollapseAcc = ref("1");
const sideBarDot = ref("1");
const sideBarDis = ref("2");
const sideBarCha = ref("3");


import hyTag from '../../packages/dataDisplay/hyTag/hyTag.vue';
const tagShow1 = ref(true)
const tagShow2 = ref(true)
const tagShow3 = ref(true)
const tagShow4 = ref(true)
const handleClose = (val) => {
  if(val === 'primary'){
    tagShow1.value = false
  }else if(val === 'success') {
    tagShow2.value = false
  }else if(val === 'danager') {
    tagShow3.value = false
  }else{
    tagShow4.value = false
  }
}

import hyCard from '../../packages/dataDisplay/hyCard/hyCard.vue';

import hyAvatar from '../../packages/dataDisplay/hyAvatar/hyAvatar.vue';
// const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');
const squareUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png');
// const sizeList = ref([
//   'small', '', 'large'
// ]);

import hyDropdownMenu from '../../packages/feedBack/hyDropdownMenu/hyDropdownMenu.vue';
import hyDropdownItem from '../../packages/feedBack/hyDropdownItem/hyDropdownItem.vue';

const menuRef = ref(null);
const itemRef = ref(null);
const dropVal1 = ref(0);
const dropVal2 = ref('a');
const dropValColor1 = ref(0);
const dropValColor2 = ref('a')
const switch1 = ref(false);
const switch2 = ref(false)

const droupOption1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const droupOption2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];
const droupOptionColor1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const droupOptionColor2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

const dropValDsiable = ref('a')
const droupOptionDisable = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b', disabled: true },
  { text: '销量排序', value: 'c' },
];

const onConfirm = () => {
  itemRef.value.toggle();
};

const typeSuc = ref('success')
const typeError = ref('error')
const typeWarning = ref('warning')
const typeTip = ref('tip')
const typePer = ref('permission')
const typeNoService = ref('noService')
const typeNoInter = ref('noInternet')


const resTitle = ref('一级比标题')
const resSubtitle = ref('二级比标题')

const onFresh = () => {
  showToast('刷新成功')
}


import hySteps from '../../packages/dataDisplay/hySteps/hySteps.vue';
import hyStep from '../../packages/dataDisplay/hyStep/hyStep.vue'; 

</script>

<template>
  <div class="hy-main" id="app">
    <div class="hy-header">Hy测试</div>
    <div class="hy-body">
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">步骤条 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础用法</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-steps :active="active" active-color="#07c160">
                <hy-step>开发中</hy-step>
                <hy-step>进行中</hy-step>
                <hy-step>测试中</hy-step>
                <hy-step>完成</hy-step>
              </hy-steps>
            </div>
          </div>
        </div>
      </div>
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">result 结果 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础：成功</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeSuc"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果错误</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeError"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果警告</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeWarning"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果提示</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeTip"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果没权限</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typePer"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
                <template #extra>
                  <hy-button
                    type="default"
                    size="normal"
                    @click="onFresh"
                  >
                    刷新页面
                  </hy-button>
                  <hy-button
                    type="success"
                    @click="onFresh"
                  >
                    设置权限
                  </hy-button>
                </template>
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果无服务</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeNoService"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
                <template #extra>
                  <hy-button
                    type="success"
                    @click="onFresh"
                  >
                  刷新页面
                  </hy-button>
                </template>
              </hy-result>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>结果无网络</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-result
                :type="typeNoInter"
                :title="resTitle"
                :subtitle="resSubtitle"
              >
                <template #extra>
                  <hy-button
                    type="success"
                    @click="onFresh"
                  >
                  点击重试
                  </hy-button>
                </template>
              </hy-result>
            </div>
          </div>
        </div>
      </div>

      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">下拉菜单 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础写法</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-dropdown-menu>
                <hy-dropdown-item v-model="dropVal1" :options="droupOption1"></hy-dropdown-item>
                <hy-dropdown-item v-model="dropVal2" :options="droupOption2"></hy-dropdown-item>
              </hy-dropdown-menu>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>自定义颜色</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-dropdown-menu active-color="#00A758">
                <hy-dropdown-item v-model="dropValColor1" :options="droupOptionColor1"></hy-dropdown-item>
                <hy-dropdown-item v-model="dropValColor2" :options="droupOptionColor2"></hy-dropdown-item>
              </hy-dropdown-menu>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>向上弹出</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-dropdown-menu active-color="#00A758">
                <hy-dropdown-item v-model="dropValDsiable" :options="droupOptionDisable" ></hy-dropdown-item>
              </hy-dropdown-menu>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>向上弹出</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-dropdown-menu active-color="#00A758" direction="up">
                <hy-dropdown-item v-model="dropValDsiable" :options="droupOptionDisable" ></hy-dropdown-item>
              </hy-dropdown-menu>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>自定义菜单</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <van-dropdown-menu ref="menuRef">
                <van-dropdown-item v-model="dropVal1" :options="droupOption1" />
                <van-dropdown-item title="筛选" ref="itemRef">
                  <van-cell center title="包邮">
                    <template #right-icon>
                      <van-switch v-model="switch1" />
                    </template>
                  </van-cell>
                  <van-cell center title="团购">
                    <template #right-icon>
                      <van-switch v-model="switch2" />
                    </template>
                  </van-cell>
                  <div style="padding: 5px 16px;">
                    <van-button type="primary" block round @click="onConfirm">
                      确认
                    </van-button>
                  </div>
                </van-dropdown-item>
              </van-dropdown-menu>
            </div>
          </div>
        </div>
      </div>
     

      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">sidebar 侧边导航 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础写法</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-sidebar v-model="sideBarAc" >
                <hy-sidebar-item title="一楼"></hy-sidebar-item>
                <hy-sidebar-item title="二楼"></hy-sidebar-item>
                <hy-sidebar-item title="三楼"></hy-sidebar-item>
              </hy-sidebar>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>徽标展示</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-sidebar v-model="sideBarDot">
                <hy-sidebar-item title="一楼"></hy-sidebar-item>
                <hy-sidebar-item title="二楼" dot ></hy-sidebar-item>
                <hy-sidebar-item title="三楼" badge="99"></hy-sidebar-item>
              </hy-sidebar>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>禁用</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-sidebar v-model="sideBarDis">
                <hy-sidebar-item title="一楼"></hy-sidebar-item>
                <hy-sidebar-item title="二楼"></hy-sidebar-item>
                <hy-sidebar-item title="三楼" badge="99" disabed></hy-sidebar-item>
              </hy-sidebar>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>监听事件</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-sidebar v-model="sideBarCha" @change="sidebarChange">
                <hy-sidebar-item title="Floor 1"></hy-sidebar-item>
                <hy-sidebar-item title="Floor 2" dot ></hy-sidebar-item>
                <hy-sidebar-item title="Floor 3" ></hy-sidebar-item>
                <hy-sidebar-item title="Floor 4" badge="99"></hy-sidebar-item>
              </hy-sidebar>
            </div>
          </div>
        </div>
      </div>

      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">折叠面板 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础用法: 全部展开</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-collapse v-model="activeCollapse">
                <hy-collapse-item title="折叠01" name="1">
                  代码是写出来给人看的，附带能在机器上运行。
                </hy-collapse-item>
                <hy-collapse-item title="折叠02" name="2">
                  技术无非就是那些开发它的人的共同灵魂。
                </hy-collapse-item>
                <hy-collapse-item title="折叠03" name="3">
                  在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                </hy-collapse-item>
              </hy-collapse>
            </div>
          </div>
        </div> 
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>accordion设置手风琴</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-collapse v-model="activeCollapseAcc" accordion>
                <hy-collapse-item title="折叠01" name="1">
                  代码是写出来给人看的，附带能在机器上运行。
                </hy-collapse-item>
                <hy-collapse-item title="折叠02" name="2">
                  技术无非就是那些开发它的人的共同灵魂。
                </hy-collapse-item>
                <hy-collapse-item title="折叠03" name="3">
                  在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                </hy-collapse-item>
              </hy-collapse>
            </div>
          </div>
        </div>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>禁用</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-collapse v-model="activeCollapseAcc" accordion>
                <hy-collapse-item title="折叠01" name="1">
                  代码是写出来给人看的，附带能在机器上运行。
                </hy-collapse-item>
                <hy-collapse-item title="折叠02" name="2" disabled>
                  技术无非就是那些开发它的人的共同灵魂。
                </hy-collapse-item>
                <hy-collapse-item title="折叠03" name="3" disabled>
                  在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                </hy-collapse-item>
              </hy-collapse>
            </div>
          </div>
        </div>  
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>自定义内容</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-collapse v-model="activeCollapseAcc" accordion>
                <hy-collapse-item title="折叠01" name="1">
                  <template #title>
                    <div>法师 <van-icon name="question-o" /></div>
                  </template>
                  代码是写出来给人看的，附带能在机器上运行。
                </hy-collapse-item>
                <hy-collapse-item title="安其拉02" name="2" icon="user">
                  技术无非就是那些开发它的人的共同灵魂。
                </hy-collapse-item>
              </hy-collapse>
            </div>
          </div>
        </div>  
      </div>
     
      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">头像 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>大小</h4></div>
          <div class="inner-box-btns">
            <hy-row :gutter="10">
              <hy-col span="4">
                <hy-avatar :size="24" :shap="square" :src="squareUrl"></hy-avatar>
              </hy-col>
              <hy-col span="4">
                <hy-avatar :size="32" shap="square" :src="squareUrl"></hy-avatar>
              </hy-col>
              <hy-col span="4">
                <hy-avatar :size="40" shap="square" :src="squareUrl"></hy-avatar>
              </hy-col>
              <hy-col span="4">
                <hy-avatar :size="64" :src="squareUrl"></hy-avatar>
              </hy-col>
            </hy-row>
          </div>
        </div> 
      </div>

      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">卡片 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础用法</h4></div>
          <div class="inner-box-btns">
            <hy-card>
              <template #header>
                <div class="card-header">
                  <span>卡片标题</span>
                </div>
              </template>
              <p v-for="item in 4" :key="item" class="text item">{{ 'List item ' + o }}</p>
              <template #footer>Footer content</template>
            </hy-card>
          </div>
        </div> 
      </div>

      <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">tag标签 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>基础用法</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
             <hy-row :gutter="10">
              <hy-col span="4"><hy-tag type="default" size="large">default</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="primary" plain>primary</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="success">标签</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="danger">标签</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="warning">标签</hy-tag></hy-col>
             </hy-row>
             <hy-row :gutter="10">
              <hy-col span="4"><hy-tag type="default" plain>default</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="primary" plain>primary</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="success" plain>标签</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="danger" plain>标签</hy-tag></hy-col>
              <hy-col span="4"><hy-tag type="warning" plain>标签</hy-tag></hy-col>
             </hy-row>
             <hy-row :gutter="10">
                <hy-col span="4"> <hy-tag type="primary" round  size="large" >关键</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="success" round  size="medium" >成功</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="warning" round >警告</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="danger">标签</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="warning">标签</hy-tag></hy-col>
             </hy-row>
            </div>
          </div>
        </div> 
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>关闭</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row :gutter="10">
                <hy-col span="4"><hy-tag type="primary" :show="tagShow1" plain  closeable @close="handleClose('primary')">关键</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="success" :show="tagShow2" plain  closeable @close="handleClose('success')">成功</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="danger" :show="tagShow3" plain  closeable @close="handleClose('danager')">危险</hy-tag></hy-col>
                <hy-col span="4"><hy-tag type="warning" :show="tagShow4" plain  closeable @close="handleClose('warning')">警告</hy-tag></hy-col>
             </hy-row>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<style lang="less" scoped>
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
    .ml10{
      margin-left: 10px;
    }
    .mt10{
      margin: 15px 0;
    }
    .plr15{
      padding: 0 15px;
    }
  }
}
</style>

