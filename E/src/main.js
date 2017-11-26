//项目的入口组件
import Vue from 'vue'
import { Swipe, SwipeItem} from 'mint-ui'
import vueScroller from 'vue-scroller'
import VDistpicker from 'v-distpicker'
import './mock/mockServer'
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.gif'
import './common/stylus/fonts.styl'
import store from './store'
import App from './App.vue'
import router from './router'
//将滚动映射成全局的标签(多一个scroller标签)
 Vue.use(vueScroller)
//将轮播的标签映射全局的标签
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//将三级联动的插件映射成全局组件标签
Vue.component('v-distpicker', VDistpicker)
//声明使用图片懒加载
Vue.use(VueLazyLoad,{//配置完后，会出现一个全局指令v-lazy
  loading
})
//进行组件化的配置
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
