//引入触发mutation的变量名
import {
  RECEIVE_MAIN,
  RECEIVE_KIND,
  RECEIVE_SLOGAN
}from './mutationsType'


export default {
  //操作主页面的状态
  [RECEIVE_MAIN](state,{main}){
    state.main = main
  },
  //操作分类的状态
  [RECEIVE_KIND](state,{kind}){
   state.kind = kind
  },
  //操作品牌的状态
  [RECEIVE_SLOGAN](state,{slogan}){
    state.slogan = slogan
  }
}
