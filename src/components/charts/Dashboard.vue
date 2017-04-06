<!-- dashboard -->
<template lang="html">
  <div id="dashboard" class="columns">
    <charts-tabs class="column is-one-quarter"></charts-tabs>
    <div id="chart-content" class="column is-three-quarters">
    Dashboard content will go here
    </div>
  </div>
</template>
<script type="text/javascript">
  import ChartsTabs from './ChartsTabs';

  export default {
    name: 'dashboard',
    components: {
      ChartsTabs,
    },
  };
</script> 

<style scoped>

</style>
