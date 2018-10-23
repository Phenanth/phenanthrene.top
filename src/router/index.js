import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Posts from '@/components/homepage/posts'
import Post from '@/components/homepage/post'
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
      		path: '/posts',
      		component: Posts
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
      	},
        {
          path: '/post',
          name: 'Post',
          component: Post,
          redirect: '/post-item/:note',
          children: [
            {
              path: '/post-item/:note'
            }
          ]
        }
      ]
    }
  ]
})
