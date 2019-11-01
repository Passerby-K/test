import Vue from 'vue'
import Router from 'vue-router'

const index = () =>
    import ('components/content/index')
const table = () =>
    import ('components/table_1')
const one = () =>
    import ('components/one')

const routes = [{
        path: '/',
        name: '首页',
        component: index,
        children: [{
            path: './one',
            component: one
        }]
    },
    {
        path: '/table',
        name: '',
        component: table

    },
    {
        path: '/one',
        name: '',
        component: one

    }
]

Vue.use(Router)

export default new Router({
    linkExactActiveClass: '',
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
    routes
})