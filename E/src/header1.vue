<template>
  <div class="header">
   <div class="indexNavcon">
     <div class="floatHearder">
       <div class="main">
        <div class="headerTop">
          <div class="left">
            <span class="catordog">狗狗站</span>
              <span>|</span>
            <span class="myposition">上海</span>
            <i></i>
          </div>
          <div class="right">
             <a href="#">
               <input type="text" placeholder="搜索商品和品牌">
               <img src="./common/img/h1.png" alt="">
             </a>
            <a href="#">
              <img src="./common/img/h2.png" alt=""></a>
          </div>
        </div>
         <div class="headerBottom">
           <ul class="Navscrol">
             <li><a href="#"><span class="common">首页</span></a></li>
             <li><a href="#"><span class="common">服饰城</span></a></li>
             <li><a href="#"><span class="common">狗狗主粮</span></a></li>
             <li><a href="#"><span class="common">医疗保健</span></a></li>
             <li><a href="#"><span class="common">零食玩具</span></a></li>
             <li><a href="#"><span class="common">日用外出</span></a></li>
             <li><a href="#"><span class="common">美容香波</span></a></li>
           </ul>
            <span class="BlackG"></span>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 86px
    .indexNavcon
      .floatHearder
        position: fixed;
        top 0
        left 0
        background  #fff
        width 100%
        z-index: 9
        box-shadow: 2px 2px 2px #e9e9e9
        .main
          margin-top: 10px
          margin-left 5px
          .headerTop
            padding 5px 10px
            background  #fff
            width  100%
            height 51px
            .left
              margin-right  20px
              position  relative
              float left
              .catordog
                color #898989
                font-size 14px
              .myposition
                color #898989
                font-size 13px
            .right
              float right
              input
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
              img
                width 10px
                height 10px
              img
                display inline-block
                width 25px
                height 25px


          .headerBottom
            width: 100%;
            height: 35px;
            min-width: 320px;
            .Navscrol
              white-space: nowrap;
              display flex
              &>li
                width 74.5px
                float left
                font-size 14px
                margin: 0 10px
                a
                  display: block;
                  width: 100%;
                  height: 100%;
                  line-height: 36px;
                  font-size: 14px;
                  text-align: center;
                  color: #666;



</style>
