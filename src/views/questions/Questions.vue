<template>
  <div class="questions">
    <main-table />
  </div>
</template>

<script>
import MainTable from './childcpns/MainTable';

export default {
  name: "Questions",
  components: {
    MainTable
  },
  activated () {
  }
}
</script>

<style scoped>
  .questions {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f8f8f9;
  }
</style>