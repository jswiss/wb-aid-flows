import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Home from '@/components/Home';
import Tables from '@/components/Tables';
import TestTable from '@/components/TestTable';
import TestTable2 from '@/components/TestTable2';
import TestTable3 from '@/components/TestTable3';
import TestTable4 from '@/components/TestTable4';
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
    children: [
      {
        path: 'test-table',
        name: 'TestTable',
        component: TestTable,
      },
      {
        path: 'test-table2',
        name: 'TestTable2',
        component: TestTable2,
      },
      {
        path: 'test-table3',
        name: 'TestTable3',
        component: TestTable3,
      },
      {
        path: 'test-table4',
        name: 'TestTable4',
        component: TestTable4,
      },
    ],
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

