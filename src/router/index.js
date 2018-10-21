import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Homepage from '@/components/homepage/homepage'
import Repository from '@/components/repository/repository'
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
          path: '/repository',
          component: Repository
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
