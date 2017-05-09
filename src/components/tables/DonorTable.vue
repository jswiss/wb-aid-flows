<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="filter-bar control is-grouped">
                <div class="field">
                  <label for="" class="label">Select an Aid Category</label>
                  <p class="control">
                    <span class="select">
                      <select 
                        class="select"
                        type="text"
                        v-model="searchQuery"
                        value="search"
                      >
                        <option value="Development">Development</option>
                        <option value="Humanitarian">Humanitarian</option>
                        <option value="Peacekeeping">Peacekeeping</option>
                        <option value="">All Categories</option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="level-center">
            <div class="level-item">
              <div class="total">Development: ${{ donors[0]['Development Total'] * 1 | currency }}</div>
              <div class="total">Humanitarian: ${{ donors[0]['Humanitarian Total'] * 1 | currency }}</div>
              <div class="total">Peacekeeping: ${{ donors[0]['Peacekeeping Total'] * 1 | currency }}</div>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a class="button is-primary exportCSV" 
              v-on:click="exportCSV"
              >
              <span class="icon">
                <i class="fa fa-table"></i>
              </span>
              <span>Export Table</span>
              </a>
            </div>
          </div>
        </nav>
        <div class="scrollable">
          <data-table class="table is-bordered is-striped is-narrow"
            :data="donors"
            :columns-to-display="columnsToDisplay"
            :display-names="displayNames"
            :filter-key="searchQuery"
            :child-hideable="true"
            :child-init-hide="true"
            :columns-to-not-display="true"
          >
            <template slot="Allocation 2015 - USD" scope="props">
              <p>${{ props.entry['Allocation 2015 - USD'] | currency }}</p>
            </template>
            <template slot="Allocation 2016 - USD" scope="props">
              <p>${{ props.entry['Allocation 2016 - USD'] | currency }}</p>
            </template>
            <template slot="Allocation 2017 - USD" scope="props">
              <p>${{ props.entry['Allocation 2017 - USD'] | currency }}</p>
            </template>
            <template slot="Allocation 2018 - USD" scope="props">
              <p>${{ props.entry['Allocation 2018 - USD'] | currency }}</p>
            </template>
            <template slot="Allocation 2019 - USD" scope="props">
              <p>${{ props.entry['Allocation 2019 - USD'] | currency }}</p>
            </template>
            <template slot="Total 2015-19" scope="props">
              <p>${{ props.entry['Total 2015-19'] | currency }}</p>
            </template>
            <template slot="child" scope="props">
              <b>Original Currency: </b>{{ props.entry['Currency'] || 'n/a' }}
            </template>
          </data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import jsonexport from 'jsonexport';
import DataTable from './v-data-table.vue';
import store from '../../vuex/store';

const donors = store.state.donors;

console.log(donors);

export default {
  name: 'DonorTable',
  components: {
    DataTable,
  },
  data() {
    return {
      donors,
      gridColumns: ['Agency', 'Agency category', 'Aid Flow category', 'Allocation 2015 - USD', 'Allocation 2016 - USD', 'Allocation 2017 - USD', 'Allocation 2018 - USD', 'Allocation 2019 - USD', 'Total 2015-19', 'Currency'],
      columnsToDisplay: ['Agency', 'Agency category', 'Aid Flow category', 'Allocation 2015 - USD', 'Allocation 2016 - USD', 'Allocation 2017 - USD', 'Allocation 2018 - USD', 'Allocation 2019 - USD', 'Total 2015-19'],
      searchQuery: '',
      displayNames: {
        'Agency category': 'Agency Category',
        'Aid Flow category': 'Aid Category',
        'Allocation 2015 - USD': '2015',
        'Allocation 2016 - USD': '2016',
        'Allocation 2017 - USD': '2017',
        'Allocation 2018 - USD': '2018',
        'Allocation 2019 - USD': '2019',
      },
    };
  },
  methods: {
    allcap(value) {
      return value.toUpperCase();
    },
    exportCSV() {
      jsonexport(donors, (err, csv) => {
        if (err) return console.log(err);
        (function downloadCSV(args) {
          if (csv === null) return;
          const filename = 'Somalia_Aid_Flows_Donor_Envelope.csv';
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
