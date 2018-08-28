<template>
  <div class="login-container">
    <div class="login-title">
      后台管理系统
    </div>
    <div class="login-content">
      <el-form @submit.native.prevent :model="loginForm" :rules="rules" ref="loginForm" >
        <el-form-item prop="loginName">
          <el-input v-model="loginForm.loginName"  placeholder="请输入账号" ref="loginName"
                    :clearable="true" prefix-icon="fa fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" ref="password" @keyup.enter.native="loginHandler"
                    :clearable="true" prefix-icon="fa fa-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  type="success" class="login-submit" :loading="loadingStatus" @click="loginHandler">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
            loginForm:{
              loginName:"",
              password:""
            },
            loadingStatus:false,
            loginError:false,
            rules:{
              loginName:[
                { validator:(rule, value, callback)=>{
                    if(this.loginError){
                      this.loginError=false;
                      callback(new Error());
                    }else{
                      callback();
                    }
                  }, message: '用户名或密码不正确', trigger: 'change' },
                { required: true, message: '请输入账号', trigger: 'change' },
                { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'change' }
              ],
              password:[
                { validator: (rule, value, callback)=>{
                    this.$refs.loginForm.validateField('loginName');
                    callback();
                  }, trigger: 'change' },
                { required: true, message: '请输入密码', trigger: 'change' },
                { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'change' }
              ],
            }
          }
        },
        methods:{
          loginHandler:function(){
            this.loadingStatus = true;
            this.$refs.loginForm.validate(valid=>{
              if(!valid) {
                this.loadingStatus = false;
                return;
              }
              this.$http.get('/login/getKey').then(response=>{
                let res = this.$rsa.encrypt(response.data,this.loginForm.password);
                return this.$http.get('/login',{
                  params:{
                    loginName:this.loginForm.loginName,
                    password:res
                  }
                });
              }).then(response=>{
                this.$cookie.set('jwt',response.data,{expires:1});
                this.$router.push("/");
                this.loadingStatus = false;
              }).catch(error=>{
                this.loadingStatus = false;
                if(error.response&&error.response.status == 401){
                  this.loginError=true;
                  this.$refs.loginForm.validateField('loginName');
                }
              });
            });
          }
        }
    }
</script>

<style scoped>
  .login-container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #324157;
    flex-direction:column;
  }
  .login-container>.login-content{
    box-sizing: border-box;
    max-width: 400px;
    width: 90%;
    background-color: rgba(250,255,255,1);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);
    padding:50px 50px 30px 50px;
  }
  .login-submit{
    width: 100%;
    word-spacing:50px;
  }
  .login-title{
    color:#FFFFFF;
    height: 70px;
    font-size: 30px;
  }
</style>
