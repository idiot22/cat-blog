<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import './assets/style/reset.scss';
body{
  background-color: #f1f2f9;
  font-size: 12px
}
#app {
  font-family: PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,"å¾®è½¯é›…é»‘",STHeitiSC-Light,simsun,"å®‹ä½“",WenQuanYi Zen Hei,WenQuanYi Micro Hei,"sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
}
</style>
