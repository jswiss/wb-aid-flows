<!-- tables -->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <tables-tabs></tables-tabs>
    <test-table v-if="['TestTable'].indexOf($route.name) > -1"></test-table>
    <test-table2 v-if="['TestTable2'].indexOf($route.name) > -1"></test-table2>
    <test-table3 v-if="['TestTable3'].indexOf($route.name) > -1"></test-table3>
    <test-table4 v-if="['TestTable4'].indexOf($route.name) > -1"></test-table4>
  </div>
</template>
<script type="text/javascript">
import TablesTabs from './TablesTabs';
import TestTable from './TestTable';
import TestTable2 from './TestTable2';
import TestTable3 from './TestTable3';
import TestTable4 from './TestTable4';

export default {
  name: 'tables',
  components: {
    TablesTabs,
    TestTable,
    TestTable2,
    TestTable3,
    TestTable4,
  },
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>
