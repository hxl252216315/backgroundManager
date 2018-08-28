<template>
    <header>
      <div class="left-container absolute-center">
        <span class="sys-title">XX管理系统</span>
      </div>
    </header>
</template>

<script>
    export default {
        name: "v-header"
    }
</script>

<style scoped>
header{
  background-color:#3c8dbc;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  z-index:1030;
}
header .left-container{
  width:230px;
  font-size:20px;
  height: 100%;
  color:#FFFFFF;
}
</style>
