<template>
  <div class="message-input-wraper">
    <div class="textarea-wraper">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.message-input-wraper{
  .textarea-wraper{
    textarea{
       resize:vertical;
      &:hover{
        background-color: white;
        border: solid 1px rgba(5, 145, 231, 0.4);
        box-shadow: 0 0 5px 2px rgba(4, 120, 190, 0.1);
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
  }
}
</style>