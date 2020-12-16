<template>
  <div class="home">
    <page-title />
    <home-container></home-container>
    <footer-info />
    <div ref="canvas" class="canvas" style="positon: absolute"></div>
  </div>
</template>

<script>
import CanvasNest from 'canvas-nest.js';

import PageTitle from './childcpns/PageTitle';
import FooterInfo from './childcpns/FooterInfo';
import HomeContainer from './childcpns/HomeContainer';

export default {
  name: "Home",
  components: {
    PageTitle,
    FooterInfo,
    HomeContainer
  },
  mounted() {
    const config = {
      color: '0, 0, 0',
      count: 120,
    }

    const cn = new CanvasNest(this.$refs.canvas, config);
  }

}
</script>

<style scoped>
  .home {
    background: linear-gradient(#f8f8f9,#fff);
    overflow: hidden;
  }

  .canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    pointer-events: none;
  }
</style>