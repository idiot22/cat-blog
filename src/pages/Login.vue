<template>
  <div class="login-wraper">
    <div class="container-scroll-wraper">
      <div class="container">
        <div class="head">
            <i class="iconfont icon-fanhuijiantou"></i>
        </div>
        <div class="login-box">
          <div class="title">
            <div class='text1'>欢迎回来，</div>
            <div class="text2">请填写以下信息进行登录</div>
          </div>
          <form action="">
            <div class="form-item">
              <label for="username">用户名<span>*</span></label>
              <div class="input-wraper" :class="isFocus ? 'highlight' : ''">
                <input type="text" name="username"  @focus="isFocus= true" @blur="isFocus=false" :class="isFocus ? 'highlight' : ''">
              </div>
              <p class="warning">dfdfdfssfdsdf</p>
            </div>
            <div class="form-item">
              <label for="username">密码<span>*</span></label>
              <div class="input-wraper" :class="isFocus ? 'highlight' : ''">
                <input type="text" name="username"  @focus="isFocus= true" @blur="isFocus=false" :class="isFocus ? 'highlight' : ''">
              </div>
              <p class="warning"></p>
            </div>
            <div class="btn-wraper">
              <button>登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isFocus: false
    }
  }
}
</script>

<style lang='scss' scoped>
.login-wraper{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-scroll-wraper{
  width: 488px;
  height: 90%;
  overflow-y:scroll;
  border-radius: 20px;
}
.container{
  background: white;
  border-radius: 10px;
  width: 480px;
  position: relative;
  z-index: 1000;
  .head{
    padding: 12px 28px 0px;
    height: 36px;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rem;
    i{
      cursor: pointer;
    }
  }
  .login-box{
    max-height: 90%;
    padding: 16px 28px 44px;
    .title{
      padding-bottom: 30px;
      .text1{
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .text2{
        color: #999;
        font-size: 1rem;
      }
    }
    .form-item{
      margin-bottom: 10px;
      label{
        color: #0d0c22;
        font-weight: 700;
        font-size: 0.9rem;
        span{
          color: #f55;
        }
      }
      .input-wraper{
        &.highlight{
          background-color: white;
          border: solid 1px rgba(4, 120, 190, 0.4);
          box-shadow: 0 0 0 4px rgba(4, 120, 190, 0.1);
        }
        border: solid 1px #f3f3f4;
        width: 100%;
        background-color: #f3f3f4;
        height: 40px;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 10px;
        input{
          &.highlight{
            background-color: white;
          }
          width: 100%;
          height: 100%;
          padding: 0px 20px;
          background-color: #f3f3f4;
          border: none;
          outline: none;
          box-sizing: border-box;
          color: rgb(65, 65, 65);
          caret-color:#f55;
        }
      }
      .warning{
        color: #f55;
        padding: 10px;
      }
    }
    .btn-wraper{
      margin-top: 20px;
      display: flex;
      justify-content: center;
      button{
        width: 240px;
        height: 40px;
        background-color: #f5f5f5;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
/**滚动条样式**/
.container-scroll-wraper::-webkit-scrollbar{
  width: 8px;
  border-radius: 10px;
}
.container-scroll-wraper::-webkit-scrollbar-thumb{
  background: rgba(71, 70, 70,0.2);
  border-radius: 10px;
}
.container-scroll-wraper::-webkit-scrollbar-track{
  background: rgba(71, 70, 70,0.1);
  border-radius: 10px;
}
.mask{
  opacity: 0.46;
  background: rgb(33, 33, 33);
  width: 100%;
  height: 100%;
  position: absolute;
  top:0px;
  left: 0px;
}
</style>