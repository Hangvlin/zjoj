<template>
  <div class="footer-info">
    <p class="footer">
      {{tip1}}
      <br />
      {{tip2}}
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterInfo",
  data() {
    return {
      tip1:"在线评测系统",
      tip2:"软工一班Python大作业第十一组@2020"
    }
  }
}
</script>

<style scoped>
  .footer {
    margin-top: 8%;
    text-align: center;
  }
</style>