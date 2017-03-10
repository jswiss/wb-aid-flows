<!-- tables -->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <router-link class="nav-item is-tab" to="/tables">
            Table 1
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables">
            Table 2
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables">
            Table 3
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables">
            Table 4
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'tables',
};
</script>

<style>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>
