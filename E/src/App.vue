<template>
  <div>
    <div class="dogmaskWrap" v-show="IsdogmaskWrap">
      <div class="DMheader">
        <div class="sW">
          <a href="#" @click="toggleIsDog"></a>
          <span class="shopca">选择购物地区</span>
        </div>
        <span class="STImg"></span>
      </div>
      <DogMask/>
    </div>
    <div class="footerNav">
      <ul class="footer">
        <li class="foottab">
          <router-link to="/main" class="icon-home">首页</router-link>
        </li>
        <li class="foottab">
          <router-link to="/category" class="icon-list2">分类</router-link>
        </li>
        <li class="foottab">
          <router-link to="/cart" class="icon-cart">购物车</router-link>
        </li>
        <li class="foottab">
          <router-link to="/user" class="icon-wink">我的</router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
    import DogMask from './components/dogMask/dogMask.vue'
    import PubSub from 'pubsub-js'
    export default{
        components:{
          DogMask
        },
        data(){
            return{
              IsdogmaskWrap:true
            }
        },
        methods:{
          toggleIsDog(){
              this.IsdogmaskWrap = ! this.IsdogmaskWrap
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footerNav
  background white
  border-top 1px solid #e7e7e7
  height 45px
  line-height 45px
  position fixed
  bottom 0
  left 0
  width 100%
  z-index 103
  .footer
    margin 0
    padding 0
    box-sizing border-box
    content: ".";
    display: block;
    height: 0;
    clear: both;
    /*visibility: hidden;*/
    .foottab
      text-align center
      line-height 45px
      float left
      width 25%
      height 55px
      .router-link-active
        color #459d36



.dogmaskWrap
  position absolute
  width 100%
  height 100%
  background white
  z-index 110
  .DMheader
    width 100%
    height 50px
    .sW
      width 100%
      a
        display block
        width 22px
        height 20px
        background url("./components/dogMask/right.png") no-repeat
        background-size 9px 17px
        position absolute
        margin-top 16px
        margin-left 10px
      .shopca
        font-size 18px
        display inline-block
        width 90%
        height 50px
        text-align center
        line-height 50px
        margin 0 20px
    .STImg
      display inline-block
      background url("./components/dogMask/imgtk-new.png")
      background-size 20px 20px
      width 20px
      height 20px
      position relative
      left 346px
      top -35px

</style>
