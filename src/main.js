// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Animate from 'animate.css' 
Vue.use(Animate)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import store from './store/index' 
import '@/less/index.less'
import '@/util/rem.js'
import axios from 'axios'
import { Notification } from 'element-ui';
axios.defaults.baseURL = 'https://127.0.0.1:12345/'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
},function (error){  
  console.log("信息:+",error)
  Notification.error({
    title: 'Network',
    message: "请求错误 ==> "+err,
    showClose: false,
    duration:3000,
  });
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  Notification.error(
  {
    title: 'Network',
    message: "响应错误 ==> "+err,
    showClose: false,
    duration:3000,
  });
  return Promise.reject(err);
});

Vue.prototype.$axios= axios
router.beforeEach((to, from, next) => {
  next();
});
router.afterEach(route => { 
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
