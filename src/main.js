import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '@/request';

console.log(1111111111111);

console.log('我是一代GG Bond');

console.log('我是二代GG Bond');


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = http; 


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
