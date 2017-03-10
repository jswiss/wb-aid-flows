import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Home from '@/components/Home';
import Tables from '@/components/Tables';
import Table2 from '@/components/Table2';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);
Vue.use(Vuex);

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
    subRoutes: {
      '/table2': {
        name: 'table2',
        component: Table2,
      },
    },
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

