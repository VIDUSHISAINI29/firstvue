import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'default',
      component: ()=> import('@/layout/AppLayout.vue'),
      children:[
        {
          path:'/home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          children: [
            {
              path: 'homeTable',
              name:'homeTable',
              component: ()=> import('@/views/Home/HomeTable.vue'),
            },
            {
              path: ':uri',
              name:'homeTableDetails',
              component: ()=> import('@/views/Home/HomeTableDetails.vue'),
              props: true
            }
          ]
        }
      ]
    }
  ]
})

export default router