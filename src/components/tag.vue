<template>
  <div class="tag-wraper">
    <div class="tag" :style="{background: color}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['color']
}
</script>

<style lang='scss' scoped>
.tag-wraper{
  display: inline-block;
}
  .tag{
    color: white;
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 10px;
    margin: 0px 5px 5px 5px;
  }
</style>