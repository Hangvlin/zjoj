<template>
  <div class="cmp-detail">
    <main-pages />
  </div>
</template>

<script>
import MainPages from './childcpns/MainPages'

export default {
  name: "CmpDetail",
  components: {
    MainPages
  }
}
</script>

<style scoped>
  .cmp-detail {
    overflow: hidden;
  }
</style>