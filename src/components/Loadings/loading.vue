<template>
  <div class="loading-wraper">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
span{
  width: 24px;
  height: 24px;
  display: inline-block;
  border-radius: 100%;
  background: cornflowerblue;
  animation: aniScale 1s ease-in infinite;
  &:nth-of-type(1){
    animation-delay: 0.1s;
    background: rgb(242, 109, 109);
  }
  &:nth-of-type(2){
    animation-delay: 0.2s;
    background: #22e9e6;
  }
  &:nth-of-type(3){
    animation-delay: 0.3s;
    background: #ffcd26;
  }
  &:nth-of-type(4){
    animation-delay: 0.4s;
    background: #ff7701;
  } 
  &:nth-of-type(5){
    animation-delay: 0.5s;
    background: cornflowerblue;
  }

}
@keyframes aniScale {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(2);
    opacity: 0.3;
  }
  100%{
    transform: scale(1)
  }
}
</style>