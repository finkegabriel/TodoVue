import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Todo from './components/todo';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Todo }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
