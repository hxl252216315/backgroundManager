<template>
    <div class="v-aside" v-loading="loading"
         element-loading-text="加载菜单"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.4)">
      <el-menu class="sidebar-el-menu" background-color="#324157" :collapse="collapse" :default-active="onRouter"
               text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
          <template v-for="item in items">
              <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i><span slot="title" class="v-aside-title">{{item.title}}</span>
              </el-menu-item>
          </template>

      </el-menu>

    </div>
</template>

<script>
  import bus from "./bus"

    export default {
        name: "Aside",
        data(){
          return {
            collapse:false,
            items:[],
            loading: true
          }
        },
      computed:{
        onRouter(){
          return this.$route.path.replace('/','');
        }
      },
        created:function () {
          bus.$on("collapse",msg=>{
            this.collapse = msg;
          });
          if(this.$store.state.menus){
            console.log("lanjiazai");
            this.items = this.$store.state.menus;
            this.loading = false;
          }else{
            this.$http.get('/menu/getMenus').then(response=>{
              this.$store.commit("insertMenus",response.data);
              this.items = this.$store.state.menus;
              this.loading = false;
            }).catch(error=>{
              this.loading = false;
            })
          }
        }
    }
</script>

<style scoped>
.v-aside{
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
}
.v-aside::-webkit-scrollbar{
  width: 0;
}
  .el-menu{
    height: 100%;
  }
.sidebar-el-menu:not(.el-menu--collapse){
  width: 250px;
}

  .v-aside-title{
    margin-left: 10px;
  }
</style>
