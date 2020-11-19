<template>
  <div class="demo1">
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .demo1{
   position: absolute;
   top: 0px;
   bottom: 0px;
   left: 0px;
   right: 0px;
   background: linear-gradient(145deg,#2980b9, #633bd3, #8e44ad, #418a8a, #27ae60);
   animation: colorChange 15s infinite;
   background-size: 800%;
  }
  @keyframes colorChange {
    0% { background-position-x: 0%}
    50% { background-position-x: 100%;}
    100% { background-position-x: 0%;}
  }
</style>