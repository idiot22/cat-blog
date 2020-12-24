<template>
  <div class="message-input-wraper">
    <div class="tool-wraper">
      <button @click="clickToShowDialog(1)">
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
      <textarea  v-model="commentText" @focus="jujiao = true" @blur="jujiao = false" :class="jujiao ? 'textarea-wraper-active' : ''"></textarea>
    </div>
    <div class="look-wraper">
      <i class="iconfont icon-chenggongbiaoqing" @click="showEmoji = !showEmoji" :style="{color: showEmoji? '#66b1ff': ''}"></i>
      <i class="iconfont icon-2yulan" @click="showEmoji = !showEmoji" :style="{color: showEmoji? '#66b1ff': ''}"></i>
    </div>
    <div class="emotion-wraper" v-if="showEmoji">
      <div class="emotion" v-for="(item, index) in emojiTextList" :key="index" @click="clickEmoji(item)">
        <img :src="`https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${emojiTextList.indexOf(item)}.gif`">
      </div>
    </div>
    <div class="dialog-wraper" v-if='showCardForm'>
      <cardForm :title="'添加链接'" :itemList="['链接描述','链接地址']" @closeCardForm='closeCardForm'></cardForm>
    </div>
  </div>
</template>

<script>
import cardForm from '../card/card-form'
export default {
  components: {cardForm},
  data(){
    return{
      showEmoji: false,
      jujiao: false,
      emojiTextList: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'],
      emojiList: [],
      commentText:'',
      showCardForm: false
    }
  },
  methods:{
    clickEmoji(item){
      this.commentText += ` :${item}:`
    },
    clickToShowDialog(flag){
      if(flag === 1){
        this.showCardForm = true
      }
    },
    closeCardForm(){
      this.showCardForm = false
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
    padding: 10px 0px;
    color: #626262;
    cursor: pointer;
    i{
      font-size: 22px;
      padding-left: 10px;
    }
  }
  .emotion-wraper{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: scroll;
    .emotion{
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      padding: 10px;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  /**滚动条样式**/
  .emotion-wraper::-webkit-scrollbar{
    width: 8px;
    border-radius: 10px;
  }
  .emotion-wraper::-webkit-scrollbar-thumb{
    background: rgba(71, 70, 70,0.2);
    border-radius: 10px;
  }
  .emotion-wraper::-webkit-scrollbar-track{
    background: rgba(71, 70, 70,0.1);
    border-radius: 10px;
  }
  }
</style>