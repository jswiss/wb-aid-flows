<!-- tables -->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <tables-tabs></tables-tabs>
    <project-table v-if="['ProjectTable'].indexOf($route.name) > -1"></project-table>
    <donor-table v-if="['DonorTable'].indexOf($route.name) > -1"></donor-table>
  </div>
</template>
<script type="text/javascript">
import TablesTabs from './TablesTabs';
import ProjectTable from './ProjectTable';
import DonorTable from './DonorTable';


export default {
  name: 'tables',
  components: {
    TablesTabs,
    ProjectTable,
    DonorTable,
  },
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>
