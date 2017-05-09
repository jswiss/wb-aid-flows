import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/about/About';
import Tables from '@/components/tables/Tables';
import ProjectTable from '@/components/tables/ProjectTable';
import DonorTable from '@/components/tables/DonorTable';
import LocationsTable from '@/components/tables/LocationsTable';
import FundsTable from '@/components/tables/FundsTable';
import Charts from '@/components/charts/Charts';
import OdaChart from '@/components/charts/OdaChart';
import AnnualDisbursementsChart from '@/components/charts/AnnualDisbursementsChart';
import AidLocationChart from '@/components/charts/AidLocationChart';
import Chart4 from '@/components/charts/Chart4';
import Chart5 from '@/components/charts/Chart5';
import Chart6 from '@/components/charts/Chart6';
import Project from '@/components/projects/Project';

Vue.use(Router);

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
        path: 'projects',
        name: 'ProjectTable',
        component: ProjectTable,
      }, {
        path: 'donors',
        name: 'DonorTable',
        component: DonorTable,
      }, {
        path: 'locations',
        name: 'LocationsTable',
        component: LocationsTable,
      }, {
        path: 'funds',
        name: 'FundsTable',
        component: FundsTable,
      },
    ],
  }, {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    children: [
      {
        path: 'oda-chart',
        name: 'OdaChart',
        component: OdaChart,
      }, {
        path: 'annual-disbursements-by-category',
        name: 'AnnualDisbursementsChart',
        component: AnnualDisbursementsChart,
      }, {
        path: 'aid-location',
        name: 'AidLocationChart',
        component: AidLocationChart,
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
  {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/projects/:projectName',
    name: 'project',
    component: Project,
  },
];

export default new Router({ mode: 'history', routes, linkActiveClass: 'is-active' });
