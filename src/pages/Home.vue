<template>
  <div class="body-wraper">
    <div class="left">
      <div class="person-info-wraper">
        <div class="avatar-wraper">
          <img src="http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/stock-photo-1005217204-1-100x100.png" alt="" srcset="">
        </div>
        <p class="name">喵喵喵</p>
        <p class="info">喵喵喵的博客呀</p>
        <div class="link-wraper">
          <tool-tip popText="qq" color='red'>
            <i class="iconfont icon-qq"></i>
          </tool-tip>
          &nbsp;&nbsp;&nbsp;
          <tool-tip popText='微信'>
            <i class="iconfont icon-weixin"></i>
          </tool-tip>
          &nbsp;&nbsp;&nbsp;
          <tool-tip popText='小破站'>
            <i class="iconfont icon-bilibili-line"></i>
          </tool-tip>
        </div>
      </div>
      <div class="new-article-wraper">
        <card-simple title="热门文章">
          <p>下辈子，我想当个主子</p>
          <p>下辈子，我想当个主子</p>
          <p>下辈子，我想当个主子</p>
          <p>下辈子，我想当个主子</p>
          <p>下辈子，我想当个主子</p>
        </card-simple>
      </div>
      <div class="tags-wraper">
        <card-simple title="标签分类">
          <tag color='rgb(242, 109, 109)'>前端</tag><tag color='#22e9e6'>前端</tag><tag color='#ffcd26'>前端</tag>
          <tag color='#ff7701'>前端</tag><tag color='#3cdd7f'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag>
          <tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag>
          <tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag>
          <tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag><tag color='rgb(242, 109, 109)'>前端</tag>
        </card-simple>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import toolTip from '../components/toolTip'
import cardSimple from '../components/card/card-simple'
import tag from '../components/tag'
export default {
  components:{toolTip, cardSimple,tag}
}
</script>

<style lang='scss' scoped>
.body-wraper{
  display: flex;
  height: 100%;
  justify-content: center;
  .left{
    width: 300px;
    background: white;
    height: 100%;
    height: 100%;
    .person-info-wraper{
      padding: 25px 0px;
      background: white;
      border-radius: 10px;
      margin-bottom: 20px;
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
    .new-article-wraper,.tags-wraper{
      margin-bottom: 20px;
    }
  }
  .right{
    width: 800px;
    height: 100%;
    margin-left: 30px;
    background: white;
  }
}
</style>