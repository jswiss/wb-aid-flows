<!-- dashboard -->
<template lang="html">
  <div id="topmost" class="columns">
    <charts-tabs class="column is-one-quarter"></charts-tabs>
    <div id="chart-content" class="column is-three-quarters">
      <oda-chart v-if="['OdaChart'].indexOf($route.name) > -1"></oda-chart>
      <annual-disbursements-chart v-if="['AnnualDisbursementsChart'].indexOf($route.name) > -1"></annual-disbursements-chart>
      <aid-location-chart v-if="['AidLocationChart'].indexOf($route.name) > -1"></aid-location-chart>
      <chart-4 v-if="['Chart4'].indexOf($route.name) > -1"></chart-4>
      <chart-5 v-if="['Chart5'].indexOf($route.name) > -1"></chart-5>
      <chart-6 v-if="['Chart6'].indexOf($route.name) > -1"></chart-6>
    </div>
  </div>
</template>
<script type="text/javascript">
  import ChartsTabs from './ChartsTabs';
  import OdaChart from './OdaChart';
  import AnnualDisbursementsChart from './AnnualDisbursementsChart';
  import AidLocationChart from './AidLocationChart';
  import Chart4 from './Chart4';
  import Chart5 from './Chart5';
  import Chart6 from './Chart6';

  export default {
    name: 'Charts',
    components: {
      ChartsTabs,
      OdaChart,
      AnnualDisbursementsChart,
      AidLocationChart,
      Chart4,
      Chart5,
      Chart6,
    },
  };
</script> 

<style scoped>
  #topmost {
    margin-top: 25px;
  }
</style>
