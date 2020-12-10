<template>
  <div class="body-wraper">
    <div class="wraper">
      <div class="nav">
        <scale-nav></scale-nav>
      </div>
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
      <div class="right">
        <div class="recommend-content">
          <div class="left">
            <img-text url='http://demo.qzhai.net/gohan/wp-content/uploads/2020/01/beach-during-day-2941017-500x625.jpg'></img-text>
          </div>
          <div class="right">
            <img-text url='http://demo.qzhai.net/gohan/wp-content/uploads/2020/03/casual-cute-female-friends-206409-scaled-500x333.jpg'></img-text>
            <img-text url='http://demo.qzhai.net/gohan/wp-content/uploads/2020/03/red-and-white-mail-box-3703429-500x333.jpg'></img-text>
          </div>
        </div>
        <card-article1></card-article1>
        <card-article1></card-article1>
        <card-article1></card-article1>
        <card-article1></card-article1>
        <card-article1></card-article1>
      </div>
    </div>
  </div>
</template>

<script>
import toolTip from '../components/toolTip'
import cardSimple from '../components/card/card-simple'
import tag from '../components/tag'
import cardArticle1 from '../components/card/card-article1'
import imgText from '../components/image/img-text'
import scaleNav from '../components/Navigation/scaleNav'
export default {
  components:{toolTip, cardSimple,tag,cardArticle1, imgText, scaleNav}
}
</script>
<style lang='scss' scoped>
.body-wraper{
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 100px;
  .wraper{
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 100px;
  }
  .nav{
    position: absolute;
    top:0px;
    left: 0px;
  }
  .left{
    width: 300px;
    height: 100%;
    height: 100%;
    .person-info-wraper{
      box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: 0.05);
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
      /**滚动条样式**/
    &::-webkit-scrollbar{
      width: 8px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
      background: rgba(71, 70, 70,0.1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track{
      background: rgba(71, 70, 70,0.05);
      border-radius: 10px;
    }
    .recommend-content{
      background: white;
      height: 320px;
      padding: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: 0.05);
      border-radius: 10px;
      .left{
        width: 49%;
      }
      .right{
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0px;
        .img-text-wraper{
          height: 47.5%;
        }
      }
    }
  }
}
</style>