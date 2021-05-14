import Vue from 'vue';
import Router from 'vue-router';
// import test from './views/index.vue';
import Login from './views/login'
import Main from './views/main'

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        redirect: '/main'
      },
      {
        path:'/login',
        component: Login
      },
     
      {
        path:'/main',
        component: Main,
        children:[
          {
            path:'',
            component:() => import('./views/main/home.vue')
          },
          {
            path:'/message',
            component:() => import('./views/message/index.vue')
          },
        ]
      }
    ]
})