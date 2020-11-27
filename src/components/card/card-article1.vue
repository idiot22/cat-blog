<template>
  <div class="card-article1">
    <header>
      <div class="left">
        <tag color='#3cdd7f'>前端</tag>
        <icon-text icon='icon-shijian2'>2020-10-10</icon-text>&nbsp;&nbsp;
        <icon-text icon='icon-icon'>13</icon-text>
      </div>
    </header>
    <div class="title">下辈子，我想当个主子</div>
    <div class="info">
      下辈子，我想当个主子下辈子，我想当个主子下辈子，我想当个主子下辈子，我想当个主子下辈子，我想当个主子下辈子，我想当个主子下辈子，我想当个主子
    </div>
    <div class="img-wraper">
      <img-show url='http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg' width='32%' height='160px'></img-show>
      <img-show url='http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg' width='32%' height='160px'></img-show>
      <img-show url='http://demo.qzhai.net/cell/wp-content/uploads/2020/01/bottom-view-of-tokyo-tower-149498-500x281.jpg' width='32%' height='160px'></img-show>
    </div>
  </div>
</template>

<script>
import imgShow from '../image/img-show'
import tag from '../tag'
import iconText from '../icon-text'
export default {
  components:{imgShow,tag,iconText}
}
</script>

<style lang='scss' scoped>
.card-article1{
  border-radius: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.02);
  margin-bottom: 30px;
  header{
    .left{
      width: 180px;
      display: flex;
      justify-content: space-between;
    }
  }
  .title{
    color: #333;
    font-size: 18px;
    letter-spacing: 1px;
    margin: 20px 0px;
  }
  .info{
    color: #888;
    font-size: 14px;
    line-height: 1.6;
    letter-spacing: 1px;
    margin: 20px 0px;
  }
  .img-wraper{
    display: flex;
    justify-content: space-between;
  }
}
</style>