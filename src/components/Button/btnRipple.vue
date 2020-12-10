<template>
    <button :style="{borderRadius: btnRadius+'px',height: height,backgroundColor: btnColor, color:fontColor,paddingRight: paddingRow, paddingLeft: paddingRow}">
      <canvas @click="ripple"></canvas>
      <slot></slot>
    </button>
</template>

<script>
import { getStyleNumer } from '../../utils/css'
export default {
  props:{
    speed: {
      default: 4,
      type: Number
    },
    btnRadius: {
      default: 5,
      type: Number
    },
    paddingRow: {
      default: '30px'
    },
    height: {
      default: '40px'
    },
    btnColor: {
      type: String
    },
    rippleColor:{
      default: 'rgb(255, 255, 255)'
    },
    fontColor:{
      default: 'rgb(255, 255, 255)'
    }
  },
  data(){
    return{
      canvas: null,
      initialized: false,
      cxt: null,
      origin: {
        x: 0,
        y: 0
      },
      radius: 0,
      speedOpacity: 0,
      opacity: 0.4,
      timer: null
    }
  },
  methods:{
    init(el){
      let btn = el.parentElement
      let w = getStyleNumer(btn,'width')
      let h = getStyleNumer(btn,'height')
      el.width = w
      el.height = h
      this.speedOpacity = (this.speed / w) * this.opacity
      this.cxt = el.getContext('2d')
    },
    ripple(el){
      this.canvas= el.target
      if(!this.initialized){
        this.initialized = true
        this.init(this.canvas)
      }
      if(this.timer){
        window.cancelAnimationFrame(this.timer);
      }
      this.radius = 0
      this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.origin.x = el.offsetX
      this.origin.y = el.offsetY
      this.canvas.style.opacity = this.opacity
      this.draw()
    },
    draw(){
      this.cxt.beginPath()
      // 先绘制一个以点击位置为原点的圆
      this.cxt.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI, false)
      this.cxt.fillStyle = this.rippleColor
      this.cxt.fill()
      // 定义下次渲染圆的半径和透明度
      this.radius += this.speed
      this.canvas.style.opacity -= this.speedOpacity;
      if(this.radius < this.canvas.width || this.canvas.style.opacity > 0){
        this.timer = window.requestAnimationFrame(this.draw);
      }else{
        // 清除画布
        this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.style.opacity = 0;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
button{
  background: #4799f0;
  color: white;
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  font-size: 15px;
  white-space: nowrap;
  box-sizing: border-box;
  canvas{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
}
.btn-red {
  border-color: #f83d3d;
  background-color: #f95a5a;
  color: #ffffff; }
.btn-red:hover {
    border-color: #F72929;
    background-color: #F72929; }

.btn-blue {
  border-color: #4799f0;
  background-color: #63a9f2;
  color: #ffffff; }

.btn-blue:hover {
    border-color: #348FEE;
    background-color: #348FEE; }
</style>