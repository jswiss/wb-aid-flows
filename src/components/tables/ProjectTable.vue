<template>
  <div class="container">
    <nav class="level is-marginless" id="nav">
      <div class="level-left">
        <div class="level-item">
          <form id="search">
            <input name="query" class="input" placeholder="search to filter by any field" v-model="searchQuery">
          </form>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a class="button is-primary exportClick" v-on:click="exportClick">
          <span class="icon">
            <i class="fa fa-table"></i>
          </span>
          <span>Export Table</span>
          </a>
        </div>
      </div>
    </nav>
    <div class="scrollable">
      
    </div>
  </div>
</template>

<script>
import accounting from 'accounting';
import moment from 'moment';
import Vue from 'vue';
import DetailRow from './DetailRow';
import store from '../../vuex/store';

const projects = store.state.projectTable;

Vue.component('my-detail-row', DetailRow);

export default {
  name: 'ProjectTable',
  components: {
  },
  data() {
    return {
      gridColumns: ['Project title', 'Start Date', 'End Date ', 'NDP Pillar', 'Funders', 'Implementers', 'Project Value (USD)'],
      searchQuery: '',
      displayNames: {
        'Project title': 'Project Title',
        'Funders': 'Funder(s)',
        'Project Value (USD)': 'Total Project Value',
      },
      projects,
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
    exportClick() {

    },
  },
  mounted() {

  },
  beforeDestroy() {

  },
};
</script>

<style scoped>

  .level-item {
    margin-top: 6%;
  }

</style>§
