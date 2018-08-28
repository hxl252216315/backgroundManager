<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import "../static/css/main.css";
  @import "../static/css/color-dark.css";
  html,body,#app{
    border:0;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>
