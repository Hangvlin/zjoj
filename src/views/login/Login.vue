<template>
  <div class="login">
    <main-sector />
  </div>
</template>

<script>
import MainSector from './childcpn/MainSector';

export default { 
  name: "Login",
  components: {
      MainSector,
  },
}
</script>

<style scoped>
  .login {
    background: #f8f8f9;
    /* background: url(~assets/img/back.png) no-repeat 0 0 / 100% ; */
    height: 100%;
    overflow: hidden;
  }
</style>