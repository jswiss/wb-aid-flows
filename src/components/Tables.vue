<!-- tables -->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <tables-tabs></tables-tabs>
  </div>
</template>
<script type="text/javascript">
import TablesTabs from './TablesTabs';

export default {
  name: 'tables',
  components: {
    TablesTabs,
  },
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>
