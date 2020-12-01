<template>
  <div class="btn-ripple-wraper">
    <button>
      <canvas @click="ripple"></canvas>
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { getStyle, getStyleNumer } from '../../utils/css'
export default {
  data(){
    return{
      canvas: null,
      initialized: false,
      rippleColor: null,
      cxt: null,
      origin: {
        x: 0,
        y: 0
      },
      radius: 0,
      speed: 3,
      speedOpacity: 0,
      opacity: 0.4,
      timer: null
    }
  },
  methods:{
    init(el){
      let btn = el.parentElement
      this.rippleColor = getStyle(btn,'background-color')
      let w = getStyleNumer(btn,'width')
      let h = getStyleNumer(btn,'height')
      el.width = w
      el.height = h
      console.log(btn,w)
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
      this.draw()
    },
    draw(){
      this.cxt.beginPath()
      // 先绘制一个以点击位置为原点的圆
      this.cxt.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI, false)
      this.cxt.fillStyle = this.rippleColor
      this.cxt.fill()
      console.log(this.cxt)
      // 定义下次渲染圆的半径和透明度
      this.radius += this.speed
      this.opacity -= this.speedOpacity
      this.canvas.style.opacity = this.opacity;
      //console.log(this.radius,this.canvas.width,this.opacity,this.speedOpacity)
      if(this.radius < this.canvas.width || this.opacity > 0){
        this.timer = window.requestAnimationFrame(this.draw);
      }else{
        // 清除画布
        console.log(111)
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
  canvas{
    position: absolute;
    top: 0px;
  }
}
</style>