<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="filter-bar control is-grouped">
            <div class="field">
              <p class="control">
                <input 
                  class="input is-success"
                  type="text"
                  v-model="searchQuery"
                  placeholder="Search by any field"
                  value="search"
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-primary exportCSV" 
        v-on:click="exportCSV"
        >
        <span class="icon">
          <i class="fa fa-table"></i>
        </span>
        <span>Export Table</span>
        </a>
      </div>
    </nav>
    <div class="scrollable">
      <data-table class="table is-bordered is-striped is-narrow"
        :data="projects"
        :columns-to-display="columnsToDisplay"
        :display-names="displayNames"
        :filter-key="searchQuery"
        :child-hideable="true"
        :child-init-hide="true"
        :columns-to-not-display="true"
      >
        <template slot="Project title" scope="props">
          <a v-bind:href="`http://somaliaaidflows.so/projects/${props.entry['Project title']}`"><p class="url">{{ props.entry['Project title'] }}</p></a>
        </template>
        <template slot="Start Date" scope="props">
          <p>{{ props.entry['Start Date'] || 'n/a' }}</p>
        </template>
        <template slot="End Date " scope="props">
          <p>{{ props.entry['End Date'] || 'n/a' }}</p>
        </template>
        <template slot="Sum 2015-17" scope="props">
          <p>${{ props.entry['Sum 2015-17']  | currency }}</p>
        </template>
        <template slot="2015 Disbursements (USD)" scope="props">
          <p>{{ props.entry['2015 Disbursements (USD)']  | currency }}</p>
        </template>
        <template slot="2016 Disbursements (USD)" scope="props">
          <p>{{ props.entry['2016 Disbursements (USD)']  | currency }}</p>
        </template>
        <template slot="2017 Disbursements (USD)" scope="props">
          <p>{{ props.entry['2017 Disbursements (USD)']  | currency }}</p>
        </template>
        <template slot="child" scope="props">
          <b>Project Description: </b>{{ props.entry['Project objectives / purpose'] || 'n/a' }}
          <br>
          <br>
          <b>Funders: </b>{{ props.entry['Funders'] || 'n/a' }}
          <br>
          <br>
          <b>Implementers: </b>{{ props.entry['Implementers'] || 'n/a' }}
        </template>
      </data-table>
    </div>
  </div>
</template>

<script src="https://cdn.rawgit.com/mikemenaker/vue-data-table/1.0.1/src/v-data-table.min.js"></script>

<script>
import Vue from 'vue';
import jsonexport from 'jsonexport';
import DataTable from './v-data-table.vue';
import store from '../../vuex/store';

const projects = store.state.projectTable;

export default {
  name: 'ProjectTable',
  components: {
    DataTable,
  },
  data() {
    return {
      projects,
      gridColumns: ['Project title', 'Start Date', 'End Date', 'NDP Pillar', 'Primary Sector', 'Funders', '2015 Disbursements (USD)', '2016 Disbursements (USD)', '2017 Disbursements (USD)', 'Sum 2015-17', 'Project objectives / purpose', 'Implementers'],
      columnsToDisplay: ['Project title', 'Start Date', 'End Date', 'NDP Pillar', 'Primary Sector', '2015 Disbursements (USD)', '2016 Disbursements (USD)', '2017 Disbursements (USD)', 'Sum 2015-17'],
      searchQuery: '',
      displayNames: {
        'Project title': 'Project Title',
        'Sum 2015-17': 'Project Value - (2015 - 17)',
        '2015 Disbursements (USD)': '2015',
        '2016 Disbursements (USD)': '2016',
        '2017 Disbursements (USD)': '2017',
      },
    };
  },
  methods: {
    exportCSV() {
      jsonexport(projects, (err, csv) => {
        if (err) return console.log(err);
        (function downloadCSV(args) {
          if (csv === null) return;
          const filename = 'Somalia_Aid_Flows_Project_Data.csv';
          if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
          }
          const data = encodeURI(csv);
          let link = document.createElement('a');
          link.setAttribute('href', data);
          link.setAttribute('download', filename);
          link.click();
        })();
      });
    },
  },
  beforeDestroy() {

  },
};
</script>

<style scoped>
  .scrollable {
    position: relative;
    overflow: auto;
  }
  .level {
    margin-top: 2%;
    margin-bottom: 0%;
  }
  input {
    width: 300px;
  }
</style>
