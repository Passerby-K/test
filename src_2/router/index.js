import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('components/common/index')
const home = () => import('components/home')

const routes = [{
	path: '/',
	name: '首页',
	component: index,
	children: [{
		path: '/home',
		component: home
	}]
}]

Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	},
	routes
})
