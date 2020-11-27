<template>
  <div class="card-simple">
    <header>{{title}}</header>
    <div class="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang='scss' scoped>
.card-simple{
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba($color: #000000, $alpha: 0.05);
  header{
    padding: 15px 20px;
    color: #888;
    font-size: 16px;
  }
  .content{
    padding: 0px 20px 20px 20px;
    color: #666;
    font-size: 14px;
    p{
      padding: 7px;
    }
    p:hover{
      color: rgb(163, 163, 163);
    }
  }
}
</style>