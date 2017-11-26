//使用mockjs模拟服务器
import Mock from 'mockjs'
import data from './data.json'

//使用mockjs映射接口
//主页面接口
Mock.mock('/api/main',{
  code : 0,
  data : data.main
})
//分类页面接口
Mock.mock('/api/category/kind',{
  code:0,
  data : data.kind
})
//品牌页面的接口
Mock.mock('/api/category/slogan',{
  code:0,
  data:data.slogan
})
