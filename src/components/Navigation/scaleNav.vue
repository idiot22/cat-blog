<template>
  <div class="scale-nav-wraper">
      <div class="left">
          <div class="img-wraper">
              <img src="http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/stock-photo-1005217204-1-100x100.png" alt="" srcset="">
          </div>
          <div class="info-wraper">
              <p>喵喵喵</p>
              <p>这是喵喵喵的小天地</p>
          </div>
      </div>
      <div class="right">
          <ul class="link-wraper" :class="extendNav ? '' :'zeroWidth'">
              <li>
                  <btn-ripple rippleColor='black' btnColor='white' fontColor='#333' height='100%' width='75px'>首页</btn-ripple>
              </li>
              <li>
                  <btn-ripple rippleColor='black' btnColor='white' fontColor='#333' height='100%' width='75px'>分类</btn-ripple>
              </li>
              <li>
                  <btn-ripple rippleColor='black' btnColor='white' fontColor='#333' height='100%' width='75px'>标签</btn-ripple>
              </li>
              <li>
                  <btn-ripple rippleColor='black' btnColor='white' fontColor='#333' height='100%' width='75px'>时间轴</btn-ripple>
              </li>
              <li>
                  <btn-ripple rippleColor='black' btnColor='white' fontColor='#333' height='100%' width='75px'>留言</btn-ripple>
              </li>
          </ul>
          <div class="icon">
              <icon-btn :btnType="extendNav? 'scale':'extend'" @click.native="extend"></icon-btn>
          </div>
      </div>
  </div>
</template>

<script>
import iconBtn from '../Button/icon-btn'
import btnRipple from '../Button/btnRipple'
export default {
    components:{iconBtn,btnRipple},
    data(){
        return{
            extendNav: false
        }
    },
    methods:{
        extend(){
            this.extendNav = !this.extendNav
        }
    }
}
</script>

<style lang='scss' scoped>
.scale-nav-wraper{
    background: rgb(255, 255, 255);
    min-width: 360px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 15px rgba(0,0,0,0.02);
    padding: 0px 20px;
    .left{
        padding: 10px 20px;
        display: flex;
        height: 50px;
        position: relative;
        z-index: 100;
        .img-wraper{
            width: 48px;
            height: 48px;
            border-radius: 24px;
            background: cyan;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info-wraper{
            padding: 0px 15px;
            p{
                font-size: 12px;
                color: #999;
                margin: 8px 0px;
            }
            p:nth-of-type(1){
                font-size: 18px;
                color: #333;
                letter-spacing: 1px;
            }
        }
    }
    .right{
        display: flex;
        transition: 1s all ease;
        position: relative;
        .link-wraper{
            display: flex;
            font-size: 14px;
            transition: 1s all ease;
            li{
                height: 100%;
            }
        }
        .icon{
            display: flex;
            align-items: center;
        }
    }
}
.zeroWidth{
    transition: 1s all ease;
    overflow: hidden;
    transform: translateX(-100%);
    opacity: 0;
}
</style>