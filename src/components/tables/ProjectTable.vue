<template>
  <div class="container">
    <nav class="level is-marginless">
      <div class="level-left">
        <div class="level-item">
          <filter-bar></filter-bar>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-primary exportClick" v-on:click="exportClick">
        <span class="icon">
          <i class="fa fa-table"></i>
        </span>
        <span>Export Table</span>
        </a>
      </div>
    </nav>
    <div class="scrollable">
      <data-table class="grid"
        :data="projects"
        :columns-to-display="gridColumns"
      >
      </data-table>
    </div>
  </div>
</template>

<script src="https://cdn.rawgit.com/mikemenaker/vue-data-table/1.0.1/src/v-data-table.min.js"></script>

<script>
import accounting from 'accounting';
import moment from 'moment';
import Vue from 'vue';
import DetailRow from './DetailRow';
import FilterBar from './FilterBar';
import DataTable from './v-data-table.vue';
import store from '../../vuex/store';

const projects = store.state.projectTable;

Vue.component('my-detail-row', DetailRow);

export default {
  name: 'ProjectTable',
  components: {
    FilterBar,
    DataTable,
  },
  data() {
    return {
      gridColumns: ['Location', 'Project title'],
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
  .scrollable {
    position: relative;
    overflow: auto;
  }
</style>§
