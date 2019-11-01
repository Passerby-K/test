import Vue from 'vue';
import Operation from './operation'

// 过滤器统一处理加载
Object.keys(Operation).forEach(key => {
    Vue.filter(key, Operation[key])
});