<template>
  <div class="dogmask">
    <div class="dgnav">
      <a href="#">
        <span>猫猫站</span>
      </a>
      <a href="#">
        <span style="background: red;color:white">狗狗站</span>
      </a>
      <a href="#">
        <span>水族站</span>
      </a>
    </div>
    <div class="defaultDress">
      <span>当前默认地址：</span>
      <span>重庆 江北区 江与城方向</span>
    </div>
    <div class="dress">
      <VDistpicker type="mobile" province="广东省" city="广州市" area="海珠区"></VDistpicker>
    </div>
  </div>
</template>
<script>
    import VDistpicker from 'v-distpicker'
    export default{
        components: { VDistpicker }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dogmask
  width 100%
  height 100%
  .dgnav
    box-sizing border-box
    width 100%
    height 54px
    padding 10px
    display flex
    justify-content space-around
    &>a
      float left
      height 34px
      width 118px
      &>span
        display block
        margin-left 10px
        margin-right 10px
        padding-top 5px
        padding-bottom 5px
        text-align center
        font-size 15px
        background #b9b9b9
        line-height 23px
        height 23px
        color #333
        border-radius 5px
  .defaultDress
    box-sizing border-box
    padding-top 15px
    width 100%
    height 43px
    background #ffe6d9
    border-bottom 1px solid #e7e7e7
    font-size 14px
  .dress
    width 100%
</style>
