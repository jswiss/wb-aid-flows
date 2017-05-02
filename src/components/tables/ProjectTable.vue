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
        <vuetable-pagination-info ref="paginationInfo"
        ></vuetable-pagination-info>
      </div>
    </nav>
    <div class="scrollable">
      <vuetable ref="vuetable"
        api-url="http://vuetable.ratiw.net/api/users"
        :fields="fields"
        :css="css"
        pagination-path=""
        :multi-sort="true"
        multi-sort-key="ctrl"
        :sort-order="sortOrder"
        detail-row-component="my-detail-row"
        :append-params="moreParams"
        @vuetable:cell-clicked="onCellClicked"
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
    </div>
    <bulma-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></bulma-pagination>
  </div>
</template>

<script>
import accounting from 'accounting';
import moment from 'moment';
import Vue from 'vue';
import DetailRow from './DetailRow';
import FilterBar from './FilterBar';
import store from '../../vuex/store';

const projects = store.state.projectTable;

Vue.component('my-detail-row', DetailRow);

export default {
  name: 'ProjectTable',
  components: {
    FilterBar,
  },
  data() {
    return {

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
      // d3.csv(csv, (d) => {
      //   //eslint-disable-next-line
      //   console.log(d);
      // });
    },
  },
  mounted() {
    this.$events.listen('filter-set', filterText => this.onFilterSet(filterText));
    this.$events.listen('filter-reset', this.onFilterSet);
  },
  beforeDestroy() {
    this.$events.remove('filter-set');
    this.$events.remove('filter-reset');
  },
};
</script>

<style scoped>
  .scrollable {
    position: relative;
    overflow: auto;
  }
</style>§
