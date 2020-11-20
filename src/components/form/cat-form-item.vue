<template>
  <div class="cat-form-item">
    <div class="form-item">
      <label>{{label}}<span v-if='required'>*</span></label>
        <div >
          <input :type="visible ? 'text' : 'password'" @blur="warnFunc" v-model="value" class="input-wraper">
          <div class="icon" @click='visible = !visible' v-if='pwd'>
            <i class="iconfont icon-visible-full" v-show="visible"></i>
            <i class="iconfont icon-invisible" v-show="!visible"></i>
          </div>
        </div>
      <p class="warning">{{warnText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    required:{
      type: Boolean,
      default: false
    },
    warning:{
      type: String,
      default: ''
    },
    pwd:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        value: '',
        visible: true,
        warnText:''
      };
  },
  methods:{
    warnFunc(){
      if(this.required && !this.value){
        this.warnText = this.label + '不能为空'
      }else{
        this.warnText = ''
      }
    },
    changeValue(val){
      this.value = val
      this.$emit({value: val})
    }
  }
}
</script>

<style lang='scss' scoped>
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
      div{
        display: flex;
        justify-content: space-between;
        .input-wraper{
          &:hover{
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
          outline: none;
          caret-color:#f55;
          color: rgb(65, 65, 65);
          padding: 0px 20px;
          box-sizing: border-box;
        }
        .icon{
          margin-left: 10px;
          display: flex;
          align-items: center;
          margin-top: 10px;
          color: rgb(134, 134, 134);
          cursor: pointer;
        }
      }
      .warning{
        color: #f55;
        padding: 10px;
        height: 20px;
      }
    }
</style>