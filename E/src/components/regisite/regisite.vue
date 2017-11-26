<template>
  <div class="regisite">
    <form method="post">
      <ul class="reUl">
      <li>
        <span></span>
        <input class="regisiteInput" type="text" placeholder="请输入手机号" name="iphone" id="iphone"
        v-model="IphoneNUM" v-on:blur="REGphoneNum($event)">
      </li>
    </ul>
      <div class="nextButton">
        <a href="#" :class="{regisiteButtonA:isreBtnA,regisiteButtonB:isreBtnB}" @click="toggleisregisteShow(true)">下一步</a>
      </div>
    </form>
    <transition name="fade">
    <div class="registeMaskWrap"  v-if="isregisteShow==true">
      <registeMask/>
    </div>
    </transition>
    </div>

</template>
<script>
    import {MessageBox} from 'mint-ui'
    import registeMask from './registmask.vue'
    export default{
        data(){
          return{
            IphoneNUM:'',
            isregisteShow:false,
            isreBtnA:true,
            isreBtnB:false
          }
        },
        components:{
          registeMask
        },
      methods:{
        //显示注册遮罩层
        toggleisregisteShow(a){
            if(a==this.isreBtnA){
                return
            }
            console.log(a)
            this.isregisteShow = a
            console.log(this.isregisteShow)
        },

        //正则表达式判断电话号码是否匹配
        REGphoneNum(event){
            let regNum = /^1[3|4|5|8][0-9]\d{4,8}$/
            let numdata = event.target.value
            if(!regNum.test(numdata)){
              this.isreBtnA = true
              this.isreBtnB =false
              MessageBox.alert('亲，请给人家正确的电话号码').then(action => {})
            }else{
                this.isreBtnA = false
                this.isreBtnB =true
            }
          console.log(this.IphoneNUM)
        }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.regisite
  width 100%
  height 100%
  background white
  .reUl
    width 96%
    height 9%
    border-bottom 2px solid #efefef
    position relative
    left 12px
    li
      width 100%
      height 100%
      margin-bottom 15px
      font-size 13px
      span
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
        width 92%
        height 21px
        margin-top 18px
        outline none

  .nextButton
    width 100%
    height 48px
    margin-top 20px
    text-align center
    padding-top 1.5em
    .regisiteButtonA
      display block
      background #d7d7d7
      width 80%
      height 30px
      margin 0 auto
      border-radius 30px
      text-align center
      line-height 30px
    .regisiteButtonB
      display block
      background red
      width 80%
      height 30px
      margin 0 auto
      border-radius 30px
      text-align center
      line-height 30px
  .registeMaskWrap
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index 109
    background white
    &.fade-enter-active, &.fade-leave-active
      transition all 1s
      translateY(100%)
    &.fade-enter, &.fade-leave-to
      opacity 0
</style>
