<template>
  <div class="v-header">
    <div class="v-header-box">
      <el-row>
        <el-col :span="12">
          <div class="v-header-left">
            <span @click="collapseChage" class="title-menu-icon"><i class="fa fa-bars"></i></span>
            <span>后台管理系统</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="v-header-right">
            <div class="v-author-img">
              <img :src="userImg" width="40px" height="40px">
            </div>
            <el-dropdown trigger="click" class="header-user" @command="commandHandler">
              <span class="el-dropdown-link">
                {{userName}}<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="loginOut">退出</el-dropdown-item>
                <el-dropdown-item command="my">我的</el-dropdown-item>
                <el-dropdown-item command="yours">你的</el-dropdown-item>
              </el-dropdown-menu>

            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import bus from "./bus"
    export default {
        name: "Header",
        data(){
          return {
            imgSrc:"/img/abc.jpg",
            collapse:false
          }
        },
      methods:{
        commandHandler:function (command) {
          if(command == 'loginOut'){
            this.$cookie.remove("jwt");
            this.$store.commit("loginOut");
            this.$router.push("/login");
          }
        },
        collapseChage:function () {
          this.collapse = !this.collapse;
          bus.$emit('collapse',this.collapse);
        }
      },
      computed:{
          userName:function(){
            return this.$store.state.userInfo.userName;
          },
          userImg:function () {
            return this.$global.apiBathUrl+this.imgSrc;
          }
      }
    }
</script>

<style scoped>
.v-header{
  color:#FFFFFF;
  width: 100%;
  height: 70px;
  background-color: #242f42;
  display: flex;
  align-items: center;
}
  .v-header-box{
    width: 100%;
  }
  .v-header-left{
    font-size: 24px;
    height: 70px;
    line-height: 70px;
  }
  .v-header-right{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;
  }
.v-header-right div{
  margin-right: 10px;
}
  .v-author-img{
    background-color: red;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    overflow: hidden;
  }
  .header-user{
    color:#FFFFFF;
    border: none;
    cursor: pointer;
    font-size:14px;
  }
  .header-user>span>.el-icon-arrow-down{
    margin-left:10px;
  }
  .title-menu-icon{
    width: 64px;
    text-align: center;
    display: inline-block;
    cursor:pointer;
  }

</style>
