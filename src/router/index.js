import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Homepage from '@/components/homepage/homepage'
import About from '@/components/others/about'
import LogAdmin from '@/components/others/logAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
			redirect: '/about',
      children: [
      	{
      		path: '/home',
      		component: Homepage
      	},
      	{
      		path: '/about',
      		component: About
      	},
      	{
      		path: '/logAdmin',
      		component: LogAdmin
      	}
      ]
    }
  ]
})
