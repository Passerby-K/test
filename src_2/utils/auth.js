import router from '../router'
import Http from './http'
import Api from './api'

/**
 * 登录状态管理类
 */
export default class auth {
    constructor(store) {
        this.store = store;
        this.get();
        this.routerBeforeEach();
    }

    get() {
        let http = new Http();
        // let sta = localStorage.islogin;
        // if (sta === 1) this.store.commit('set_user_auth_login', 1);
        http.post(Api.auth.is_login, {'time': new Date().getTime()}).then(result => {
            if (result.status === true && result.code === 200) {
                // this.store.commit('set_user_auth_login', 1);
            } else {
                // this.store.commit('set_user_auth_login', 0);
                // this.store.commit('set_user_auth_info', {});
            }
        }).catch(error => console.log(error));
    }

    routerBeforeEach() {
        let store = this.store;
        router.beforeEach((to, from, next) => {
            if (to.meta.requiresAuth && store.state.user.userAuth.login === 0) {
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            } else {
                next();
            }
        });
    }
}