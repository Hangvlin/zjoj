<template>
  <div class="register">
    <register-form class="form" />
  </div>
</template>

<script>
import RegisterForm from './childcpns/RegisterForm';

export default { 
  name: "Register",
  components: {
      RegisterForm,
  },
}
</script>

<style scoped>
  .register {
    background: #f8f8f9;
    /* background: url(~assets/img/back.png) no-repeat 0 0 / 100% ; */
    height: 100%;
    overflow: hidden;
  }
</style>