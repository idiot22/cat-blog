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
          <ul class="link-wraper">
              <li>
                  <btn-ripple>首页</btn-ripple>
              </li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
          <div class="icon">
              <icon-btn :btnType="'extend'" @click="extendNav === true"></icon-btn>
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
    }
}
</script>

<style lang='scss' scoped>
.scale-nav-wraper{
    height: 50px;
    padding: 15px 20px;
    background: rgb(255, 255, 255);
    min-width: 360px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    .left{
        display: flex;
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
        .link-wraper{

        }
    }
}
</style>