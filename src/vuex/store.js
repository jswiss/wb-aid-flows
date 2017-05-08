import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const projectData = require('../assets/project-master-csv.csv');
const donorData = require('../assets/donor-envelopes-csv.csv');
const projectList = require('../assets/projects-list.csv');
const fundsData = require('../assets/funds-csv.csv');

const state = {
  projects: projectData,
  donors: donorData,
  projectTable: projectList,
  funds: fundsData,
};

export default new Vuex.Store({
  state,
});
