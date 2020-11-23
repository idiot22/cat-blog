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
export default {

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