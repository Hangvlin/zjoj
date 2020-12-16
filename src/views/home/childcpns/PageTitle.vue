<template>
  <div class="title">
    <h1>
      {{title}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  data(){
    return {
      title:"欢迎来到紫金在线测评系统！"
    }
  }
}
</script>

<style scoped>
    .title h1 {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 3rem;
    text-align: center;
    text-shadow: 12px 8px 9px rgba(0,0,0,.5);
  }
</style>