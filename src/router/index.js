import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Tables from '@/components/Tables';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

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

