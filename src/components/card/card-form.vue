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
          <cat-form>
            <cat-form-item label="用户名" required>
            </cat-form-item>
            <cat-form-item label="密码" required pwd>
            </cat-form-item>
          </cat-form>
          <div class="btn-wraper">
            <button>登录</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import catForm from '../form/cat-form'
import catFormItem from '../form/cat-form-item'
export default {
  components:{catForm, catFormItem},
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
  max-height: 90%;
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
  background-color: rgb(33, 33, 33);
  width: 100%;
  height: 100%;
  position: absolute;
  top:0px;
  left: 0px;
}
</style>