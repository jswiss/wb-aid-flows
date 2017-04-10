import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Home from '@/components/Home';
import Tables from '@/components/tables/Tables';
import Vuetable from '@/components/tables/TestTable';
import TestTable2 from '@/components/tables/TestTable2';
import TestTable3 from '@/components/tables/TestTable3';
import TestTable4 from '@/components/tables/TestTable4';
import Dashboard from '@/components/charts/Dashboard';
import Chart1 from '@/components/charts/Chart1';
import Chart2 from '@/components/charts/Chart2';
import Chart3 from '@/components/charts/Chart3';
import Chart4 from '@/components/charts/Chart4';
import Chart5 from '@/components/charts/Chart5';
import Chart6 from '@/components/charts/Chart6';

Vue.use(Router);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    children: [
      {
        path: 'test-table',
        name: 'Vuetable',
        component: Vuetable,
      }, {
        path: 'test-table2',
        name: 'TestTable2',
        component: TestTable2,
      }, {
        path: 'test-table3',
        name: 'TestTable3',
        component: TestTable3,
      }, {
        path: 'test-table4',
        name: 'TestTable4',
        component: TestTable4,
      },
    ],
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'chart-1',
        name: 'Chart1',
        component: Chart1,
      }, {
        path: 'chart-2',
        name: 'Chart2',
        component: Chart2,
      }, {
        path: 'chart-3',
        name: 'Chart3',
        component: Chart3,
      }, {
        path: 'chart-4',
        name: 'Chart4',
        component: Chart4,
      }, {
        path: 'chart-5',
        name: 'Chart5',
        component: Chart5,
      }, {
        path: 'chart-6',
        name: 'Chart6',
        component: Chart6,
      },
    ],
  },
];

export default new Router({ mode: 'history', routes, linkActiveClass: 'is-active' });
