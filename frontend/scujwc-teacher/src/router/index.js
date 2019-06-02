import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Teacher from '@/components/Teacher'
import Detail from '@/components/CourseDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/Detail',
      name: 'detail',
      component: Detail
    }
  ]
})
