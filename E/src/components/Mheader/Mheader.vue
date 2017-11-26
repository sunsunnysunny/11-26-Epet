<template>
  <div class="headerbox">
    <div class="main">
      <div class="clearfix">
        <div class="epet_seach">
          <div class="epet_seachOne">
            <a href="#">
              <span class="catordog">狗狗站</span>
              <span class="c89">|</span>
              <span class="myposition c89">重庆</span>
              <span style="position: relative; right: -80px;top: -15px;">&gt</span>
            </a>
          </div>
          <p class="search-text">
            <a href="#">
              <input class="search-textH" type="search" placeholder="搜索商品和品牌" disabled>
              <span class="eico"></span>
            </a>
          </p>
        </div>
        <a class="epet-category" href="#">
          <img src="../../common/img/msg1.png" alt="">
        </a>
      </div>
      <div class="findNav" ref="findNav">
        <ul class="findNavLi">
          <li v-for="(menu,index) in main.menus" :key="index">
            <a href="#">
              <span>{{menu.menu_name}}</span>
              <i></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BetterScroll from 'better-scroll'
  export default{
      //计算属性
      computed:{
        ...mapState(['main'])
      },
      //生命周期函数（挂载完）
      mounted(){
        //获取main数据
          this.$store.dispatch('getMain',()=>{
            this.$nextTick(()=>{
              //实现滑动
              this._initScroll()
            })
          })
      },
      methods:{
          _initScroll(){
          //创建导航的scroll对象
            const FindNavScroll = new BetterScroll(this.$refs.findNav,{
              scrollX: true
            })
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerbox
    position relative
    top 0
    z-index 103
    background white
    width 100%
    height 86px
    .main
      width 100%
      height 100%
      .clearfix
        display flex
        justify-content center
        align-items center
        width 100%
        height 51px
        /*background-color yellow*/
        .epet_seach
          display flex
          align-items center
          width 355px
          height 41px
          /*background-color red*/
          .epet_seachOne
            width 80px
            height 22px
            margin-left 14px
            box-sizing border-box
            /*background-color aqua*/
            .catordog
              color #898989
              font-size 13px
            .c89
              color #898989
            .myposition
              font-size 12px
              color #898989
          .search-text
            margin-left 15px
            position relative
            display block
            box-sizing border-box
            width 219px
            height 25px
            &>a
              display block
              width 219px
              height 25px
            .search-textH
              width 219px
              height 25px
              font-size 13px
              border-radius 4px
              outline 0
              color #000
              padding-left 12px
        .epet-category
          display block
          width 25px
          height 25px
          margin-right 12px
          margin-bottom 4px
          &>img
            width 100%
            height 100%
      .findNav
        width 100%
        height 36px
        //background-color rgba(255,124,2,0.4)
        .findNavLi
          height 36px
          display inline-block
          /*float left*/
          white-space nowrap
          /*overflow hidden*/
          &>li
            width 74px
            height 39px
            color #666
            font-size 14px
            text-align center
            line-height 36px
            display inline-block












</style>
