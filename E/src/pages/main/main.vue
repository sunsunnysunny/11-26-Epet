<template>
  <div>
    <Mheader />
    <scroller>
      <mainContent />
    </scroller>

  </div>
</template>
<script>
    import {mapState} from 'vuex'
    import Mheader from '../../components/Mheader/Mheader.vue'
    import mainContent from '../../components/mainContent/mainContent.vue'
    export default{
      computed:{
        ...mapState(['main'])
      },
      components:{
        Mheader,
        mainContent
      },
      mounted(){
          //当页面挂载完后立马请求数据
        this.$store.dispatch('getMain')
      }
    }
</script>

<style>

</style>
