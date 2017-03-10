import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import Home from '@/components/Home';
import Tables from '@/components/Tables';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);
Vue.use(Vuex);
Vue.use(axios);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
});

