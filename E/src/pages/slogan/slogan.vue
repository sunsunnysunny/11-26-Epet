<template>
    <div class="ss">
      <scroller>
        <div class="band-list">
          <div class="band" v-for="(sloga,index) in slogan" :key="index">
            <div class="bandTitle">
              <span>—— {{sloga.title}} ——</span>
            </div>
            <div class="list">
              <ul>
                <li v-for="(slog,index) in sloga.list" :key="index">
                  <a class="DlA" href="#">
                    <div class="ImageM" v-show="true">
                      <img v-lazy="slog.logo" alt="">
                    </div>
                    <div class="jianD" v-if="slog.Jian">
                      <img class="jian" src="./jian.png" alt="">
                    </div>
                    <span class="logoT" v-show="slog.TA">TA公益</span>
                    <p class="p1">{{slog.name}}</p>
                    <p class="pnameC">{{slog.address}}</p>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </scroller>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default{
    //计算属性
      computed:{
        ...mapState(['slogan'])
      },
    //挂载时触发action，请求数据
      mounted(){
          this.$store.dispatch('getSlogan')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ss
  height 700px
.band-list
  box-sizing border-box
  position relative
  padding-top 40px
  padding-bottom 46px
  top -74px
  right 0
  left 0
  bottom 0

  .band
    top: 78px;
    position: relative;
    box-sizing border-box
    width 100%
    padding-bottom 15px
    margin-bottom 10px
    .bandTitle
      box-sizing border-box
      padding-top 20px
      font-size 12px
      color #999
      text-align center
      span
        overflow hidden
        color #999
    .list
      content ''
      display block
      clear both
      box-sizing border-box
      padding-top 0 5px
      ul
        overflow hidden
        &>li
          box-sizing border-box
          margin-top 20px
          padding 0 5px
          position relative
          float left
          width 29.3%
          margin-left 10px
          .DlA
            width 100%
            diaplay block
            .ImageM
              width 90%
              border 1px solid #e2e2e2
              text-align center
              padding 50px 10px 10px
              height: 10px
              position relative
              img
                width 100%
                top 0
                left 0
                position absolute
                display block
                vertical-align middle
            .jianD
              .jian
                position absolute
                width 13px
                height 13px
                top 0
                left 5px
            .logoT
              position absolute
              font-size 8px
              padding 0 2px
              top 0
              right -16px
              background #e44b46
            .p1
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .pnameC
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 12px
              color: #999
              text-align center

</style>
