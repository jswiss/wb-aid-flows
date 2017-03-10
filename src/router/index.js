import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Home from '@/components/Home';
import Tables from '@/components/tables/Tables';
import TestTable from '@/components/tables/TestTable';
import TestTable2 from '@/components/tables/TestTable2';
import TestTable3 from '@/components/tables/TestTable3';
import TestTable4 from '@/components/tables/TestTable4';
import Dashboard from '@/components/charts/Dashboard';

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

