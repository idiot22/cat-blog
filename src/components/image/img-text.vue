<template>
  <div class="img-text-wraper" >
    <img-show :url="url" alt=""></img-show>
    <div class="mask"></div>
    <div class="text">
      <h2>剪影流殇，光影华年</h2>
      <p>
        染指流沙，回绕不尽的世界繁华；
        青灯孤伴，镌刻不完的午夜落花；
        锦帛残卷，撰写不到的城南旧事；
        蓦然...
      </p>
    </div>
  </div>
</template>

<script>
import imgShow from './img-show'
export default {
  props:['url','title','text'],
  components:{imgShow}
}
</script>

<style lang='scss' scoped>
.img-text-wraper{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    &:hover{
      background: rgba(0,0,0,0.3);
    }
  }
  .text{
    position: absolute;
    bottom: 0px;
    padding: 15px;
    h2{
      color: #fff;
      letter-spacing: 0.5px;
      font-size: 16px;
      margin-bottom: 15px;
    }
    p{
      letter-spacing: 0.3px;
      color: rgb(238, 238, 238);
      font-size: 13px;
      line-height: 20px;
    }
  }
}
</style>