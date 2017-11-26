<template>
<div>
  <div class="headerWrap">
    <header class="header">
      <div class="sW">
        <a href="#"></a>
        <span class="shopca">购物车</span>
      </div>
      <div class="sTW">
        <a href="#">编辑</a>
      </div>
      <span class="STImg"></span>
    </header>
  </div>
  <div class="cartBody">

  </div>
</div>
</template>
<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerWrap
    box-sizing border-box
    position relative
    top 0
    width 100%
    height 70px
    .header
      box-sizing border-box
      width 100%
      height 100%
      border-bottom 15px solid #efefef
      .sW
        width 100%
        a
          display block
          width 22px
          height 20px
          background url("./right.png") no-repeat
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
      .sTW
        position: relative;
        width: 32px;
        height: 50px;
        top: -32px;
        left: 308px;
        font-size 1.0rem
      .STImg
        display inline-block
        background url("./imgtk-new.png")
        background-size 20px 20px
        width 20px
        height 20px
        position relative
        left 346px
        top -85px


  .cartBody
    margin 150px 84px
    width 100%
    position relative
    top 0
    height 200px
    background url("./carS.png") no-repeat
    background-size 200px 200px
</style>
