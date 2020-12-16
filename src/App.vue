<template>
  <div id="app">
    <nav-bar />
    <keep-alive>
      <router-view class="bcg"></router-view>
    </keep-alive>
  </div>
</template>

<script>

import NavBar from "components/common/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  }
};
</script>

<style>
  @import './assets/css/normal.css';
  body {
    background: #f8f8f9;
  }

  .bcg {
    background: #f8f8f9;
  }
</style>
