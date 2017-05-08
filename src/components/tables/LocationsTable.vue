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
          <a v-bind:href="`http://somaliaaidflows.so.s3-website-us-east-1.amazonaws.com/projects/${props.entry['Project title']}`"><p class="url">{{ props.entry['Project title'] }}</p></a>
        </template>
        <template slot="FGS - 2015" scope="props">
          <p>{{ props.entry['FGS - 2015'] | currency }}</p>
        </template>
        <template slot="FGS - 2016" scope="props">
          <p>{{ props.entry['FGS - 2016'] | currency }}</p>
        </template>
        <template slot="FGS - 2017" scope="props">
          <p>{{ props.entry['FGS - 2017'] | currency }}</p>
        </template>
        <template slot="Benadir - 2015" scope="props">
          <p>{{ props.entry['Benadir - 2015'] | currency }}</p>
        </template>
        <template slot="Benadir - 2016" scope="props">
          <p>{{ props.entry['Benadir - 2016'] | currency }}</p>
        </template>
        <template slot="Benadir - 2017" scope="props">
          <p>{{ props.entry['Benadir - 2017'] | currency }}</p>
        </template>
        <template slot="Galmudug - 2015" scope="props">
          <p>{{ props.entry['Galmudug - 2015'] | currency }}</p>
        </template>
        <template slot="Galmudug - 2016" scope="props">
          <p>{{ props.entry['Galmudug - 2016'] | currency }}</p>
        </template>
        <template slot="Galmudug - 2017" scope="props">
          <p>{{ props.entry['Galmudug - 2017'] | currency }}</p>
        </template>
        <template slot="Hiiraan & Middle Shabelle - 2015" scope="props">
          <p>{{ props.entry['Hiiraan & Middle Shabelle - 2015'] | currency }}</p>
        </template>
        <template slot="Hiiraan & Middle Shabelle - 2016" scope="props">
          <p>{{ props.entry['Hiiraan & Middle Shabelle - 2016'] | currency }}</p>
        </template>
        <template slot="Hiiraan & Middle Shabelle - 2017" scope="props">
          <p>{{ props.entry['Hiiraan & Middle Shabelle - 2017'] | currency }}</p>
        </template>
        <template slot="Jubaland - 2015" scope="props">
          <p>{{ props.entry['Jubaland - 2015'] | currency }}</p>
        </template>
        <template slot="Jubaland - 2016" scope="props">
          <p>{{ props.entry['Jubaland - 2016'] | currency }}</p>
        </template>
        <template slot="Jubaland - 2017" scope="props">
          <p>{{ props.entry['Jubaland - 2017'] | currency }}</p>
        </template>
        <template slot="Puntland - 2015" scope="props">
          <p>{{ props.entry['Puntland - 2015'] | currency }}</p>
        </template>
        <template slot="Puntland - 2016" scope="props">
          <p>{{ props.entry['Puntland - 2016'] | currency }}</p>
        </template>
        <template slot="Puntland - 2017" scope="props">
          <p>{{ props.entry['Puntland - 2017'] | currency }}</p>
        </template>
        <template slot="South West - 2015" scope="props">
          <p>{{ props.entry['South West - 2015'] | currency }}</p>
        </template>
        <template slot="South West - 2016" scope="props">
          <p>{{ props.entry['South West - 2016'] | currency }}</p>
        </template>
        <template slot="South West - 2017" scope="props">
          <p>{{ props.entry['South West - 2017'] | currency }}</p>
        </template>
        <template slot="Somaliland - 2015" scope="props">
          <p>{{ props.entry['Somaliland - 2015'] | currency }}</p>
        </template>
        <template slot="Somaliland - 2016" scope="props">
          <p>{{ props.entry['Somaliland - 2016'] | currency }}</p>
        </template>
        <template slot="Somaliland - 2017" scope="props">
          <p>{{ props.entry['Somaliland - 2017'] | currency }}</p>
        </template>
        <template slot="Unattributed - 2015" scope="props">
          <p>{{ props.entry['Unattributed - 2015'] | currency }}</p>
        </template>
        <template slot="Unattributed - 2016" scope="props">
          <p>{{ props.entry['Unattributed - 2016'] | currency }}</p>
        </template>
        <template slot="Unattributed - 2017" scope="props">
          <p>{{ props.entry['Unattributed - 2017'] | currency }}</p>
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
  name: 'LocationsTable',
  components: {
    DataTable,
  },
  data() {
    return {
      projects,
      gridColumns: ['Project title', 'NDP Pillar', 'Primary Sector', 'FGS - 2015', 'Benadir - 2015', 'Galmudug - 2015', 'Hiiraan & Middle Shabelle - 2015', 'Jubaland - 2015', 'Puntland - 2015', 'South West - 2015', 'Somaliland - 2015', 'Unattributed - 2015', 'FGS - 2016',  'Benadir - 2016',  'Galmudug - 2016',  'Hiiraan & Middle Shabelle - 2016',  'Jubaland - 2016',  'Puntland - 2016',  'South West - 2016',  'Somaliland - 2016',  'Unattributed - 2016', 'FGS - 2017', 'Benadir - 2017', 'Galmudug - 2017', 'Hiiraan & Middle Shabelle - 2017', 'Jubaland - 2017', 'Puntland - 2017', 'South West - 2017', 'Somaliland - 2017', 'Unattributed - 2017'],
      columnsToDisplay: ['Project title', 'NDP Pillar', 'Primary Sector', 'FGS - 2015', 'Benadir - 2015', 'Galmudug - 2015', 'Hiiraan & Middle Shabelle - 2015', 'Jubaland - 2015', 'Puntland - 2015', 'South West - 2015', 'Somaliland - 2015', 'Unattributed - 2015', 'FGS - 2016',  'Benadir - 2016',  'Galmudug - 2016',  'Hiiraan & Middle Shabelle - 2016',  'Jubaland - 2016',  'Puntland - 2016',  'South West - 2016',  'Somaliland - 2016',  'Unattributed - 2016', 'FGS - 2017', 'Benadir - 2017', 'Galmudug - 2017', 'Hiiraan & Middle Shabelle - 2017', 'Jubaland - 2017', 'Puntland - 2017', 'South West - 2017', 'Somaliland - 2017', 'Unattributed - 2017'],
      searchQuery: '',
      displayNames: {
        'Project title': 'Project Title',
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
