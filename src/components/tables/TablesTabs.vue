<!-- tables tabs-->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <div class="tabs is-centered">
      <ul>
        <li>
          <router-link class="nav-item is-tab" to="/tables/projects">
            Projects
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/donors">
            Donors
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/locations">
            Locations
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/tables/funds">
            Funds
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
