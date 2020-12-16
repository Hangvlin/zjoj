<template>
  <div class="state container">
    <state-table />
  </div>
</template>

<script>
import StateTable from "./childcpns/StateTable";

export default {
  name: "State",
  components: {
    StateTable
  }
}
</script>

<style scoped>
  .state {
    background:#f8f8f9;
    overflow: hidden;
  }
</style>