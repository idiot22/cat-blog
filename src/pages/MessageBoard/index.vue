<template>
  <div class="message-board-wraper">
    <MessageInput></MessageInput>
  </div>
</template>

<script>
import MessageInput from '../../components/MessageInput/messageInput'
export default {
  components: {MessageInput}
}
</script>

<style lang='scss' scoped>
.message-board-wraper{
  width: 800px;
}
</style>