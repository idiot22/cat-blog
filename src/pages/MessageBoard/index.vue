<template>
  <div class="wraper">
    <div class="message-board-wraper">
      <MessageInput></MessageInput>
    </div>
  </div>
</template>

<script>
import MessageInput from '../../components/MessageInput/messageInput'
export default {
  components: {MessageInput}
}
</script>

<style lang='scss' scoped>
.wraper{
    display: flex;
    justify-content: center;
  .message-board-wraper{
    width: 800px;
  }
}
</style>