<template>
  <div class="message-input-wraper">
    <div class="tool-wraper">
      <button>
        <i class="iconfont icon-lianjie"></i>
      </button>
      <button>
        <i class="iconfont icon-picture"></i>
      </button>
      <button>
        <i class="iconfont icon-daima"></i>
      </button>
      <button>
        <i class="iconfont icon-lajitong"></i>
      </button>
      <button>
        <i class="iconfont icon-visible-full"></i>
      </button>
      <button>
        <i class="iconfont icon-invisible"></i>
      </button>
    </div>
    <div class="textarea-wraper">
      <textarea name="" id="" cols="30" rows="10" @focus="jujiao = true" @blur="jujiao = false" :class="jujiao ? 'textarea-wraper-active' : ''"></textarea>
    </div>
    <div class="look-wraper">
      <i class="iconfont icon-chenggongbiaoqing"></i>
      <i class="iconfont icon-2yulan"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jujiao: false
    }
  }
}
</script>

<style lang='scss' scoped>
.message-input-wraper{
  background: white;
  .tool-wraper{
    button{
      border-radius: 5px;
      outline: none;
      border: none;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      background: white;
      transition: 0.5s ;
      color: #626262;
      cursor: pointer;
      &:hover{
        background: rgb(230, 231, 233);
      }
    }
  }
  .textarea-wraper{
    textarea{
      resize:vertical;
      border: 1px solid #e5e5e5;
      width: 100%;
      background-color: #f3f3f4;
      height: 80px;
      border-radius: 5px;
      overflow: hidden;
      outline: none;
      caret-color:#f55;
      color: rgb(65, 65, 65);
      padding: 10px 10px;
      box-sizing: border-box;
    }
  }
  .textarea-wraper-active{
      background-color: white;
      border: solid 1px rgba(5, 145, 231, 0.4) !important;
      box-shadow: 0 0 5px 2px rgba(4, 120, 190, 0.1) !important;
  }
  .look-wraper{
    text-align: end;
    padding-top: 10px;
    color: #626262;
    cursor: pointer;
    i{
      font-size: 22px;
      padding-left: 10px;
    }
  }
}
</style>