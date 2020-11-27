<template>
  <div class="move-page">
    <!--移动背景-->
    <div id="scene">
      <div data-depth='0.4' class="layer">
        <img src="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/main.jpg" alt="" srcset="">
      </div>
    </div>
    <!--mask-->
    <div class="mask">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
import loading from '../components/Loadings/loading'
export default {
  components:{
    loading
  },
  mounted(){
    let scene = document.getElementById('scene')
    new Parallax(scene,{
      relativeInput: true,
			clipRelativeInput: true,
    })
  }
}
</script>

<style lang='scss' scoped>
.move-page{
  width: 100%;
  height: 100%;
  position: relative;
  #scene{
    width: 100%;
    height: 100%;
    .layer{
      width: 100%;
      height: 100%;
      img{
        position: absolute;
        top:-5%;
        left:-5%;
        width: 110%;
        height: 110%;
      }
    }
  }
  .mask{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(76,80,207,.53);
    -webkit-clip-path: polygon(0 0,25% 0,60% 100%,0 100%);
    clip-path: polygon(0 0,25% 0,60% 100%,0 100%);
  }
}
</style>