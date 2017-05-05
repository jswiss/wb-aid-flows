import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import TreeMap2017 from '@/components/treemap/TreeMap2017';
import TreeMap2016 from '@/components/treemap/TreeMap2016';
import TreeMap2015 from '@/components/treemap/TreeMap2015';
import About from '@/components/about/About';
import Tables from '@/components/tables/Tables';
import ProjectTable from '@/components/tables/ProjectTable';
import DonorTable from '@/components/tables/DonorTable';
import Charts from '@/components/charts/Charts';
import OdaChart from '@/components/charts/OdaChart';
import Chart2 from '@/components/charts/Chart2';
import Chart3 from '@/components/charts/Chart3';
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
    children: [
      {
        path: 'treemap-2017',
        name: 'TreeMap2017',
        component: TreeMap2017,
      }, {
        path: 'treemap-2016',
        name: 'TreeMap2016',
        component: TreeMap2016,
      }, {
        path: 'treemap-2015',
        name: 'TreeMap2015',
        component: TreeMap2015,
      },
    ],
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
