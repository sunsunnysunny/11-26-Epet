<template>
  <div class="Catebox">
    <div class="CateleftboxWrap">
      <scroller>
      <div class="Cateleftbox">
        <ul>
          <li v-for="(item,index) in kind" :key="index" :class="{Lon:ison==index}" @click="changeOn(index)">{{item.name}}</li>
        </ul>
      </div>
      </scroller>

    </div>
    <div class="CaterightboxWrap">
      <scroller>
        <div class="Caterightbox">
          <ul>
            <li class="Caterightbox1" v-for="(HottitleLi,index) in Hottitle.category">
              <a href="#">{{HottitleLi.name}}</a>
              <a class="fullDoods" v-show="true">
                <img style="display: inline-block;width: 45px;position: relative;right: -233px;top: -22px;"
                     src="../../common/img/cate_right_img.png" alt="">
              </a>
              <ul class="CaterightboxUl1">
                <li v-for="(item,index) in HottitleLi.items" :key="index">
                  <a href="#">
                    <div class="CaterightboxUlA">
                      <img v-lazy="item.image">
                    </div>
                    <p class="ftc ft12 mt10 c333">{{item.itemName}}</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    //计算属性
    computed:{
      ...mapState(['kind'])
    },
    //在挂载的时候发送Ajax请求获取数据 注意：要异步的并且要传递一个回调函数，通知调用者状态已经更新
    mounted(){
        this.$store.dispatch('getKind')
      setTimeout(()=>{
        this.changeOn(0)
      },1000)
    },
    //data
    data(){
      return {
        ison: 0,
        dataid:0,
        Hottitle:{}
      }
    },
    methods: {
      //修改 Cateleftbox中li的选中状态
      changeOn(num=0){
          this.ison = num
          this.Hottitle = this.$store.state.kind[num]
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Catebox
    position absolute
    top 40px
    left 0
    bottom 45px
    width 100%
    .CateleftboxWrap
      top 40px
      left 0
      position fixed
      bottom 0
      padding-bottom 45px
      width 70px
    .Cateleftbox
      ul > .Lon
        background #f3f4f5
        color #ed4044
      ul > li
        box-sizing border-box
        padding 15px 0
        border-bottom 1px solid #f3f4f5
        width 70px
        height 50px
        font-size 13px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        text-align center
    .CaterightboxWrap
      position absolute
      top 0
      left 70px
      right 0
      bottom 0
      box-sizing border-box
      width 300px
      height 100%
      /*padding 15px 5px 20px*/
      border-top 1px solid #f3f4f5
      ._v-content
        height 100%
      .Caterightbox
        position absolute
        /*left 75px*/
        /*right 0*/
        /*top 40px*/
        /*bottom 50px*/
        height 100%
        /*max-height 500px*/
        /*overflow hidden*/
        ul
          overflow hidden
          .Caterightbox1
            a
              display block
              color #999
              font-size 12px
              margin-top 10px
              padding-left 5px
            .CaterightboxUl1
              content ''
              display block
              clear both
              & > li
                box-sizing border-box
                float left
                margin-top 10px
                width 33.33%
                height 116px
                padding 0 5px
                & > a
                  display block
                  .CaterightboxUlA
                    position relative
                    padding-top 100%
                    img
                      top 0
                      left 0
                      position absolute
                      width 100%
                      height 100%
                  p
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    height 20px
                    font-size 12px
                    text-align center
                    color #333
                    margin-top 10px
          .Caterightbox2
            a
              display block
              color #999
              font-size 12px
              margin-top 10px
              padding-left 5px

            .CaterightboxUl2
              content ''
              display block
              clear both
              & > li
                box-sizing border-box
                float left
                margin-top 10px
                width 50%
                height 116px
                padding 0 5px
                & > a
                  display block
                  .CaterightboxUlB
                    position relative
                    padding-top 50%
                    img
                      top 0
                      left 0
                      position absolute
                      width 100%
                      height 100%
                  p
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    height 20px
                    font-size 12px
                    text-align center
                    color #333
                    margin-top 10px


</style>
