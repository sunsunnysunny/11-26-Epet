<template>
  <div>
      <div class="registeMask">
        <form method="post" id="userAdd" class="userAdd">
          <ul class="reUl">
            <li class="f1">
              <span class="f1SP"></span>
              <input v-model="phone" class="regisiteInput" type="text" placeholder="请输入手机号" name="iphone" id="iphone">
            </li>
            <li class="f2">
              <span class="f2SP"></span>
              <input class="seccodeIco" type="text" placeholder="图片验证码" name="seccode" id="seccode">
              <img class="varify" src="./secco.png" alt="">
            </li>
            <li class="f3">
              <span class="f13SP"></span>
              <input v-model="code" type="text" name="code" id="code" class="code" placeholder="动态密码">
              <a href="#" class="acpswd" @click="FactPsd">{{BtnValue}}</a>
            </li>
            <li class="f4">
              <span class="f4SP"></span>
              <input class="username" type="text" placeholder="你的昵称/用户名" name="username" id="username">
            </li>
            <li class="f5 ">
              <span class="f5SP"></span>
              <input class="password" type="password" placeholder="请设置密码" name="password" id="password">
            </li>
            <li class="f6 ">
              <span class="f6SP"></span>
              <input class="passwordag" type="password" placeholder="请确认密码" name="passwordag" id="passwordag">
            </li>
            <div class="nextButton">
              <a href="#" class="regisiteButton" @click="toggleisregisteShow">下一步</a>
            </div>

            <!--aaaaaaaaaaaaaaaaaaaaa-->
            <div>测试<p>登陆状态: {{status}}</p></div>
            <!--aaaaaaaaaaaaaaaaaaaaaaaaaaa-->
          </ul>
        </form>
      </div>
  </div>

</template>
<script>
  import axios from 'axios'
    export default{
        data(){
            return{
              //获取按钮数据
              BtnValue:'获取动态密码',
              BtnNum : 60,
              //动态获取手机短信验证码
              phone:'',
              code:'',
              status:'未登陆'

            }
        },
      methods:{
        //实现短信获取按钮的倒计时
        FactPsd(){
          if(this.BtnNum == 0){
            this.BtnValue = '获取动态密码'
            console.log(333)
            return
          }else{
            const url = `/sendcode?phone=${this.phone}`
            axios.get(url).then(response => {
              console.log('sendcode result ', response.data)
            })
            this.BtnValue = `重新发送${this.BtnNum}s`
            this.BtnNum--
          }
          setTimeout(()=>{
            this.FactPsd()
            console.log(2222)
          },1000)
        },
        //实现登陆功能
        toggleisregisteShow() {
          axios.post('/login', {phone: this.phone, code: this.code}).then(response => {
            console.log('login result ', response.data)
            const result = response.data
            if (result.code == 0) {
              const user = result.data
              this.status = `登陆成功: ${user.phone}`
            } else {
              this.status = `登陆失败, 请输入正确的手机号和验证码`
            }
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.registeMask
  width 100%
  height 100%
  .userAdd
    .reUl
      width 96%
      border-bottom 2px solid #efefef
      position relative
      left 12px
    .f1
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      .f1SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico1.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 19px
      .regisiteInput::-webkit-input-placeholder
        color #b8b8b8
      .regisiteInput
        margin-left 20px
        width 80%
        height 21px
        margin-top 18px
        outline none

    .f2
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      border-bottom: 2px solid #efefef;
      .f2SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico5.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 11px
      .seccodeIco::-webkit-input-placeholder
        color #b8b8b8
      .seccodeIco
        width 70%
        height 21px
        margin-top 7px
        margin-left 25px
        outline none
      .varify
        position relative
        top -22px
        left 267px
        width 85px
        height 30px
    .f3
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      border-bottom: 2px solid #efefef
      .f13SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico2.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 11
        position -7px
      .code::-webkit-input-placeholder
        color #b8b8b8
      .code
        width 70%
        height 21px
        margin-top 7px
        margin-left 25px
        outline none
      .acpswd
        display inline-block
        box-sizing border-box
        position relative
        top -23px
        left 231px
        color white
        background #fed171
        border-radius 30px
        width 100px
        height 30px
        text-align center
        padding 0.3em 0
        font-size 12pxa


    .f4
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      position relative
      top -15px
      border-bottom: 2px solid #efefef
      .f4SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico3.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 19px
      .username::-webkit-input-placeholder
        color #b8b8b8
      .username
        margin-left 20px
        width 80%
        height 21px
        margin-top 18px
        outline none
    .f5
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      position relative
      top -25px
      border-bottom: 2px solid #efefef
      .f5SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico4.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 19px
      .password::-webkit-input-placeholder
        color #b8b8b8
      .password
        margin-left 20px
        width 80%
        height 21px
        margin-top 18px
        outline none
    .f6
      width 100%
      height 50px
      margin-bottom 15px
      font-size 13px
      position relative
      top -35px
      border-bottom: 2px solid #efefef
      .f6SP
        float left
        display inline-block
        width 17px
        height 17px
        background url("./ico4.png") no-repeat
        background-size contain
        margin-left 6px
        margin-top 19px
      .passwordag::-webkit-input-placeholder
        color #b8b8b8
      .passwordag
        margin-left 20px
        width 80%
        height 21px
        margin-top 18px
        outline none
    .nextButton
      width 100%
      height 48px
      margin-top 20px
      text-align center
      padding-top 1.5em
      .regisiteButton
        display block
        background #d7d7d7
        width 80%
        height 30px
        margin 0 auto
        border-radius 30px
        text-align center
        line-height 30px

</style>
