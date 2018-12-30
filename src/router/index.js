import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/login',
      component: () => import("@/view/login.vue"),
      children: [  //这里就是二级路由的配置
      ]
    },
    {
      path: '/home',
      component: () => import("@/view/home.vue"),
      children: [  //这里就是二级路由的配置
         {
           path:"/home/category",
           component:() => import("@/view/view_category.vue")
         },
      ]
    }
  ]
})

export default router
