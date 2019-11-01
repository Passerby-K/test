import axios from 'axios'
import Qs from 'qs'
import router from '../router'
import web_config from '../../static/web_config'

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(config => {
    // if(window.localStorage.getItem('clientAuth') != null && window.localStorage.getItem('clientAuth') != '{}'){
    //     let tokenData = JSON.parse(window.localStorage.getItem('clientAuth'))
    //     config.headers.Authorization = tokenData.token_type + ' ' + tokenData.access_token;
    // }
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.request.use((req) => {
    if (req.method === 'post') {
        req.data = Qs.stringify(req.data);
    }
    return req;
}, (error) => Promise.reject(error));

export default class http {
    constructor(store, api) {
        let base_api = web_config.api_url;
        this.baseApi = base_api
        this.api = api; // 全部接口
        if (store) {
            this.store = store;
            this.userAuth();
        }
    }

    get(url, data, isNeedBaseUrl) {
        data.mid = 'client';
        let options = {
            url: !isNeedBaseUrl ? this.baseApi + url : url,
            data: data || {},
            method: 'get',
        }
        this.request(options);
    }

    post(url, data, isNeedBaseUrl) {
        data.mid = 'client';
        let options = {
            url: !isNeedBaseUrl ? this.baseApi + url : url,
            data: data || {},
            method: 'post',
        }
        return this.request(options);
    }

    request(options) {
        let promise = new Promise((resolve, reject) => {
            axios(options)
                .then(function (result) {
                    return result.data;
                })
                .then((result) => {
                    if (result.message === 'Unauthenticated.') {
                        router.replace({
                            path: '/login',
                            query: {redirect: router.currentRoute.fullPath}
                        })
                        return;
                    }
                    resolve(result);
                }).catch((error) => {
                /* eslint-disable */
                console.log(error);
            })
        })
        return promise;
    }

    userAuth() { // 会员登录认证
        axios.interceptors.response.use(response => {
            // for(let item in this.api){
            //     if(response.status == 200 && response.data.status == 0){
            //         if(item.meta && item.meta.auth){
            //             //清除登录信息
            //             this.store.commit('set_user_auth_login', 0);
            //             this.store.commit('set_user_auth_info', {});
            //             router.replace({
            //                 path: '/login',
            //                 query: {redirect: router.currentRoute.fullPath}
            //             })
            //             return;
            //         }
            //     }
            // }
            return response;
        });
    }
}