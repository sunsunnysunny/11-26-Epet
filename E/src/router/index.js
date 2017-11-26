// 路由器组件模块(ES6模块暴露)
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入其他组件
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
import main from '../pages/main/main.vue'
import user from '../pages/user/user.vue'
import kind from '../pages/kinds/kind.vue'
import slogan from '../pages/slogan/slogan.vue'


//创建路由器

//声明使用路由插件
Vue.use(VueRouter)

//注册路由器
export default new VueRouter({//配置路由器
  routes:[
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/main',
      component:main
    },
    {
      path:'/category',
      component:category,
      children:[
        {
          path:'',
          redirect:'kind'
        },
        {
          path:'kind',
          component:kind
        },
        {
          path:'slogan',
          component:slogan
        }
      ]
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/user',
      component:user
    }
  ]
})

