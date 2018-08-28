import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/test/test1'
import Test2 from '@/components/test/test2'
import Test3 from '@/components/test/test3'
import Test4 from '@/components/test/test4'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'


Vue.use(Router)

export default new Router({
  base:'/douyu',
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path: '/',
          redirect: '/hello'
        },{
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/test1',
          name: 'Test1',
          component: Test1
        },
        {
          path: '/test2',
          name: 'Test2',
          component: Test2
        },
        {
          path: '/test3',
          name: 'Test3',
          component: Test3
        },{
          path: '/test4',
          name: 'Test4',
          component: Test4
        },
      ]
    }
  ]
})
