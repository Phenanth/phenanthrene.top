import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Index from '@/components/index'
import Posts from '@/components/homepage/posts'
import Post from '@/components/homepage/post'
import Repository from '@/components/repository/repository'
import About from '@/components/others/about'
import LogAdmin from '@/components/others/logAdmin'

import LibraryIndex from '@/components/repository/librarySystem/index'
import LibraryHome from '@/components/repository/librarySystem/home'
import LibraryLogin from '@/components/repository/librarySystem/login'
import LibraryModule from '@/components/repository/librarySystem/module'
import LibraryTips from '@/components/repository/librarySystem/book/tips'
import LibraryEnsure from '@/components/repository/librarySystem/book/ensure'
import LibrarySuccess from '@/components/repository/librarySystem/book/success'
import LibrarySearch from '@/components/repository/librarySystem/search/search'
import LibraryDetail from '@/components/repository/librarySystem/search/detail'
import LibraryUserinfo from '@/components/repository/librarySystem/userinfo'

import GAIndex from '@/components/repository/GA-Login/index'
import GAHome from '@/components/repository/GA-Login/home'
import GALogin from '@/components/repository/GA-Login/login'
import GAUserinfo from '@/components/repository/GA-Login/userinfo'
import GAVerifyFirst from '@/components/repository/GA-Login/authenticate/verify_first'
import GAVerifyLogin from '@/components/repository/GA-Login/authenticate/verify_login'

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
        },
        
      ]
    },
    {
      path: '/library/',
      name: 'LibraryIndex',
      component: LibraryIndex,
      redirect: '/library/home',
      children: [
        {
          path: '/library/home',
          component: LibraryHome
        },
        {
          path: '/library/login',
          component: LibraryLogin,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenLibraryState)
            if (token) {
              next('/library/userinfo')
            } else {
              next()
            }
          }
        },
        {
          path: '/library/module/:module',
          component: LibraryModule,
          redirect: '/module/:module/tips',
          children: [
            {
              path: 'tips',
              component: LibraryTips
            },
            {
              path: 'ensure',
              component: LibraryEnsure
            },
            {
              path: 'success',
              component: LibrarySuccess
            }
          ]
        },
        {
          path: '/library/search',
          component: LibrarySearch
        },
        {
          path: '/library/search-detail',
          component: LibraryDetail
        },
        {
          path: '/library/userinfo',
          component: LibraryUserinfo,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenLibraryState)
            if (token) {
              next()
            } else {
              next('/library/login')
            }
          }
        }
      ]
    },
    {
      path: '/GA-Login/',
      name: 'GALogin',
      component: GAIndex,
      redirect: '/GA-Login/home',
      children: [
        {
          path: '/GA-Login/home',
          component: GAHome
        },
        {
          path: '/GA-Login/login',
          component: GALogin,
          beforeEnter: (to, from, next) => {
            // 路由守护：判断用户是否已经登录
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (token) {
              if (needAuth) {
                next()
              } else {
                next('/GA-Login/userinfo')
              }
            } else {
              next()
            }
          }
        },
        {
          path: '/GA-Login/userinfo',
          component: GAUserinfo,
          beforeEnter: (to, from, next) => {
            // 路由守护：判断用户是否登录并且通过双因子认证
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (token && !needAuth) {
              next()
            } else {
              if (needAuth) {
                next('/GA-Login/verify-login')
              } else {
                next('/GA-Login/login')
              }
            }
          }
        },
        {
          path: '/GA-Login/verify-first',
          component: GAVerifyFirst,
          beforeEnter: (to, from, next) => {
            // 路由守护：判断用户是否已经设置双因子认证
            let verify = JSON.parse(store.getters.showTokenState).verify
            if (verify) {
              next('/GA-Login/userinfo')
            } else {
              next()
            }
          }
        },
        {
          path: '/GA-Login/verify-login',
          component: GAVerifyLogin,
          beforeEnter: (to, from, next) => {
            // 路由守护：判断用户是否已经登陆，登陆后是否需要通过双因子认证
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (needAuth) {
              next()
            } else {
              if (token) {
                next('/GA-Login/userinfo')
              } else {
                next('/GA-Login/login')
              }
            }
          }
        }
      ]
    }
    
  ]
})
