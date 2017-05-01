<!-- tables -->
<template lang="html">
  <div id="donor-table" class="container is-fluid">
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
          <td>{{item['2015, USD'] | currency}}</td>
          <td>{{item['2016, USD'] | currency}}</td>
          <td>{{item['2017, USD'] | currency}}</td>
          <td>{{item['2018, USD'] | currency}}</td>
          <td>{{item['2019, USD'] | currency}}</td>
          <td>{{item['Total, 2015-19'] | currency}}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
import accounting from 'accounting';
import store from '../../vuex/store';

const donors = store.state.donors;
console.log(donors);

export default {
  name: 'DonorTable',
  data() {
    return {
      donors: donors,
    };
  },
  computed: {
    formatNumber: function() {
      return accounting.formatNumber(value, 0);
    },
  },
  methods: {
    
  },
};
</script>

<style>

</style>
