import { createApp } from 'vue'

import 'amfe-flexible'
import '@/assets/css/index.less'

import App from './App.vue'
import router from './router'

/***
 * 内部引入hyMobileUI 组件
 * 'hy-mobile-ui/dis/style.css' // mode_modules 路径
 *  需要自己的发布到 外部npm 试下
*/
// import hyMobileUi from 'hy-mobile-ui'
// import 'hy-mobile-ui/dist/es/style.css'

const app = createApp(App)

app.use(router)
// app.use(hyMobileUi)
app.mount('#app')
