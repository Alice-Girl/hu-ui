export const plugins = {
  'postcss-pxtorem': {
    rootValue: 37.5, // 基础字体大小
    propList: ['*'], // 要转换的属性列表
    unitPrecision: 5, // 转换后的精度
    replace: true, // 是否替换原有的 px 单位
    mediaQuery: 1, // 是否转换媒体查询中的单位
    minPixelValue: 1 // 最小像素值
  }
}
