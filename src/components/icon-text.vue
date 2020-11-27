<template>
  <div class="icon-text">
    <i class="iconfont" :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:['icon']
}
</script>

<style lang='scss' scoped>
  .icon-text{
    display: inline-block;
    .iconfont{
      padding-right: 5px;
    }
    color: rgb(158, 158, 158);
  }
</style>