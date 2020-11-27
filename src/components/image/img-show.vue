<template>
  <div class="img-show" :style="{width: width,height: height}">
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  props:['url','width','height']
}
</script>

<style lang='scss' scoped>
.img-show{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  img:hover{
    transform: scale(1.1);
  }
}
</style>