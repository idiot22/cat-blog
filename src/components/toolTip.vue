<template>
  <div class="tool-tip">
     <div class="poptip btn" :aria-controls="poptipText" :aria-color='color'>
       <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    poptipText:{
      type:String,
      default: ''
    },color:{
      default: '#30363d'
    }},
  data(){
    return{
      $poptipBg: this.color
    }
  },
  mounted(){
    console.log(this.$poptipBg)
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
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $triangle $triangle 0 $triangle;
    border-color: $poptipBg transparent transparent transparent;
    left: calc(50% - #{$triangle});
    top: 0px;
    transform: translateX(0%) translateY($distance);
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
    transform: translateX(-50%) translateY($distance);
    background: $poptipBg;
    line-height: 1;
    border-radius: 4px;
  }
  &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}
.btn{
  display: inline-block;
  cursor: pointer;
}
</style>