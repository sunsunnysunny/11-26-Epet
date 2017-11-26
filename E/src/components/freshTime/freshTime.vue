<template>
<div class="freshWrap">
  <div class="fresht">
    <span style="border: 1px solid #7e8c8d">{{h}}</span>
    <span style="width: 3px;height: 16px;color: black">:</span>
    <span style="border: 1px solid #7e8c8d">{{m}}</span>
    <span style="width: 3px;height: 16px;color: black">:</span>
    <span style="border: 1px solid #7e8c8d">{{s}}</span>
  </div>
</div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        data(){
          return{
              h:'',
              m:'',
              s:''
          }
        },
        //计算属性
        computed:{
          ...mapState(['main'])
        },
        //挂载函数
        mounted(){
            this.$store.dispatch("getMain",()=>{
              this.$nextTick(()=>{
                //计算倒计时
                this.ST = setInterval(this.freshTime,1000)
              })
            })

        },
        //方法
        methods:{
          //计算倒计时函数体
          freshTime () {
            //结束时间
            const endTimeAM = this.$store.state.main
              const endTimeA = endTimeAM.freshTime
              const endTime = new Date(endTimeA)
              //当前时间
              const nowTime = new Date()
              //时间距离
              const DisTime = parseInt((endTime.getTime() - nowTime.getTime())/1000)
              //计算时分秒
               this.h=parseInt((DisTime/3600)%24)
               this.m=parseInt((DisTime/60)%60)
               this.s=parseInt(DisTime%60)
            if(DisTime<=0){
              document.innerHTML="活动已结束"
              clearInterval(ST)
            }

          },

        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .freshWrap
    width 80px
    height 40px
    .fresht
      width 80px
      height 20px
      &>span
        box-sizing border-box
        display inline-block
        width 18px
        height 18px
</style>
