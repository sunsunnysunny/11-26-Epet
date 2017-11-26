<template>
  <div id="category">
    <div class="allModules">
      <header>
        <div class="kind">
          <span>
             <router-link  to="/category/kind">分类</router-link>
          </span>
        </div>
        <div class="slogan">
          <span>
            <router-link to="/category/slogan">品牌</router-link>
          </span>
        </div>
        <a class="Sa" href="#">
          <img src="../../common/img/seach.png" alt="">
          <a href=""></a>
        </a>
      </header>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>

</template>
<script>
  import kind from '../../pages/kinds/kind.vue'
    export default{
        components:{
          kind
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .allModules
    position relative
    /*top 40px*/
    header
      background: white 40px;
      z-index: 103;
      box-sizing border-box
      border-bottom 1px solid #cbcbcb
      position fixed
      top 0
      left 0
      right 0
      display block
      width 100%
      height 40px
      &>div>span:hover a
        display inline-block
        color red
        font-size 13px
        font-weight bold
        box-sizing border-box
        padding-right 5px
        width 34px
        height 40px
        border-bottom 2px solid red
      .kind
        box-sizing border-box
        width 50%
        height 40px
        line-height 40px
        text-align right
        padding-right 5%
        font-size 13px
        color black
        float left
        &>span
          .router-link-active
            display inline-block
            color red
            font-size 13px
            font-weight bold
            box-sizing border-box
            padding-right 5px
            width 34px
            height 40px
            border-bottom 2px solid red
        &>a
          font-weight bold
      .slogan
        box-sizing border-box
        width 50%
        height 40px
        line-height 40px
        text-align left
        padding-left 5%
        color black
        font-size 13px
        font-weight bold
        float left
      .Sa
        position relative
        float right
        width 14px
        display block
        height 14px
        top -28px
        right 13px
      img
        width 14px
        height 14px



</style>
