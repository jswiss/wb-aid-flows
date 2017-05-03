<!-- tables -->
<template lang="html">
  <div id="donor-table" class="container is-fluid">
    <nav class="level is-marginless">
      <div class="level-left">
        <div class="level-item">
        </div>
      </div>
      <div class="level-right">
          <a class="button is-primary exportClick" v-on:click="exportClick">
          <span class="icon">
            <i class="fa fa-table"></i>
          </span>
          <span>Export Table</span>
          </a>
        <!--<vuetable-pagination-info ref="paginationInfo"
        ></vuetable-pagination-info>-->
      </div>
    </nav>
    <table class="table is-bordered is-striped is-narrow">
      <thead>
        <tr>
          <th><abbr title="Agency">Agency</abbr></th>
          <th><abbr title="Agency Category">Agency Category</abbr></th>
          <th><abbr title="Aid Flow Category">Category</abbr></th>
          <th><abbr title="2015, USD">2015, USD</abbr></th>
          <th><abbr title="2016, USD">2016, USD</abbr></th>
          <th><abbr title="2017, USD">2017, USD</abbr></th>
          <th><abbr title="2018, USD">2018, USD</abbr></th>
          <th><abbr title="2019, USD">2019, USD</abbr></th>
          <th><abbr title="Total 2015 - 2019">Total</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in donors">
          <td>{{item.Agency}}</td>
          <td>{{item['Agency category']}}</td>
          <td>{{item['Aid Flow category']}}</td>
          <td>${{item['2015, USD'] | currency}}</td>
          <td>${{item['2016, USD'] | currency}}</td>
          <td>${{item['2017, USD'] | currency}}</td>
          <td>${{item['2018, USD'] | currency}}</td>
          <td>${{item['2019, USD'] | currency}}</td>
          <td>${{item['Total, 2015-19'] | currency}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
import store from '../../vuex/store';

const donors = store.state.donors;

export default {
  name: 'DonorTable',
  components: {
  },
  data() {
    return {
      donors: donors,
    };
  },
  computed: {

  },
  methods: {
    exportClick() {

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
  },
};
</script>

<style scoped>
  .container {
    position: relative;
    overflow: auto;
  }
</style>
