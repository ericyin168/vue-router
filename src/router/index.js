import Vue from 'vue'
import Router from 'vue-router'
import panpelChilds from './panpel/index'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'panpel',
        component: resolve => require(['view/panpel/'], resolve),
        children: [...panpelChilds],
        redirect: 'integral'
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['view/login/'], resolve)
    }
]

const router = new Router({
    mode: 'history',
    base: '/',
    routes
})

router.beforeEach((to, form, next) => {
    next()
})

export default router
