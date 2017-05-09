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
