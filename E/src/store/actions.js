//引入ajax请求模块
import {reqKind,reqMain,reqSlogan,RESULT_OK} from '../api/api'
//引入mutation名称模块
import {
  RECEIVE_MAIN,
  RECEIVE_KIND,
  RECEIVE_SLOGAN
} from './mutationsType'
export default {
  //获取主页信息
    getMain({commit},cb){
      //发送ajax请求，获得请求数据
      reqMain().then((response)=>{
        const result = response.data
        console.log(result)
        //当请求的数据准确时，触发mutations修改数据
        if(result.code==RESULT_OK){
          const main = result.data
          commit(RECEIVE_MAIN,{main})
          //传递回调函数并通知调用者，状态已经更新
          cb&&cb()
          console.log(main)
        }
      })
    },
  //获取分类信息
    getKind({commit}){
      //发送Ajax请求获取数据
      reqKind().then((response)=>{
        const result = response.data
        //如果请求成功，触发mutation函数修改状态
        if(result.code == RESULT_OK){
          const kind = result.data
          commit(RECEIVE_KIND,{kind})
        }
      })
    },
  //获取品牌信息
    getSlogan({commit}){
      //发送ajax请求获取数据
      reqSlogan().then((response)=>{
        const result = response.data
        //请求数据成功，触发mutation函数修改状态
        if(result.code == RESULT_OK){
          const slogan = result.data
          commit(RECEIVE_SLOGAN,{slogan})
        }
      })
    }

}
