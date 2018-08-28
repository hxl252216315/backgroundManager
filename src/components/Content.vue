<template>
  <div class="content-box">
    <v-menus></v-menus>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Menus from "@/components/Menus"
  export default {
    name: "v-content",
    components:{
      "v-menus":Menus
    }
  }
</script>

<style scoped>
  .content{
    padding-top:50px;
    padding-left:230px;
    background-color: #ecf0f5;
    min-height: 100%;
    height: 100%;
  }
  .content-box{
    height: 100%;
    min-height: 100%;
  }
</style>
