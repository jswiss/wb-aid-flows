// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import accounting from 'accounting';
import App from './App';
import store from './vuex/store';
import router from './router';
import navbar from './components/Navbar';


Vue.filter('currency', val => accounting.formatNumber(val));

const projectData = require('./assets/project-master-csv.csv');
const donorData = require('./assets/donor-envelopes-csv.csv');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
      <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  store,
  data() {
    return {
      projectData,
      donorData,
    };
  },
  components: {
    navbar,
    App,
  },
}).$mount('#app');

