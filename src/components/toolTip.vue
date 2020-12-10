<template>
  <div class="tool-tip">
     <div class="poptip btn" :aria-controls="popText" :aria-color='color'>
       <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    popText:{
      type:String,
      default: ''
    },color:{
      default: '#30363d'
    },
    position:{
      default: 'bottom',
      type: String
    }},
  data(){
    return{
      $poptipBg: this.color
    }
  }
}
</script>

<style lang='scss' scoped>
$poptipBg: #666;
$color: #fff;
$triangle: 5px;
$distance: -12px;
.poptip {
  position: relative;
  z-index: 101;
  &::before,
  &::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.1s ease 0.1s;
    box-sizing: border-box;
    transform-origin:center center;
  }
  /* &::before {
    content: "";
    position: absolute;
    width: 100;
    height: 100;
    border-style: solid;
    border-width: $triangle $triangle 0 $triangle;
    border-color: $poptipBg transparent transparent transparent;
    left: calc(50% - #{$triangle});
    top: 0px;
    transform: translateX(0%) translateY($distance - 12);
    transform-origin:center center;
  }

  &::after {
    color: $color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 6px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY($distance) scale(0.5);
    background: $poptipBg;
    line-height: 1;
    border-radius: 4px;
    transform-origin:center center;
  } */
  &::before {
    content: "";
    position: absolute;
    width: 100;
    height: 100;
    border-style: solid;
    border-width:0 $triangle $triangle  $triangle;
    border-color: transparent transparent  $poptipBg transparent;
    left: calc(50% - #{$triangle});
    bottom: 0px;
    transform: translateX(0%) translateY(-$distance + 12);
    transform-origin:center center;
  }

  &::after {
    color: $color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 6px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY( 0 - $distance) scale(0.5);
    background: $poptipBg;
    line-height: 1;
    border-radius: 4px;
    transform-origin:center center;
  }
  &:hover::before{
    visibility: visible;
    opacity: 1;
    transform: translateX(0%) translateY(-$distance);
  }
  &:hover::after {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) translateY(-$distance) scale(1);
  }
}
.btn{
  display: inline-block;
  cursor: pointer;
}
</style>