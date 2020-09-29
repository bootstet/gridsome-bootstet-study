import Vue from 'vue'
import Router from 'vue-router'

import RecentNews from '../pages/views/RecentNews'
import SocialCircle from '../pages/views/SocialCircle'
import OpenSource from '../pages/views/OpenSourece'
import BokeList from '../pages/views/BokeList'



Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/views/recent-news',
    // redirect: '/user/new/main',
    component: RecentNews,
    meta: {
      type: "user",
      icon: 'el-icon-star-off',
      title: '最新动态'
    },
    children: [
        {
            path: 'main',
            component: RecentNews,
            meta: { title: '最新动态' }
        }
    ]
  },
  {
    path: '/views/social-circle',
    // redirect: '/user/social/main',
    component: SocialCircle,
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    },
    children: [
      {
        path: 'main',
        component: SocialCircle,
        meta: { title: '社交圈' }
      }
    ]
  },
  {
    path: '/views/open-sourece',
    // redirect: '/user/social/main',
    component: OpenSource,
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '开源项目'
    },
    children: [
      {
        path: 'main',
        component: OpenSource,
        meta: { title: '开源项目' }
      }
    ]
  },
  {
    path: '/views/boke-list',
    // redirect: '/user/social/main',
    component: BokeList,
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '博客列表'
    },
    children: [
      {
        path: 'main',
        component: BokeList,
        meta: { title: '博客列表' }
      }
    ]
  }
]




const router = new Router({
    routes: constantRouterMap,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.scrollTop) {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title)
  next()
})
