<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="filter-bar control is-grouped">
                <!--<div class="field">
                  <p class="control">
                    <input 
                      class="input is-success"
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search by any field"
                      value="search"
                    >
                  </p>
                </div>-->
              </div>
              <div class="filter-bar control is-grouped">
                <div class="field">
                  <span class="control">
                    <select 
                      class="select"
                      type="text"
                      v-model="searchQuery"
                      value="search"
                    >
                      <option value="">--select fund category--</option>
                      <option value="">All Funds</option>
                      <option value="SDRF">SDRF</option>
                      <option value="Other">Other</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="level-center">
            <div class="total-box">
              <p class="total-text">TOTAL SDRF: {{ sumOther }}</p>
            </div>
          </div>-->
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
            :data="funds"
            :columns-to-display="columnsToDisplay"
            :filter-key="searchQuery"
            :child-hideable="true"
            :child-init-hide="true"
            :columns-to-not-display="true"
          >
            <template slot="Total" scope="props">
              <b>{{ props.entry['Total'] }}</b>
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

const funds = store.state.funds;

export default {
  name: 'FundsTable',
  components: {
    DataTable,
  },
  data() {
    return {
      funds,
      gridColumns: ['Fund', 'Partner', '2015', '2016', '2017', 'Total', 'SDRF'],
      columnsToDisplay: ['Fund', 'Partner', '2015', '2016', '2017', 'Total'],
      searchQuery: '',
    };
  },
  methods: {
    allcap(value) {
      return value.toUpperCase();
    },
    exportCSV() {
      jsonexport(funds, (err, csv) => {
        if (err) return console.log(err);
        (function downloadCSV(args) {
          if (csv === null) return;
          const filename = 'Somalia_Funds_Data_2015-17.csv';
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
  computed: {
    // sumSDRF: function() {
    //   let sdrfArray = [];
    //   this.funds.forEach(d => {
    //     if (d.SDRF === 'SDRF') {
    //       sdrfArray.push(d['2015'] * 1, d['2016'] * 1, d['2017'] * 1);
    //     }
    //     let sdrf = sdrfArray.reduce((a, b) => a + b, 0);
    //     return sdrf;
    //   });
    // },
    // sumOther: function() {
    //   let otherArray = [];
    //   this.funds.forEach(d => {
    //     if (d.SDRF === 'Other') {
    //       otherArray.push(+d['2015'] * 1, +d['2016'] * 1, +d['2017'] * 1);
    //     }
    //     console.log(otherArray);
    //     return otherArray.reduce((a, b) => a + b, 0);
    //   });
    // },
  }
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
