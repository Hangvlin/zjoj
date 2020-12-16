<template>
  <div class="info-area">
    <h1 class="title">
      {{title}}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "InfoArea",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["title"])
  }
}
</script>

<style scoped>

</style>