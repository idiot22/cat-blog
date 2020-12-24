<template>
  <div class="login-wraper">
    <div class="container-scroll-wraper">
      <div class="container">
        <div class="login-box">
          <div class="title">
            <div class='text1'>{{title}}</div>
          </div>
          <cat-form>
            <cat-form-item :label="item"  v-for="item in itemList" :key='item'></cat-form-item>
          </cat-form>
          <div class="btn-wraper">
            <btnRipple :rippleColor="'#f55'" :fontColor="'#e54d42'" :btnColor="'white'" @click.native='close'>取消</btnRipple>
            <btnRipple :rippleColor="'#0478be'" :fontColor="'#0478be'" :btnColor="'white'" @click="confirm">确认</btnRipple>
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
import btnRipple from '../Button/btnRipple'
export default {
  props:['title', 'itemList'],
  components:{catForm, catFormItem, btnRipple},
  data(){
    return{
      isFocus: false
    }
  },
  methods:{
    close(){
      this.$emit('closeCardForm')
    },
    confirm(){

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
  .login-box{
    max-height: 90%;
    padding: 16px 28px 44px;
    .title{
      padding: 20px 0px;
      .text1{
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .text2{
        color: #999;
        font-size: 1rem;
      }
    }
    .btn-wraper{
      display: flex;
      justify-content: flex-end;
      button{
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        outline: none;
        margin-left: 10px;
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