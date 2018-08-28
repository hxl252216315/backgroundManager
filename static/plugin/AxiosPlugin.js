require('es6-promise').polyfill()
import axios from 'axios'
import router from '../../src/router'
import QS from 'qs'
import Vue from 'vue'
import Cookies from 'js-cookie'

export const instance  = axios.create({
  "baseURL":'http://192.168.2.91:8181/xcxapi',
  "timeout":'10000'
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.interceptors.request.use(config => {
  let path = router.history.current.path;
  if(path!="/login"&&path!="/login/getKey"){
    config.headers.Authorization = Cookies.get("jwt");
  }

  if(config.method=='post'){
    config.data=QS.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error)
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  console.log(JSON.stringify(error));
  if(error.code == "ECONNABORTED"){
    new Vue().$message("请求超时");
  }else if(error.message=='Network Error'){
    new Vue().$message("服务器链接网络异常");
  }
  if(error.response&&error.response.status==401&&router.history.current.path!="/login"){
    if(Cookies.get("jwt")){
      Cookies.remove("jwt");
    }
    router.push("/login");
    return;
  }
  return Promise.reject(error)
});
export default {

  install(Vue){
    Object.defineProperty(Vue.prototype,'$http',{value:instance})
  }
}
