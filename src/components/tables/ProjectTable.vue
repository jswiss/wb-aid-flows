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
    <bulma-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></bulma-pagination>
  </div>
</template>

<script>
import accounting from 'accounting';
// import * as d3 from 'd3';
import moment from 'moment';
import Vue from 'vue';
import VueEvents from 'vue-events';
import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
import BulmaPagination from './BulmaPagination';
import DetailRow from './DetailRow';
import FilterBar from './FilterBar';
import store from '../../vuex/store';

const projects = store.state.projectTable;

console.log(projects);

Vue.use(VueEvents);

Vue.component('my-detail-row', DetailRow);

export default {
  name: 'ProjectTable',
  components: {
    Vuetable,
    BulmaPagination,
    VuetablePaginationInfo,
    FilterBar,
  },
  data() {
    return {
      css: {
        tableClass: 'table is-bordered is-striped',
        ascendingIcon: 'fa fa-chevron-up',
        descendingIcon: 'fa fa-chevron-down',
        sortHandleIcon: 'fa fa-bars',
      },
      fields: [
        {
          name: 'Project Title',
          sortField: 'projectTitle',
        },
        {
          name: 'Description',
        },
        {
          name: 'Project Value',
          sortField: 'birthdate',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: '2015 Disbursement',
          sortField: 'birthdate',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: '2016 Disbursement',
          sortField: 'birthdate',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: '2017 Disbursement',
          sortField: 'birthdate',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Start Date',
          sortField: 'birthdate',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
          callback: 'formatDate|DD-MM-YYYY',
        },
        {
          name: 'End Date',
          sortField: 'nickname',
          callback: 'allcap',
        },
        {
          name: 'NDP Pillar',
          sortField: 'gender',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
          callback: 'genderLabel',
        },
        {
          name: 'Primary Sector',
          sortField: 'salary',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-right',
          callback: 'formatNumber',
        },
        {
          name: 'Other Sectors',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Reporting Agency',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Funders',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Implementers',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Implementer Category',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Project Website',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Gender',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Capacity Building',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
        {
          name: 'Stabilisation',
          title: 'Actions',
          titleClass: 'has-text-centered',
          dataClass: 'has-text-centered',
        },
      ],
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc',
        },
      ],
      moreParams: {},
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
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    // eslint-disable-next-line
    onCellClicked(data, field, event) {
      // eslint-disable-next-line
      console.log('cellClicked: ', field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    onFilterSet(filterText) {
      this.moreParams = {
        // eslint-disable-next-line
        'filter': filterText,
      };
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    onFilterReset() {
      this.moreParams = {};
      this.$refs.vuetable.refresh();
      Vue.nextTick(() => this.$refs.vuetable.refresh());
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

<style>

</style>§
