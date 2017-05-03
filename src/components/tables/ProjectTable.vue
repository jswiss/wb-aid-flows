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
          <a v-bind:href="`http://localhost:8080/projects/${props.entry['Project title']}`"><p class="url">{{ props.entry['Project title'] }}</p></a>
        </template>
        <template slot="Start Date" scope="props">
          <p>{{ props.entry['Start Date'] || 'n/a' }}</p>
        </template>
        <template slot="End Date " scope="props">
          <p>{{ props.entry['End Date '] || 'n/a' }}</p>
        </template>
        <template slot="Project Value (USD)" scope="props">
          <p>${{ props.entry['Project Value (USD)'] | currency }}</p>
        </template>
        <template slot="child" scope="props">
          <b>Project Description: </b>{{ props.entry['Project objectives / purpose'] || 'n/a' }}
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
      gridColumns: ['Project title', 'Start Date', 'End Date ', 'NDP Pillar', 'Primary Sector', 'Funders', 'Project Value (USD)', 'Project objectives / purpose', 'Implementers'],
      columnsToDisplay: ['Project title', 'Start Date', 'End Date ', 'NDP Pillar', 'Primary Sector', 'Funders', 'Project Value (USD)'],
      searchQuery: '',
      displayNames: {
        'Project Value (USD)': 'Total Project Value',
      },
    };
  },
  methods: {
    allcap(value) {
      return value.toUpperCase();
    },
    formatNumber(value) {
      return accounting.formatNumber(value, 0);
    },
    formatDate(value, fmt = 'MMM, YYYY') {
      return (value == null) ? '' : moment(value, 'MMM, YYYY').format(fmt);
    },
    // eslint-disable-next-line
    onCellClicked(data, field, event) {
      // eslint-disable-next-line
      console.log('cellClicked: ', field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
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
