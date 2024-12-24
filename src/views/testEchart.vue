<script setup>

import hyRow from '../../packages/baseCompoents/hyRow/hyRow.vue';
import hyDivider from '../../packages/dataDisplay/hyDivider/hyDivider.vue';
import hyEchart from '../../packages/hyEchart/hyEchart.vue';

import * as echarts from 'echarts'

// 柱状图选项
const barOptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: '产品销量',
    position: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: { data: ['A', 'B', 'C', 'D'] },
  yAxis: {
    type: 'value', // 数值轴
    title: {
      text: '产品销量',
    }
  },
  series: [
    { 
      name: '销量', 
      type: 'bar',
      itemStyle: {
        color: '#00A758'
      },
      data: [5, 20, 36, 10] 
    },
  ]
}

// 柱状折叠: Start
var series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    stack: 'a',
    name: 'a'
  },
  {
    data: [10, 46, 64, '-', 0, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'b'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'a',
    name: 'c'
  },
  {
    data: [30, '-', 0, 20, 10, '-', 0],
    type: 'bar',
    stack: 'b',
    name: 'd'
  },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
    stack: 'b',
    name: 'e'
  }
];
const stackInfo = {};
for (let i = 0; i < series[0].data.length; ++i) {
  for (let j = 0; j < series.length; ++j) {
    const stackName = series[j].stack;
    if (!stackName) {
      continue;
    }
    if (!stackInfo[stackName]) {
      stackInfo[stackName] = {
        stackStart: [],
        stackEnd: []
      };
    }
    const info = stackInfo[stackName];
    const data = series[j].data[i];
    if (data && data !== '-') {
      if (info.stackStart[i] == null) {
        info.stackStart[i] = j;
      }
      info.stackEnd[i] = j;
    }
  }
}
for (let i = 0; i < series.length; ++i) {
  const data = series[i].data;
  const info = stackInfo[series[i].stack];
  for (let j = 0; j < series[i].data.length; ++j) {
    const isEnd = info.stackEnd[j] === i;
    const topBorder = isEnd ? 20 : 0;
    const bottomBorder = 0;
    data[j] = {
      value: data[j],
      itemStyle: {
        borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
      }
    };
  }
}
const zheDieOptions = {
  title: {
    text: '折叠柱状图',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: series
}
// End

// 堆叠条形图
const tiaoOption = {
  color: ['#00A758', '#2D69FF', '#EC6453','#604584','#F49600'],
  title: {
    text: '堆叠条形图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};

// 动态柱状图 Strat
const dongTaiData = [];
for (let i = 0; i < 5; ++i) {
  dongTaiData.push(Math.round(Math.random() * 200));
}
const dongTaiOption = {
  color: ['#00A758'],
  title: {
    text: '动态柱状图'
  },
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: dongTaiData,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: false
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
// End

// 队列垂直柱状图
const moreColoumnOption = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#00A758', '#0000C1', '#Ec6453']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
}

// 瀑布条形图
const poBuOption = {
  color: ['#00A758'],
  title: {
    text: '瀑布条形图',
    subtext: 'Living Expenses in Shenzhen'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      var tar = params[1];
      return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 1700, 1400, 1200, 300, 0]
    },
    {
      name: 'Life Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'inside'
      },
      data: [2900, 1200, 300, 200, 900, 300]
    }
  ]
}

// 饼环形图
const pieOptions = {
  tooltip: {
    trigger: 'item'
  },
  color: ['#EC6453','#2D69FF', '#00A758'],
  series: [
    {
      name: '饼环形图',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'inner'
      },
      emphasis: {
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}',
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '进行中' },
        { value: 735, name: '已完成' },
        { value: 580, name: '未完成'}
      ]
    }
  ]
}

// 双环图
const doubleOptions = {
  color: ['#00A758', '#EC6453'],
  title: {
    text: '双环图示例',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    // 外环配置
    {
      name: '外环数据',
      type: 'pie',
      radius: ['40%', '55%'],  // 设置外环的内外半径比例
      avoidLabelOverlap: false,
      label: {
          show: false, position: 'center'
      },
      emphasis: {
        label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 335, name: '法师'},
        {value: 310, name: '妲己'},
        {value: 234, name: '诸葛亮'},
        {value: 135, name: '周瑜'},
        {value: 1548, name: '安其拉'}
      ]
    },
      // 内环配置
    {
      name: '内环数据',
      type: 'pie',
      radius: ['20%', '35%'],  // 设置内环的内外半径比例
      label: {
        formatter: '{b}: {@value} ({d}%)',
        rich: {
          a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
          },
          hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
          },
          b: {
              fontSize: 18,
              lineHeight: 33
          },
          per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
          }
        }
      },
      data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'}
      ]
    }
  ]
}

// 折线
const lineOptions = {
  title: {
    text: '一条折现图'
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

// 多条折线图
const lineMoreOptions = {
  title: {
    text: '多条折现'
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      data: [100, 20, 100, 190, 234, 80, 360],
      type: 'line'
    }
  ]
}

// 多条折线图
const smoothLineOptions = {
  xAxis: {
    type: 'category',
    data: ['法师', '安其拉', '诸葛亮', '鲁宾', '妲己', '射手', '辅助']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
}

// 多条平滑折线图
const smoothMoreLineOptions = {
  xAxis: {
    type: 'category',
    data: ['法师', '安其拉', '诸葛亮', '鲁宾', '妲己', '射手', '辅助']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    },
    {
      data: [420, 432, 601, 334, 890, 1330, 320],
      type: 'line',
      smooth: true
    }
  ]
}

// 面积图
const areaOptions = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
}

// 堆叠面积图
const moreAreaOptions = {
  backgroundColor: '#CAEED9',
  title: {
    text: '堆叠面积图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

// 撒点图
const pointOptions = {
  title: {
    text: '散点'
  },
  symbolSize: 10,
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
    }
  ]
}

// 气泡图 Start  引入echarts
const data = [
  [
    [28604, 77, 17096869, 'Australia', 1990],
    [31163, 77.4, 27662440, 'Canada', 1990],
    [1516, 68, 1154605773, 'China', 1990],
    [13670, 74.7, 10582082, 'Cuba', 1990],
    [28599, 75, 4986705, 'Finland', 1990],
    [29476, 77.1, 56943299, 'France', 1990],
    [31476, 75.4, 78958237, 'Germany', 1990],
    [28666, 78.1, 254830, 'Iceland', 1990],
    [1777, 57.7, 870601776, 'India', 1990],
    [29550, 79.1, 122249285, 'Japan', 1990],
    [2076, 67.9, 20194354, 'North Korea', 1990],
    [12087, 72, 42972254, 'South Korea', 1990],
    [24021, 75.4, 3397534, 'New Zealand', 1990],
    [43296, 76.8, 4240375, 'Norway', 1990],
    [10088, 70.8, 38195258, 'Poland', 1990],
    [19349, 69.6, 147568552, 'Russia', 1990],
    [10670, 67.3, 53994605, 'Turkey', 1990],
    [26424, 75.7, 57110117, 'United Kingdom', 1990],
    [37062, 75.4, 252847810, 'United States', 1990]
  ],
  [
    [44056, 81.8, 23968973, 'Australia', 2015],
    [43294, 81.7, 35939927, 'Canada', 2015],
    [13334, 76.9, 1376048943, 'China', 2015],
    [21291, 78.5, 11389562, 'Cuba', 2015],
    [38923, 80.8, 5503457, 'Finland', 2015],
    [37599, 81.9, 64395345, 'France', 2015],
    [44053, 81.1, 80688545, 'Germany', 2015],
    [42182, 82.8, 329425, 'Iceland', 2015],
    [5903, 66.8, 1311050527, 'India', 2015],
    [36162, 83.5, 126573481, 'Japan', 2015],
    [1390, 71.4, 25155317, 'North Korea', 2015],
    [34644, 80.7, 50293439, 'South Korea', 2015],
    [34186, 80.6, 4528526, 'New Zealand', 2015],
    [64304, 81.6, 5210967, 'Norway', 2015],
    [24787, 77.3, 38611794, 'Poland', 2015],
    [23038, 73.13, 143456918, 'Russia', 2015],
    [19360, 76.5, 78665830, 'Turkey', 2015],
    [38225, 81.4, 64715810, 'United Kingdom', 2015],
    [53354, 79.1, 321773631, 'United States', 2015]
  ]
];
const paoOptions = {
  color: ['#00A758', '#EC6453'],
  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
    {
      offset: 0,
      color: '#f7f8fa'
    },
    {
      offset: 1,
      color: '#cdd0d5'
    }
  ]),
  title: {
    text: 'Life Expectancy and GDP by Country',
    left: '5%',
    top: '3%'
  },
  legend: {
    right: '10%',
    top: '3%',
    data: ['1990', '2015']
  },
  grid: {
    left: '8%',
    top: '10%'
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: true
  },
  series: [
    {
      name: '1990',
      data: data[0],
      type: 'scatter',
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(251, 118, 123)'
          },
          {
            offset: 1,
            color: 'rgb(204, 46, 72)'
          }
        ])
      }
    },
    {
      name: '2015',
      data: data[1],
      type: 'scatter',
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(129, 227, 238)'
          },
          {
            offset: 1,
            color: 'rgb(25, 183, 207)'
          }
        ])
      }
    }
  ]
};
// 气泡图 End

// 漏斗
const loudouOptions = {
  title: {
    text: '漏斗图'
  },
  color: ['#00A758', '#0000C1', '#EC6453', '#604584', '#f49600'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },

  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 5, name: '文案一' },
        { value: 10, name: '文案二' },
        { value: 30, name: '文案三' },
        { value: 50, name: '文案四' },
        { value: 70, name: '文案五' }
      ]
    }
  ]
}

// 雷达图
const leiDaOptions = {
  radar: {
    indicator: [
      { name: '指标1', max: 5000 },
      { name: '指标2', max: 6000 },
      { name: '指标3', max: 8000 },
    ],
    axisLabel: {
      formatter: function (value) {
        if (value % 2000 === 0) {
          return value;
        }
        return '';
      }
    },
    splitNumber: 3, // 设置刻度数量
    splitLine: {
      lineStyle: {
        type: 'dashed' // 或者其他样式
      }
    }
  },
  series: [{
    name: '雷达图数据',
    type: 'radar',
    silent: true, // 隐藏交互效果
    data: [
      {
        value: [3000, 2000, 5000],
        name: '数据1'
      }
    ]
  }]
};
// 数字仪表盘
const yiBiaoOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.25, '#FF6E76'],
            [0.5, '#FDDD60'],
            [0.75, '#58D9F9'],
            [1, '#00A758']
          ]
        }
      },
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    },
  ]
}

// 柱状、折叠组合使用
const zuHeOption = {
  color: ['#00A758', '#EC6453'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  grid: {
    left: '15%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C';
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
}

</script>

<template>
   <div class="hy-item">
        <hy-divider dasked :style="{ color: '#000', borderColor: '#00A758' }">Echart 篇</hy-divider>
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>柱状：基础篇</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="barOptions"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>
        
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>柱状折叠</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="zheDieOptions"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>
        
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>堆叠条形图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="tiaoOption"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>
        
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>动态柱状图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  class="myChart"
                  :options="dongTaiOption"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>
       
        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>队列垂直柱状图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="moreColoumnOption"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>瀑布条形图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="poBuOption"
                  :width="'10rem'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>饼环图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="pieOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>双环图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="doubleOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>折线</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="lineOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>折线</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="lineMoreOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>平滑折线</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="smoothLineOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>多条平滑折线</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="smoothMoreLineOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>面积图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="areaOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>堆叠面积图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="moreAreaOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>散点图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="pointOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>气泡图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="paoOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>漏斗</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="loudouOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>雷达图</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="leiDaOptions"
                  :width="'100%'"
                  :height="'6rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>数字仪表盘</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="yiBiaoOption"
                  :width="'100%'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        <div class="hy-item-inner-box">
          <div class="inner-box-title"><h4>柱状、折叠组合使用</h4></div>
          <div class="inner-box-btns">
            <div class="van-empty-box">
              <hy-row>
                <hy-echart
                  :options="zuHeOption"
                  :width="'100%'"
                  :height="'8rem'"
                >
                </hy-echart>
              </hy-row>
            </div>
          </div>
        </div>

        

        
      </div>
</template>

<style lang="less" scoped>
// .hy-main{
//   width: 100%;
//   height: 100vh;
//   overflow: auto;
//   // background-color: #fafafa;
//   background-color: #eff2f5;
  
//   .hy-header{
//     background-color: #00a758;
//     border-radius: 6px 6px 0 0;
//     height:1rem;
//     line-height:1rem;
//     font-size: 18px;
//     color: #fff;
//     text-align: center;
//   }
//   .hy-body{
//     padding: .2rem;
//     color: #000;
//     .hy-item{
//       padding: 10px;
//       font-size: 1rem;
//       border-radius: .2rem;
//       background-color: #fff;
//       margin-bottom: .2rem;
//       box-shadow: 0 4px 32px 0 rgba(133, 142, 153, .3), 0 0 16px 0 rgba(133, 142, 153, .12);
//       .hy-item-inner-box{
//         border-bottom: 1px dashed #969799;
//         padding-bottom: 10px;
//         font-size: 16px;
//         .inner-box-title{
//           margin: 10px 0;
//           h4{
//             color: #969799;
//             font-size: 16px;
//           }
//         }
//         .inner-box-btns{
//           margin: 0;
//           // 倒计时
//           .colon {
//             display: inline-block;
//             margin: 0 4px;
//             color: #1989fa;
//           }
//           .block {
//             display: inline-block;
//             width: 22px;
//             color: #fff;
//             font-size: 12px;
//             text-align: center;
//             background-color: #1989fa;
//           }
//           .van-empty-box{
//             img{
//               width: 100%;
//               height: 100%;
//             }
//           }
//           .cellBox{
//             background-color: #f7f8fa;
//             padding: 15px 10px;
//             box-sizing: border-box;
//           }
//           .gray{
//             background-color: #f7f8fa;
//           }
//           // end
//           .box{
//             width: 40px;
//             height: 40px;
//             background: #f2f3f5;
//             border-radius: 4px;
//           }
          
//           .van-button{
//             margin: 0 5px;
//             &:last-child{
//               margin-right: 0;
//             }
//           }
//         }
//       }
      
//     }
//     .left-item{
//       border-radius: 8px;
//       padding: 10px;
//       border: 1px solid #dedede;
//       box-shadow: 0 4px 32px 0 rgba(133, 142, 153, .3), 0 0 16px 0 rgba(133, 142, 153, .12);
//       border: 1px solid #dedede;
//       margin: 0.62rem 0;

//       :dee0(.van-button){
//         display: inline-block;
//       }
   
//       h2{
//         font-size: 1.375rem;
//       }
//     }
//     .ml10{
//       margin-left: 10px;
//     }
//     .mt10{
//       margin: 15px 0;
//     }
//     .plr15{
//       padding: 0 15px;
//     }
//   }
// } 
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
</style>

