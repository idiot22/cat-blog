<template>
  <div class="time-axis-wraper">
    <ul class="time-line-content">
      <li>
        <h3>2020</h3>
        <ul>
          <li><span>11-3</span> 网络分区</li>
          <li><span>11-3</span>Linux Logrotate 的简单使用</li>
          <li><span>11-3</span>GO 无缓冲通道和有缓冲通道</li>
          <li><span>11-3</span>集群</li>
          <li><span>11-3</span>Java SPI</li>
        </ul>
      </li>
      <li>
        <h3>2019</h3>
        <ul>
          <li><span>10-2</span>安装 WordPress</li>
          <li><span>10-2</span>Electron + Vue 开发桌面应用</li>
          <li><span>10-2</span>Java 设计模式：简单工厂模式-工厂模式-抽象工厂模式</li>
        </ul>
      </li>
      <li>
        <h3>2018</h3>
        <ul>
          <li><span>9-09</span> 设计模式：代理模式</li>
          <li><span>9-6</span> 设计模式：事件驱动模式</li>
        </ul>
      </li>
      <li>
        <h3>2018</h3>
        <ul>
          <li><span>9-09</span> 设计模式：代理模式</li>
          <li><span>9-6</span> 设计模式：事件驱动模式</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.time-axis-wraper{
}
.time-line-content{
  width: 800px;
  margin:auto;
  background: white;
  border-left: solid 4px rgb(235, 235, 235);
  padding-left: 20px;
  padding-top: 1px;
  li{
    h3{
      margin: 80px 0 0;
      color: #242424;
      font-weight: 700;
      font-size: 26px;
      margin: 80px 0 0;
    }
    li{
      padding: 30px 0 10px;
      border-bottom: 1px dashed #eaecef;
      color: #7f7f7f;
      font-size: 16px;
      cursor: pointer;
      span{
        font-size: 12px;
        padding-right: 10px;
        position: relative;
        &::before{
          content: " ";
          position: absolute;
          z-index: 2;
          left: -20px;
          top: 50%;
          margin-left: -4px;
          margin-top: -4px;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }
      }
      &:hover{
        color: #242424;
        span{
          &::before{
            background:#242424;
          }
        }
      }
    }
  }
}
</style>