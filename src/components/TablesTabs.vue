<!-- tables tabs-->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <router-link class="nav-item is-tab" to="/tables/test-table">
            Table 1
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/test-table2">
            Table 2
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/test-table3">
            Table 3
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/test-table4">
            Table 4
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'TablesTabs',
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>
