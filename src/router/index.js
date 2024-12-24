import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '../views/test.vue'
import baseCompoents from '@/views/baseCompoents.vue'
import testFeedBack from '../views/testFeedBack.vue'
import testEchart from '@/views/testEchart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/baseCompoents',
      name: 'baseCompoents',
      component: baseCompoents
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/testFeedBack',
      name: 'testFeedBack',
      component: testFeedBack
    },
    {
      path: '/testEchart',
      name: 'testEchart',
      component: testEchart
    }
  ]
})

export default router
