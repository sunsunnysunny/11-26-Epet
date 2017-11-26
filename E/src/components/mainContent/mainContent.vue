<template>

    <div class="Contentwrap">
      <div class="bannerWrap" v-if="main.datas">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(value,index) in main.datas[0].value" :key="index">
              <a class="bannerWrapa" href="#">
                <img v-lazy="value.image" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
      </div>

      <div style="position: relative;top: 86px;">
        <div class="page_line"></div>

        <div class="contentNavWrap">
          <ul class="contentNav" v-if="main.datas">
            <li class="f1" v-for="(menu,index) in main.datas[1].menus" :key="index">
              <a href="#">
                <img v-lazy="menu.image" alt="">
              </a>
            </li>
          </ul>
        </div>

        <div class="page_line"></div>

        <div class="surprise_day">
          <div class="surprise">
            <div class="surprise-title">
              <div class="Stitimg">
                <img src="../../common/img/suprice.png" alt="">
              </div>
              <div class="Stext">距本场结束</div>
              <div class="Stime">
                <freshTime/>
              </div>
              <div class="more">
                <a href="#">
                  <img src="../../common/img/more.png" alt="">
                </a>
              </div>
            </div>
            <div class="surprise-product" ref="surpriseproductScroll">
              <ul class="surprise-productWrap" v-if="main.datas">
                <li class="pro-block" v-for="(good,index) in main.datas[7].goods" :key="index">
                  <a href="#">
                    <div class="thispro-img">
                      <img class="image" v-lazy="good.imge" alt="">
                    </div>
                    <div class="cred" style="text-align: center;">
                      <span class="ft12 ftc mt5">¥</span>
                      <span class="c999 ftc ft12">{{good.Price}}</span>
                    </div>
                    <p class="C999" style="font-size: 12px;text-align: center;color: #999;">省￥{{good.sale}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="Hottitclass">
          <a href="#">
            <img src="../../common/img/Htitle.jpg" alt="">
          </a>
        </div>

        <div class="divBoxing">
          <div class="HBLeft" v-if="main.datas">
            <a href="#">
              <img v-lazy="main.datas[2].content_images[0].image" alt="">
            </a>
          </div>
          <div class="HBRight" v-if="main.datas">
            <a class="divming1" href="#">
              <img v-lazy="main.datas[2].content_images[1].image" alt="">
            </a>
            <a class="divming2" href="#">
              <img v-lazy="main.datas[2].content_images[2].image" alt="">
            </a>
          </div>
        </div>

        <div class="customPageLineWrap">
          <div class="customPageLine">
            <div>
              <img style="max-width: 50%; max-height: 72px; margin: 0 auto;display: block;" src="../../common/img/Mfashion.png" alt="">
            </div>
            <div class="moreTitclass">
              <a href="#">
                <img src="../../common/img/more.png" alt="">
              </a>
            </div>
          </div>
        </div>

        <div class="fashine">
          <div>
            <ul class="cmVideoList">
              <li v-if="main.datas">
                <a href="#">
                  <div class="FimgBox">
                    <img v-lazy="main.datas[3].content_images" alt="">
                  </div>
                  <div class="Ftext">
                    <div class="textover">{{main.datas[3].title}}</div>
                    <div class="textDec">
                      <span class="cmallViewIco"></span>
                      <i>{{main.datas[3].visited}}</i>
                      <span class="FL">|</span>{{main.datas[3].time}}
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="page_line"></div>

        <div class="customPageLineWrap">
          <div class="customPageLine">
            <div>
              <img style="max-width: 50%; max-height: 72px; margin: 0 auto;display: block;" src="../../common/img/TIYanTitle.png" alt="">
            </div>
            <div class="moreTitclass">
              <a href="#">
                <img src="../../common/img/more.png" alt="">
              </a>
            </div>
          </div>
        </div>

        <div class="TIyanImg" v-if="main.datas">
          <a href="#">
            <img v-lazy="main.datas[4].content_images" alt="">
          </a>
        </div>

        <div class="page_line"></div>

        <div class="HottitclassPt">
          <a href="#">
            <img src="../../common/img/PinT1.png" alt="">
          </a>
        </div>

        <div class="singleDiv" v-if="main.datas">
          <div v-for="(cont,index) in main.datas[5].content" :key="index">
            <div class="singleDivTitle">
              <span class="PTname">{{cont.title}}</span>
              <span class="PTsale">{{cont.sub_title}}</span>
            </div>

            <div class="saleImg">
              <a href="#">
                <img v-lazy="cont.content_images"  alt="">
              </a>
            </div>
          </div>
        </div>


        <div class="judgediv" v-if="main.datas">
          <div>
            <div class="judgedivTitle">
                <div>
                  <div class="judgedivTitleImg">
                    <img style="max-width: 50%; max-height: 72px; margin: 0 auto;display: block;" src="../../common/img/judge1.png" alt="">
                  </div>
                  <div class="judgedivTitleText">
                    <a href="javascript:;">{{main.datas[6].right_text}}</a>
                  </div>
              </div>
            </div>
            <div class="brands-judge">
              <ul class="brandsLis" v-if="main.datas">
                <li v-for="(lis,index) in main.datas[6].list" :key="index">
                  <a href="javascript:">
                    <div class="brandsLia">
                      <div class="brandsLiaImg">
                        <div>
                          <img v-lazy="lis.main_image" alt="">
                        </div>
                        <div class="brandsLiaImgT ell cfff ftc ft12 join_time">{{lis.join_time}}</div>
                      </div>
                      <div class="brandsLiaT1">
                        <span class="fl">{{lis.username}}</span>
                        <span class="fr pet-name">{{lis.pet_des}}</span>
                      </div>
                      <div class="brandsLiaT2">
                        {{lis.comment_content}}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="wap-footer-bar"
             style="display: block;box-sizing: border-box;width: 100%;height: 86px;position: relative;">
          <div class="footer" style="display: block;">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html" style="color: #333">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html" style="color: #333">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html" style="color: #333">联系我们</a></span>
            </div>
            <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>

      </div>

    </div>



</template>
<script>
    import {mapState} from 'vuex'
    import Bscroll from 'better-scroll'
    import freshTime from '../freshTime/freshTime.vue'
    export default{
        //申明标签组件
        components:{
          freshTime
        },
        //计算属性
        computed:{
          ...mapState(['main'])
        },
        mounted(){
           //在页面挂载时请求数据
            this.$store.dispatch('getMain',()=>{
              //在页面挂载时调用滚动函数
              this.$nextTick(()=>{
                this._initScroll()
              })
            })
        },
        methods:{
        //定义滚动的函数
            _initScroll(){
              const contentNavScro = new Bscroll(this.$refs.surpriseproductScroll,{
                scrollX : true
              })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bannerWrap
    position relative
    top 86px
    width 100%
    height 160px
    &>.mint-swipe
      width 100%
      height 100%
      .mint-swipe-item
        width 100%
        height 100%
        a
          display block
          width 100%
          height 160px
          img
            width 100%

  .page_line
    margin 0
    padding 0
    background #f3f4f5
    height 10px

  .contentNav
    content ''
    display block
    clear both
    width 100%
    height 175px
    &>.f1
      float left
      width 25%
      height 87px
      a
        display block
        width 100%
        height 100%
        img
          width 100%
          height 100%

  .surprise_day
    margin 0
    padding 0
    box-sizing border-box
    width 100%
    height 190px
    .surprise
      padding-top 10px
      width 100%
      height 100%
      .surprise-title
        width 100%
        height 60px
        .Stitimg
          width 85px
          height 24px
          float left
          img
            height 24px
            margin-left -10px
            vertical-align middle
            width 105px
        .Stext
          width 65px
          height 20px
          margin-top 1px
          margin-left 10px
          font-size 13px
          float left
        .Stime
          width 82px
          height 40px
          margin-left 5px
          float left
        .more
          margin-left: -7px;
          margin-top: -8px;
          width 135px
          height 40px
          float left
          a
            display block
            text-align right
            img
              display block
              margin 0 0 0 auto
              width 50%

      .surprise-product
        width 100%
        height 130px
        white-space nowrap
        overflow hidden
        .surprise-productWrap
          box-sizing border-box
          display flex
          z-index 1
          float left
          height 100%
          &>.pro-block
            display inline-block
            margin 0.5rem
            width 84px
            height 130px
            &>a
              display block
              color #333
              width 84px
              height 84px
              &>.ftc
                text-align center
              &>.mt5
                margin-top 5px
              .cred
                color red
                &>.ft12
                  font-size 12px
              &>.thispro-img
                //background url(../images/background/default-epet.png) no-repeat center center #f4f4f4
                background-size 120px auto
                position relative
                padding-top 100%
                &>.image
                  display block
                  border 0
                  width 100%
                  top 0
                  left 0
                  position absolute
                &>.cred
                  width 84px
                  height 16px









  .Hottitclass
    width 100%
    height 40px
    margin 0
    padding 0
    text-align center
    a
      display block
      color #333
      img
        display block
        border 0
        vertical-align middle
        max-height 73px
        max-width 100%


  .divBoxing
    box-sizing border-box
    display flex
    width 100%
    height 189px
    border-top 1px solid #e7e7e7

    .HBLeft
      width 42.53%
      height 100%
      a
        height 100%
        display block
        color #333
        img
          width 100%
          display block


    .HBRight
      width 58.47%
      height 100%
      .divming1
        height: 50.53%
        display block
        color #333
        img
          width 100%
          display block
      .divming2
        margin 0
        padding 0
        height: 49.47%;
        display block
        color #333
        img
          width 100%
          display block

  .customPageLineWrap
    position relative
    box-sizing border-box
    width 100%
    height 62.3px
   // background red
    border-bottom 0 solid
    overflow hidden
    .customPageLine
      padding-top 10px
      width 100%
      height 52px
    .moreTitclass
      position absolute
      box-sizing border-box
      text-align right
      right 0
      top 1px
      width 120px
      height 47px
      a
        display block
        width 100%
        height 100%
        img
          width 60px
          height 47.5px





  .fashine
    height 268px
    width 100%
    &>div
      width 100%
      height 100%
      .cmVideoList
        width 100%
        height 100%
      a
        display block
        width 100%
        height 100%
        .FimgBox
          width 100%
          height 210px
          img
            width 100%
            height 100%
        .Ftext
          width 100%
          height 58px
          font-size 12px
          padding 10px
          text-align center
          color #999
          .textover
            color #333
            width 355px
            height 19px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .textDec
            color #333
            width 355px
            height 19px
            .cmallViewIco
              display inline-block
              width 10px
              height 9px
              background url("../../common/img/view-black.png")
              background-size contain
            .FL
              margin-left 10px
              margin-right 10px



  .TIyanImg
    width 100%
    position relative
    display flex
    justify-content center
    align-items center
    height 155px
    text-align center
    font-size 18px
    background #fff
    overflow hidden
    &>a
      display block
      img
        width 100%
        height 100%




  .HottitclassPt
    width 100%
    height 40px
    margin 0
    padding 0
    text-align center
    a
      display inline-block
      width 55%
      height 100%
      img
        width 100%
        height 100%

  .singleDiv
    width 100%
    box-sizing border-box
    div
      .singleDivTitle
        box-sizing border-box
        padding 10px
        height 44px
        width 100%
        .PTname
          font-size 15px
        .PTsale
          color #999
          font-size 12px
          margin-left 5px

      .saleImg
        width 100%
        height 153px
        a
          display block
          width 100%
          height 100%
          img
            width 100%
            height 100%


  .judgediv
    width 100%
    height 583px
    box-sizing border-box
    div
      .judgedivTitle
        width 100%
        height 45px
        div
          .judgedivTitleImg
            margin-left 20px
            width 80%
            height 45px
          .judgedivTitleText
            position: relative;
            top: -30px;
            width 88px
            height 15px
            float right
            font-size 12px
            color #999



      .brands-judge
        width 100%
        height 538px
        .brandsLis
          width 100%
          height 100%
          content ''
          display block
          clear both
          &>li
            float left
            width 182px
            height 264px
            &>a
              display block
              &>div
                margin-top 10px
                margin-left 10px
                padding-bottom 15px
                //background-color #f5f5f5
                width 172px
                height 254px
                .brandsLiaImg
                  position relative
                  overflow hidden
                  width 100%
                  height 150px
                  &>div
                    center #f4f4f4
                    background-size 120px auto
                    position relative
                    &>img
                      width 100%
                      height 100%
                  .brandsLiaImgT
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    color #fff
                    font-size 12px
                    text-align center
                    position absolute
                    bottom 0
                    left 0
                    width 100%
                    background rgba(0,0,0,.4)


                .brandsLiaT1
                  box-sizing border-box
                  font-size 13px
                  padding-left 15px
                  padding-right 5px
                  margin-top 5px
                  content ''
                  display block
                  clear both
                  .fl
                    float left
                    color #333
                  .fr
                    float right
                    color #333


                .brandsLiaT2
                  text-overflow ellipsis
                  box-sizing border-box
                  width 172px
                  margin-top 25px
                  font-size 13px
                  padding-right 5px
                  padding-left 5px
                  color #999
                  height 60px
                  overflow hidden




  .wap-footer-bar
    .footer
      width 100%
      height 86px
      background #fff
      clear both
      padding-bottom 0
      margin 1em 0 0
      .ft
        padding 15px 0 5px
        text-align center
        .bt
          padding-right 10px
          color red

</style>
