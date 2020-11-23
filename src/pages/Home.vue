<template>
  <div class="home-wraper">
    <div class="left">
      <div class="person-info-wraper">
        <div class="avatar-wraper">
          <img src="http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/stock-photo-1005217204-1-100x100.png" alt="" srcset="">
        </div>
        <p class="name">喵喵喵</p>
        <p class="info">喵喵喵的博客呀</p>
        <div class="link-wraper">
          <tool-tip poptipText="qq" color='red'>
            <i class="iconfont icon-qq"></i>
          </tool-tip>
          &nbsp;&nbsp;&nbsp;
          <tool-tip poptipText='微信'>
            <i class="iconfont icon-weixin"></i>
          </tool-tip>
          &nbsp;&nbsp;&nbsp;
          <tool-tip poptipText='小破站'>
            <i class="iconfont icon-bilibili-line"></i>
          </tool-tip>
        </div>
      </div>
      <div class="new-article-wraper">

      </div>
      <div class="">

      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import toolTip from '../components/toolTip'
export default {
  components:{toolTip}
}
</script>

<style lang='scss' scoped>
.home-wraper{
  padding: 0px 30px;
  display: flex;
  height: 100%;
  .left{
    width: 300px;
    background: white;
    height: 100%;
    background: violet;
    height: 100%;
    .person-info-wraper{
      padding: 25px 0px;
      background: white;
      border-radius: 10px;
      .avatar-wraper{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
        margin-bottom: 10px;
        margin: auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        color: #333;
        font-size: 1.125rem;
        letter-spacing: 1px;
        line-height: 1.5rem;
        margin: 20px 0px;
        text-align: center;
      }
      .info{
        color: #999;
        text-align: center;
      }
      .link-wraper{
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        color: rgb(168, 168, 168);
        .tool-tip{
          margin: 10px;
          .iconfont{
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .right{
    width: 100%;
    height: 100%;
    margin-left: 15px;
    background: yellow;
  }
}
</style>