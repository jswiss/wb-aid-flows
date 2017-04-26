<!-- dashboard -->
<template lang="html">
  <div id="dashboard" class="columns">
    <charts-tabs class="column is-one-quarter"></charts-tabs>
    <div id="chart-content" class="column is-three-quarters">
    Dashboard content will go here
      <chart-1 v-if="['Chart1'].indexOf($route.name) > -1"></chart-1>
      <chart-2 v-if="['Chart2'].indexOf($route.name) > -1"></chart-2>
      <chart-3 v-if="['Chart3'].indexOf($route.name) > -1"></chart-3>
      <chart-4 v-if="['Chart4'].indexOf($route.name) > -1"></chart-4>
      <chart-5 v-if="['Chart5'].indexOf($route.name) > -1"></chart-5>
      <chart-6 v-if="['Chart6'].indexOf($route.name) > -1"></chart-6>
    </div>
  </div>
</template>
<script type="text/javascript">
  import ChartsTabs from './ChartsTabs';
  import Chart1 from './Chart1';
  import Chart2 from './Chart2';
  import Chart3 from './Chart3';
  import Chart4 from './Chart4';
  import Chart5 from './Chart5';
  import Chart6 from './Chart6';

  export default {
    name: 'Charts',
    components: {
      ChartsTabs,
      Chart1,
      Chart2,
      Chart3,
      Chart4,
      Chart5,
      Chart6,
    },
  };
</script> 

<style scoped>

</style>
