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

   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-99055406-1', 'auto');
    ga('send', 'pageview');

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
