import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const projectData = require('../assets/project-master-csv.csv');
const donorData = require('../assets/donor-envelopes-csv.csv');

const state = {
  projects: projectData,
  donors: donorData,
};

export default new Vuex.Store({
  state,
});
