<!-- tables -->
<template lang="html">
  <div id="topmost" class="container is-fluid">
    <tables-tabs></tables-tabs>
    <project-table v-if="['ProjectTable'].indexOf($route.name) > -1"></project-table>
    <donor-table v-if="['DonorTable'].indexOf($route.name) > -1"></donor-table>
    <locations-table v-if="['LocationsTable'].indexOf($route.name) > -1"></locations-table>
    <funds-table v-if="['FundsTable'].indexOf($route.name) > -1"></funds-table>
  </div>
</template>
<script type="text/javascript">
import TablesTabs from './TablesTabs';
import ProjectTable from './ProjectTable';
import DonorTable from './DonorTable';
import LocationsTable from './LocationsTable';
import FundsTable from './FundsTable';

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99055406-1', 'auto');
  ga('send', 'pageview');


export default {
  name: 'tables',
  components: {
    TablesTabs,
    ProjectTable,
    DonorTable,
    LocationsTable,
    FundsTable,
  },
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
  #topmost {
    margin-top: 25px;
  }
</style>
