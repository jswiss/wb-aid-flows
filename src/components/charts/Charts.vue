<!-- dashboard -->
<template lang="html">
  <div id="topmost" class="columns">
    <charts-tabs class="column is-one-quarter"></charts-tabs>
    <div id="chart-content" class="column is-three-quarters">
      <oda-chart v-if="['OdaChart'].indexOf($route.name) > -1"></oda-chart>
      <aid-by-category v-if="['AidByCategory'].indexOf($route.name) > -1"></aid-by-category>
      <aid-location-chart v-if="['AidLocationChart'].indexOf($route.name) > -1"></aid-location-chart>
      <aid-via-funds v-if="['AidViaFunds'].indexOf($route.name) > -1"></aid-via-funds>
      <aid-by-ndp-pillar v-if="['AidByNdpPillar'].indexOf($route.name) > -1"></aid-by-ndp-pillar>
      <aid-on-treasury v-if="['AidOnTreasury'].indexOf($route.name) > -1"></aid-on-treasury>
    </div>
  </div>
</template>
<script type="text/javascript">
  import ChartsTabs from './ChartsTabs';
  import OdaChart from './OdaChart';
  import AidByCategory from './AidByCategory';
  import AidLocationChart from './AidLocationChart';
  import AidViaFunds from './AidViaFunds';
  import AidByNdpPillar from './AidByNdpPillar';
  import AidOnTreasury from './AidOnTreasury';

  export default {
    name: 'Charts',
    components: {
      ChartsTabs,
      OdaChart,
      AidByCategory,
      AidLocationChart,
      AidViaFunds,
      AidByNdpPillar,
      AidOnTreasury,
    },
  };
</script> 

<style scoped>
  #topmost {
    margin-top: 25px;
  }
</style>
