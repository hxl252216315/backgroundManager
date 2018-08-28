<template>
  <div class="home-container">
    <v-header></v-header>
    <v-aside></v-aside>
    <div class="v-content" :class="{'content-collapse':collapse}">
      <transition name="move" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import VHeader from './comm/Header'
import VAside from './comm/Aside'
import bus from "./comm/bus"
    export default {
        name: "MainPage",
        data(){
          return {
            collapse:false
          }
        },
        components: {
          VHeader,
          VAside
        },
        created:function () {
          bus.$on("collapse",msg=>{
          this.collapse = msg;
        })
      }
    }
</script>

<style scoped>
.home-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
 /* .v-content{
    position: absolute;
    transition: left 0.6s;
    left:250px;
    right: 0;
    top: 70px;
    bottom: 0;
    background-color: yellow;
  }
.content-collapse{
  left: 64px;
}*/
.v-content {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  overflow-y: auto;
  transition: left .3s ease-in-out;
  background: #f0f0f0;
}

.content-collapse {
  left: 64px;
}

</style>
