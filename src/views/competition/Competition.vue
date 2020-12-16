<template>
  <div class="competition">
    <div class="container">
      <com-form />
    </div>
  </div>
</template>

<script>
import ComForm from "./childcpns/ComForm"

export default {
  name: "Competition",
  components: {
    ComForm
  }
}
</script>

<style scoped>
  .competition {
    padding-top: 80px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f8f8f9;
  }

  .container {
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 85px;
  }
</style>