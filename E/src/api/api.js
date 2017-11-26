//发送ajax请求的模块 使用axios发送
import axios from 'axios'
//定义成功获得数据的标识
export const RESULT_OK =0

//分别暴露
//获取主页面的函数
export function reqMain(){//返回promise对象
  return axios.get('/api/main')
}
//获取分类的函数
export function reqKind(){
  return axios.get('/api/category/kind')
}

//获取品牌的函数
export function reqSlogan() {
  return axios.get('/api/category/slogan')
}
