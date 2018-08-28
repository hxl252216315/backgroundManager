// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import	ElementUI	from	'element-ui'
import	'element-ui/lib/theme-chalk/index.css'
import AxiosPlugin from '../static/plugin/AxiosPlugin'
import RSA from '../static/plugin/rsa/SecretUtil'
import global from '../static/plugin/global'
import cookie from '../static/plugin/cookie'
import Cookies from 'js-cookie'
import {Base64}  from 'js-base64'
import Vuex from 'vuex'



Vue.config.productionTip = false
Vue.use(ElementUI,{size:'small'})
Vue.use(AxiosPlugin)
Vue.use(RSA)
Vue.use(cookie)
Vue.use(Vuex)
Vue.use(global)


const store = new Vuex.Store({
  state: {
    userInfo:undefined,
    menus:undefined
  },
  mutations: {
    updateUserInfo (state,userInfo) {
      state.userInfo = userInfo;
    },
    insertMenus(state,payload){
      state.menus=payload;
    },
    loginOut(state){
      for(let prop in state){
        state[prop] = undefined;
      }
    }
  }
})

router.beforeEach((to, from, next)=>{
  let jwt = Cookies.get("jwt");
  let isAccess = false;
  if(jwt){
    let jwtJson = JSON.parse(Base64.decode(jwt.split(".")[1]));
    let exp = jwtJson.exp;
    if(exp&&exp*1000>=new Date().getTime()){
      if(!store.state.userInfo){
        store.commit("updateUserInfo",jwtJson);
      }
      isAccess = true;
    }
  }
  let name = to.name;

  if(name != "Login"){
    if(isAccess){
      next();
    }else{
      next("/login");
    }
  }else {
    if(isAccess){
      next("/");
    }else{
      next();
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


